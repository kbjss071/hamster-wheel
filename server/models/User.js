const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const Save = require('./Saved')

const userSchema = new Schema (
    {
        username: {
            type: String,
            required: true,
            unique: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'Must use a valid email address'],
        },
        password: {
            type: String,
            required: true,
            minLength: 5,
        },
        firstName: {
            type: String,
        },
        lastName: {
            type: String
        },
        height: {
            type: Number
        },
        weight: {
            type: Number
        },
        savedExercise: [Save.schema]
    },
    {
        toJSON:{
            virtuals: true,
        }
    }
);

// hash user password
userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }
  
    next();
  });
  
  // custom method to compare and validate password for logging in
  userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
  };
  
  // when we query a user, we'll also get another field called `exerciseCount` with the number of exercises we have
  userSchema.virtual('exerciseCount').get(function () {
    return this.savedExercise.length;
  });
  
  const User = model('User', userSchema);
  
  module.exports = User;
  