const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    name: String,
    userId: String
});

module.exports = mongoose.model('Project', projectSchema);