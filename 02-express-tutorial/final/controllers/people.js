const express = require('express')

const people = [
    { id: 1, name: 'john' },
    { id: 2, name: 'peter' },
    { id: 3, name: 'susan' },
    { id: 4, name: 'anna' },
    { id: 5, name: 'emma' },
  ]

const getPeople = (req, res) => {
    res.status(200).json({success:true, data: people})
}

const createPerson = (req, res) => {
    res.status(201).json({success:true, data: people})
}

const updatePerson = (req, res) => {
    const { id } = req.params
    const { name } = req.body
    console.log(id, name)
    console.log(req.body)
    res.send('hello world')
}

const deletePerson = (req, res) => {
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
}

module.exports = { getPeople, createPerson, updatePerson, deletePerson}