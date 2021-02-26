const express = require('express');
const graphqlHTTP = require("express-graphql").graphqlHTTP;
const schema = require("./schema/graph");
// rest of the code remains same
const app = express();
const PORT = 8000;

app.get('/', (req: any, res: any) => res.send('Express + TypeScript Server'));

app.use("/graph", graphqlHTTP({
    schema: schema,
    graphiql: true
}));
app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running`);
});