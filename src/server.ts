const express = require("express");
const graphqlHTTP = require("express-graphql").graphqlHTTP;
const schema = require("./schema/Graph");
import { createConnection } from "typeorm";

const app = express();
const PORT = 8000;
createConnection();

app.use("/graph", graphqlHTTP({
    schema: schema,
    graphiql: true
}));

app.listen(PORT, () => {
    console.log("[server]: Server is working");
});
