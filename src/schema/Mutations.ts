import { GraphQLObjectType, GraphQLNonNull, GraphQLString } from "graphql";
const userSchema = require("../Models/Users");
const groupSchema = require("../Models/Group");
import {GroupType, UserType} from "./GraphTypes";

const Mutations = new GraphQLObjectType({
    name:"Mutation",
    fields: {
        AddGroup: {
            type: GroupType,
            args:{
                name: {type: new GraphQLNonNull(GraphQLString)},
                picture: { type: new GraphQLNonNull(GraphQLString)},
                about: { type: new GraphQLNonNull(GraphQLString)}
            },
            resolve(parent, args){
                let newGroup = new groupSchema({
                    name: args.name,
                    picture: args.picture,
                    about: args.about
                })
                return newGroup.save();
            }
        },
        AddUser:{
            type: UserType,
            args:{
                name: { type: new GraphQLNonNull(GraphQLString) },
                secname: { type: new GraphQLNonNull(GraphQLString)},
                userGroup: { type: new GraphQLNonNull(GraphQLString)},
                rang: { type: new GraphQLNonNull(GraphQLString)},
                isAdmin: { type: new GraphQLNonNull(GraphQLString)},
                password: { type: new GraphQLNonNull(GraphQLString)},
                picture: { type: new GraphQLNonNull(GraphQLString)},
                about: { type: GraphQLString },
            },
            resolve(parent, args){
                let newUser = new userSchema({
                    name: args.name,
                    secname: args.secname,
                    userGroup: args.userGroup,
                    rang: args.rang,
                    isAdmin: args.isAdmin,
                    password: args.password,
                    picture: args.picture,
                    about: args.about
                })
                return newUser.save();
            }
        }
    }
});

export {Mutations};