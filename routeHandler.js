var express = require('express'),
    path = require('path'),
    router = express.Router(),
    blog = require('./routes/blogController.js')

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/index.html'))
})

// router.get('/blog', blog.getAll)
//
// router.get('/blog/create', (req, res) => { /*finished*/
//   res.sendFile(path.join(__dirname, '/views/newPost.html'))
// })
// router.post('/blog', blog.create) /*finished*/
// router.get('/blog/:id', blog.get)  /*finished everything except the view*/
// router.put('/blog/:id', blog.update)
// router.delete('/blog/:id', blog.delete)

module.exports = router
