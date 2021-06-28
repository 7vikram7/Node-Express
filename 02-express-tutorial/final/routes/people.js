const express = require('express')
const router = express.Router()

const  { getPeople, createPerson, updatePerson, deletePerson} = require('../controllers/people')

// router.get('/', getPeople)

// router.post('/', createPerson)

// router.put('/:id', updatePerson)

// router.delete('/:id', deletePerson)

router.route('/').get(getPeople)
router.route('/').post(createPerson)
router.route('/:id').put(updatePerson)
router.route('/:id').delete(deletePerson)


module.exports = router