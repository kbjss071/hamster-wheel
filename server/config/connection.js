const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/health-and-exercise', {
  useNewUrlParser: true,
});

module.exports = mongoose.connection;
