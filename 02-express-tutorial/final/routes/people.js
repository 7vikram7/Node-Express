const express = require('express')
const router = express.Router()

const people = [
    { id: 1, name: 'john' },
    { id: 2, name: 'peter' },
    { id: 3, name: 'susan' },
    { id: 4, name: 'anna' },
    { id: 5, name: 'emma' },
  ]
  
router.get('/', (req, res) => {
    res.status(200).json({success:true, data: people})
})

router.post('/',(req, res) => {
    res.status(201).json({success:true, data: people})
})

router.put('/:id', (req, res) => {
    const { id } = req.params
    const { name } = req.body
    console.log(id, name)
    console.log(req.body)
    res.send('hello world')
})

router.delete('/:id', (req, res) => {
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

module.exports = router