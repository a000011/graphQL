import { GraphQLObjectType, GraphQLID, GraphQLList } from "graphql";
const userSchema = require("../Models/Users");
const groupSchema = require("../Models/Group");
import {GroupType, UserType} from "./GraphTypes";

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        Group: {
            type: GroupType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return groupSchema.findById(args.id);                
            }

        },
        Groups: {
            type: new GraphQLList(GroupType),
            resolve(){
                return groupSchema.find({});
            }
        },
        Users:{
            type: new GraphQLList(UserType),
            resolve(){
                return userSchema.find({});                
            }
        }
    }
})

export {RootQuery};