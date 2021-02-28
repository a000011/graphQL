import mongoose from "mongoose";

const schema = mongoose.Schema;

const studentSchema = new schema({
    id: String,
    name: String,
    sex: String,
    groupid: String
});

module.exports = mongoose.model('Student', studentSchema);