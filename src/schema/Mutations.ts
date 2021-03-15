import { GraphQLObjectType, GraphQLNonNull, GraphQLString } from "graphql";

import {User} from "../entity/User";
import {Group} from "../entity/Group";
import {Rank} from "../entity/Rank";



import {  RankInput,  GroupInput, GroupType, RankType, UserType, UserInput,  } from "./GraphTypes";

const Mutations = new GraphQLObjectType({
    name: "Mutations",
    fields: {
        AddGroup: {
            type: GroupType,
            args: {
                Group:{type:GroupInput}
            },
            async resolve(parent, args) {
                return await Group.create(args.Group as Group).save()
            }
        },
        AddUser: {
            type: UserType,
            args: {
                User: { type: UserInput }
            },
            async resolve(parent, args) {
                return await User.create(args.User as User).save()
            }
        },
        AddRank: {
            type: RankType,
            args: {
                Rank:{type:RankInput}
            },
            async resolve(parent, args) {
                return await Rank.create(args.Rank as Rank).save()
            }
        },
        UpdateRank:{
            type: RankType,
            args: { 
                Rank:{type:RankInput}
            },
            async resolve(parent, args) {
                
            }
        },
        UpdateGroup: {
            type: GroupType,
            args: {
                Group: {type: GroupInput}
            },
            async resolve(parent, args) {
               
            }
        },
        UpdateUser: {
            type: UserType,
            args: {
                User: { type: UserInput }
            },
            async  resolve(parent, args) {
               
            }
        }

    }
});

export { Mutations };