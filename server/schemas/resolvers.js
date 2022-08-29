const { AuthenticationError } = require('apollo-server-express');
const {BodyPart, Equipment, Exercise, Target, User} = require('../models');
const {signToken} = require('../utils/auth');