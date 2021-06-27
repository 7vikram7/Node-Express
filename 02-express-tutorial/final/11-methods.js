const app = require('express')()
const express = require('express')
var bodyParser = require('body-parser');

let {people} = require('./data');
const e = require('express');

// static assets
app.use(express.static('./methods-public'))

//parse form data
app.use(express.urlencoded({extended:false}))

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());


app.get('/api/people', (req, res) => {
    res.status(200).json({success:true, data: people})
})

app.post('/api/people',(req, res) => {
    res.status(201).json({success:true, data: people})
})

app.post('/login', (req, res) => {
    const {name} = req.body
    if (name) {
        return res.status(200).send(`Welcome ${name}`)
    }
    res.status(401).send('Please Provide Credentials')
})

app.put('/api/people/:id', (req, res) => {
    const { id } = req.params
    const { name } = req.body
    console.log(id, name)
    console.log(req.body)
    res.send('hello world')
})

app.delete('/api/people/:id', (req, res) => {
    const person = people.find((person) => person.id === Number(req.params.id))
    if (!person) {
        return res
        .status(404)
        .json({succss: false, msg: `no person with id ${req.params.id}`})
    }

    const newPeople = people.filter((person) => person.id != req.params.id)
    return res
    .status(200)
    .json({succss: true, data: newPeople})
})

app.listen(5000, () => {
    console.log('Server is listening on port 5000')
})

