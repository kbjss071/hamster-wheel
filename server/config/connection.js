const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://hamsterwheel:hamsterwheel1234@cluster0.4dmhraw.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("DB CONNECTED"))
.catch((err) => console.log("DB CONNECTION ERROR", err));

module.exports = mongoose.connection;
