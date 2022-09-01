const { AuthenticationError } = require('apollo-server-express');
const Exercise = require('../models/Exercise');
const Save = require('../models/Saved');
const User = require('../models/User')
const {signToken} = require('../utils/auth');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const resolvers = {
    Query: {
        users: async() => {
            return User.find()
        },
        user: async(parent, {userId}) => {
            return User.findOne({_id: UserId});
        },
        exercises: async(parent, {muscle}) => Exercise.find({muscle: muscle}),
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
            console.log(args);
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

        saveExercise: async (parent, {exercise}, context) => {
            if(context.user) {
                const save = new Save({exercise});
                return User.findByIdAndUpdate (context.user.id, {
                        $push: {savedExercise: save}
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
                    {$pull: {savedExercise: {_id: exerciseId}}},
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