const mongoose = require('mongoose');

// setting mongoose to use node promise
mongoose.Promise = global.Promise;
// connecting to the database
mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};