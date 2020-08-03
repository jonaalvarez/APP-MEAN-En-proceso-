const mongoose = require('mongoose');
const { Schema } = mongoose;

const PersonSchema = new Schema({
    name: {type: String, required: true},
    position: { type: String, required: true },
    team: { type: String, required: true },
    price: { type: Number, required: true }
})

mongoose.model('Person', PersonSchema);

module.exports = mongoose.model('Person', PersonSchema);