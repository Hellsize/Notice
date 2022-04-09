const express = require('express'),
    app = express(),
    session = require('express-session')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('templates'));
app.use(
    session({
        secret: 'you secret key',
        saveUninitialized: true,
    })
)


app.get('/', (req, res) => {
    response.send(__dirname + "/templates/index.html")
    console.log(req.session.showAd)

})




app.listen(3000, function() {
    console.log(`Server listens http://${host}:${port}`)
})