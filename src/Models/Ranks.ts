import mongoose from "mongoose";

const schema = mongoose.Schema;

const rankSchema = new schema({
    name: String,
    picture: String
});

module.exports = mongoose.model('Ranks', rankSchema);