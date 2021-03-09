import { GraphQLObjectType, GraphQLID, GraphQLList, GraphQLScalarType, GraphQLString } from "graphql";
const userSchema = require("../Models/Users");
const groupSchema = require("../Models/Group");
const rankSchema = require("../Models/Ranks");
import { GroupType, UserType, RankType } from "./GraphTypes";

const RootQuery = new GraphQLObjectType({
    name: "Queries",
    fields: {
        Groups: {
            type: new GraphQLList(GroupType),
            resolve() {
                return groupSchema.find({});
            }
        },
        GroupById: {
            type: GroupType,
            args: { id: { type: GraphQLString } },
            resolve(parent, args) {
                return groupSchema.findById(args.id);
            }

        },        
        Users: {
            type: new GraphQLList(UserType),
            resolve() {
                return userSchema.find({});
            }
        },
        UserById: {
            type: UserType,
            args: {
                id:{type: GraphQLID}
            },
            resolve(parent, args) {
                return userSchema.findById(args.id);
            }
        },
        Ranks: {
            type: new GraphQLList(RankType),
            resolve() {
                return rankSchema.find({});
            }

        },
        RankById: {
            type: RankType,
            args: {
                id:{type: GraphQLString}
            },
            resolve(parent, args) {
                return rankSchema.findById(args.id);
            }
        },
    }
})

export { RootQuery };