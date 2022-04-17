const express = require('express'),
    app = express(),
    session = require('express-session')

const host = localhost;
const port = 3000;
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('templates/images'));



app.use(
    session({
        secret: 'you secret key',
        saveUninitialized: true,
    })
)

app.get('/', function(req, res) {
    res.render('index.html', { name: 'leo' });
});

app.get('/', (req, res) => {
    response.send(__dirname + "/templates/index.html")
    console.log(req.session.showAd)

})


app.listen(3000, function() {
    console.log(`Server listens http://${host}:${port}`)
})