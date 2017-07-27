var express = require('express'),
    db = require('./config/db')
    http = require('http'),
    path = require('path'),
    port = Number(process.env.PORT || 8888),
    router = require('./routeHandler'),
    bodyParser = require('body-parser')

var app = express()

app.set('views', path.join(__dirname, '/views'))
app.set('view engine', 'ejs')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname, '/public')))
app.use('/', router)

app.listen(port, function() {
  console.log('Server started on port ' + port)
})

module.exports = app
