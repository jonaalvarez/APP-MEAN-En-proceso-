const Person = require('../models/person');

const personCtrl = {};

personCtrl.getPersons = async (req, res) => {
    const persons = await Person.find();
    res.json(persons);
};

personCtrl.createPerson = async (req, res) => {
    const person = new Person({
        name: req.body.name,
        position: req.body.position,
        team: req.body.team,
        price: req.body.price
    });
    await person.save();
    res.json({
        'status':'Person Saved'
    });
};

personCtrl.getPerson = async (req, res) => {
    const person = await Person.findById(req.params.id);
    res.json(person)
};

personCtrl.editPerson = async (req, res) =>{
    const { id } = req.params;
    const person = {
        name: req.body.name,
        position: req.body.position,
        team: req.body.team,
        price: req.body.price
    };
    await Person.findByIdAndUpdate(id, {$set: person}, {new: true});
    res.json({status: 'Person Update'});
};

personCtrl.deletePerson = async (req, res) => {
    await Person.findByIdAndRemove(req.params.id);
    res.json({status: 'Person deleted'});
};

module.exports = personCtrl;