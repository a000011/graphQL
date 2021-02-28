import mongoose from "mongoose";

const schema = mongoose.Schema;

const groupSchema = new schema({
    id: String,
    name: String
});

module.exports = mongoose.model('Group', groupSchema);