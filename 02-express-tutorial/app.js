const app = require('express')()
const express = require('express')
var bodyParser = require('body-parser');

const people = require('./final/routes/people');
const e = require('express');

// static assets
app.use(express.static('./methods-public'))

//parse form data
app.use(express.urlencoded({extended:false}))

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use('/api/people',people)

app.post('/login', (req, res) => {
    const {name} = req.body
    if (name) {
        return res.status(200).send(`Welcome ${name}`)
    }
    res.status(401).send('Please Provide Credentials')
})

app.listen(5000, () => {
    console.log('Server is listening on port 5000')
})

