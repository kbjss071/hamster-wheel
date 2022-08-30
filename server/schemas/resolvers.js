const { AuthenticationError } = require('apollo-server-express');
const {Exercise, User} = require('../models');
const {signToken} = require('../utils/auth');

const resolvers = {
    Query: {
        exercises: async() => Exercise.find(),
        user: async(parent, args, context) => {
            if(context.user){
                const user = await User.findById(context.user.id).populate({
                    populate: 'exercise'
                })

                return user;
            }

            throw new AuthenticationError('Not logged in');
        }
    },

    Mutation: {
        addUser: async(parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user };
        },
        updateUser: async (parent, args, context) => {
            if (context.user) {
            return User.findByIdAndUpdate(context.user.id, args, {
                new: true,
            });
            }
    
            throw new AuthenticationError('Not logged in');
        },
        login: async (parent, {username, password}) => {
            const user = await User.findOne({username});

            if(!user){
                throw new AuthenticationError('Incorrect credentials');
            }
            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user);

            return { token, user };

        }

    },
}