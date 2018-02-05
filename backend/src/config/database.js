const mongoose = require('mongoose')

//API de Promise do mongoose vai usar o API de Promise do Node.
mongoose.Promise = global.Promise
module.exports = mongoose.connect('mongodb://localhost/todo')