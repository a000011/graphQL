import mongoose from "mongoose";

const schema = mongoose.Schema;

const groupSchema = new schema({
    id: String,
    name: String,
    picture: String,
    about: String
});

module.exports = mongoose.model('Group', groupSchema);