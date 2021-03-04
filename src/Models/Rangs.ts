import mongoose from "mongoose";

const schema = mongoose.Schema;

const rangSchema = new schema({
    id: String,
    name: String,
    picture: String
});

module.exports = mongoose.model('Rangs', rangSchema);