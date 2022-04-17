const express = require('express');
const app =express

app.get('/', function(req, res) {
    res.render("test.html")
});

var res = nunjucks.renderString('Hello {{ username }}', { username: 'James' });

app.listen(3000, function() {
    console.log(`Server listens`)
})