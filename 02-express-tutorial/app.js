const app = require('express')()
const express = require('express')
var bodyParser = require('body-parser');

const people = require('./final/routes/people');

const auth = require('./final/routes/auth');


// static assets
app.use(express.static('./methods-public'))

//parse form data
app.use(express.urlencoded({extended:false}))

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use('/api/people', people)
app.use('/login', auth)


app.listen(5000, () => {
    console.log('Server is listening on port 5000')
})

