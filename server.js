const express = require('express'),
    app = express(),
    session = require('express-session')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/views/static'));
const nunjucks = require('nunjucks'); // templating framework
nunjucks.configure(__dirname + '/views', {
    autoescape: true,
    express: app
});

app.use(
    session({
        secret: 'you secret key',
        saveUninitialized: true,
    })
)

app.get('/', function(req, res) {
    res.render(__dirname + '/views/index.html', );
});

app.get('/message', function(req, res) {
    res.render(__dirname + "/views/message.njk")


})


app.listen(3000, function() {
    console.log(`Servers`)
})