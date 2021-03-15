import { GraphQLSchema } from "graphql";

import { RootQuery } from "./RootQueryType";
import { Mutations } from "./Mutations";

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutations
})
// mutation{
// 	AddUser(
//     name: "Sasha",
//     secname: "Sasha",
//     userGroup: "603bbc624bed8b28788090f8",
//     rang: "7",
//     isAdmin: "false",
//     password: "neskazhu",
//     picture: "=(",
//     about: "paren"
//   ){
//     name
//     secname
//     userGroup

//   }
// }