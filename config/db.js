var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/willrobinsn')

var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error'))
db.once('open', function(){console.log('Successfully connected')})

require('../models/blogPost')

exports.db = db
