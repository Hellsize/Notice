const express = require('express'),
    app = express(),
    session = require('express-session')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/views/static'));
<<<<<<< HEAD
const nunjucks = require('nunjucks');
=======
const nunjucks = require('nunjucks'); // templating framework
>>>>>>> 369434b53c2405be9560b5940c835c29366b2fc9
nunjucks.configure(__dirname + '/views', {
    autoescape: true,
    express: app
});

app.use(
    session({
        secret: 'you secret key',
        saveUninitialized: true,
        resave:true,
    })
)

app.get('/', function(req, res) {
    res.render(__dirname + '/views/index.html', );
});

app.get('/message', function(req, res) {
    res.render(__dirname + "/views/message.njk")
<<<<<<< HEAD
=======

>>>>>>> 369434b53c2405be9560b5940c835c29366b2fc9


})
app.get('/reg',function(req,res){
    res.render(__dirname + "/views/reg.html")
})

app.listen(3000, function() {
    console.log(`Servers`)
})