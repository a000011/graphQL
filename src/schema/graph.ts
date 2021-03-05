import { GraphQLObjectType, GraphQLNonNull, GraphQLString, GraphQLSchema, GraphQLID, GraphQLList } from "graphql";
const userSchema = require("../Models/Users");
const groupSchema = require("../Models/Group");
import { GroupType, UserType } from "./GraphTypes";
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