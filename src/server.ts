import express from "express";
import mongoose from "mongoose";
const graphqlHTTP = require("express-graphql").graphqlHTTP;
const schema = require("./schema/Graph");

const app = express();
const PORT = 8000;

mongoose.connect('mongodb+srv://root:pussieater228@graphql.gg5vz.mongodb.net/graphql', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindAndModify: false,
    // useCreateIndex: true
});
mongoose.connection.once('open', () => {
    console.log("🤠 DB connected");
})

app.use("/graph", graphqlHTTP({
    schema: schema,
    graphiql: true
}));

app.listen(PORT, () => {
    console.log("😎 [server]: Server is working");
});
