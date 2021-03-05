import mongoose from "mongoose";

const schema = mongoose.Schema;

const userSchema = new schema({
    id: String,
    name: String,
    secname: String,
    userGroup: String,
    rank: String,
    isAdmin: String,
    password: String,
    picture: String,
    about: String
});

module.exports = mongoose.model('Student', userSchema);