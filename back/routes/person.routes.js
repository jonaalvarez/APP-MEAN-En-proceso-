const express = require ('express');
const router = express.Router();

const person = require('../controllers/person.controller');

router.get('/', person.getPersons);
router.post('/', person.createPerson);
router.get('/:id', person.getPerson);
router.put('/:id', person.editPerson);
router.delete('/:id', person.deletePerson);

module.exports = router;