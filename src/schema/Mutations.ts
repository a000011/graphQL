import { GraphQLObjectType, GraphQLNonNull, GraphQLString } from "graphql";
const userSchema = require("../Models/Users");
const groupSchema = require("../Models/Group");
const rankSchema = require("../Models/Ranks");
import { RankUpdateInput, RankInput, GroupUpdateInput, GroupInput, GroupType, RankType, UserType, UserInput, UserUpdateInput } from "./GraphTypes";

const Mutations = new GraphQLObjectType({
    name: "Mutations",
    fields: {
        AddGroup: {
            type: GroupType,
            args: {
                Group:{type:GroupInput}
            },
            resolve(parent, args) {
                let newGroup = new groupSchema(args.Group)
                return newGroup.save();
            }
        },
        AddUser: {
            type: UserType,
            args: {
                User: { type: UserInput }
            },
            resolve(parent, args) {
                let newUser = new userSchema(args.User)
                return newUser.save();
            }
        },
        AddRank: {
            type: RankType,
            args: {
                Rank:{type:RankInput}
            },
            resolve(parent, args) {
                let newRank = new rankSchema(args.Rank);
                return newRank.save();
            }
        },
        UpdateRank:{
            type: RankType,
            args: { 
                Rank:{type:RankUpdateInput}
            },
            async resolve(parent, args) {
                await rankSchema.updateOne({_id: args.Rank.id },args.Rank);
                return rankSchema.findById(args.Rank.id);
            }
        },
        UpdateGroup: {
            type: GroupType,
            args: {
                Group: {type: GroupUpdateInput}
            },
            async resolve(parent, args) {
                await groupSchema.updateOne({_id: args.Group.id},args.Group);
                return groupSchema.findById(args.Group.id);
            }
        },
        UpdateUser: {
            type: UserType,
            args: {
                User: { type: UserUpdateInput }
            },
            async  resolve(parent, args) {
                await userSchema.updateOne({_id: args.User.id},args.User);
                return userSchema.findById(args.User.id);
            }
        }

    }
});

export { Mutations };