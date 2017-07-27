var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    autoIncrement = require('mongodb-autoincrement')


var postSchema = new Schema({
  title: String,
  content: String,
  description: String,
  img: String,
  timestamp: Date
}, {_id: true})

postSchema.plugin(autoIncrement.mongoosePlugin)

var Post = mongoose.model('Post', postSchema)

module.exports = Post
