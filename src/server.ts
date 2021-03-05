import express from "express";
const graphqlHTTP = require("express-graphql").graphqlHTTP;
const schema = require("./schema/Graph");
import Mongo from "./DataBase/Mongo"

const app = express();
const PORT = 8000;

Mongo.connect();
Mongo.connect_once();

app.use("/graph", graphqlHTTP({
    schema: schema,
    graphiql: true
}));

app.listen(PORT, () => {
    console.log("😎 [server]: Server is working");
});
