const { AuthenticationError } = require('apollo-server-express');
const {Exercise, User} = require('../models');
const {signToken} = require('../utils/auth');

const resolvers = {
    Query: {
        users: async() => {
            return User.find()
        },
        user: async(parent, {userId}) => {
            return User.findOne({_id: UserId});
        },
        exercises: async() => Exercise.find(),
        me: async(parent, args, context) => {
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

        },

        saveExercise: async (parent, {userId, exercise}, context) => {
            if(context.user) {
                return User.findOneAndUpdate (
                    {_id: userId},
                    {
                        $push: {savedExercise: {exercise}}
                    },
                    {
                        new: true
                    }
                )
            }
            throw new AuthenticationError('Not logged in')
        },

        deleteExercise: async (parent, { exerciseId }, context) => {
            if(context.user){
                return User.findOneAndUpdate(
                    {_id: context.user._id},
                    {$pull: {savedExercise: {exercise_id: exerciseId}}},
                    {new: true}
                )
            }
            throw new AuthenticationError('You need to be logged in!')
        },

        removeUser: async(parent, args, context) => {
            if(context.user) {
                return User.findOneAndDelete({_id: context.user._id});
            }
            throw new AuthenticationError('You need to be logged in!');
        }

    },
}

module.exports = resolvers;