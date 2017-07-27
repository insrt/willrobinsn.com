var express = require('express'),
    Post = require('../models/blogPost'),
    mongoose = require('mongoose')

exports.getAll = (req, res) => {
  Post.find({}, (err, posts) => {
    if(err) throw err

    res.render('blog', {posts: posts})
    // console.log(posts)
  })
}

var newpost = Post({
  title: 'title',
  content: 'content',
  description: 'description',
  img: 'img',
  timestamp: Date.now()
})

exports.create = (req, res) => {
  var newpost = Post({
    title: req.body.title,
    content: req.body.content,
    description: req.body.description,
    img: req.body.img,
    timestamp: new Date()
  })

  newpost.save((err) => {
    if(err) throw err

    console.log('post saved successfully')
  })

  getAll()
}

exports.get = (req, res) => {
  Post.findById(req.params.id, (err, post) => {
    if(err) throw err

    res.render('blogPost', {
      title: post.title,
      content: post.content,
      description: post.description,
      img: post.img,
      created_at: post.timestamp
    })
  })

}

exports.update = (req, res) => {
  Post.findByIdAndUpdate(req.params.id, {
    title: req.body.title,
    content: req.body.content
  }), (err, post) => {
    if(err) throw err
    console.log(post)
  }
}

exports.delete = (req, res) => {
  Post.findByIdAndRemove(req.params.id, (err) => {
    if(err) throw err

    console.log('post deleted')
  })
}
