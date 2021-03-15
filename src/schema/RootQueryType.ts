import { GraphQLObjectType, GraphQLID, GraphQLList, GraphQLScalarType, GraphQLString } from "graphql";
import {User} from "../entity/User";
import {Group} from "../entity/Group";
import {Rank} from "../entity/Rank";
import { GroupType, UserType, RankType } from "./GraphTypes";

const RootQuery = new GraphQLObjectType({
    name: "Queries",
    fields: {
        Groups: {
            type: new GraphQLList(GroupType),
            async resolve() {
                return await Group.find();
            }
        },
        GroupById: {
            type: GroupType,
            args: { id: { type: GraphQLString } },
            resolve(parent, args) {
            }

        },        
        Users: {
            type: new GraphQLList(UserType),
            async resolve() {
                return await User.find();
            }
        },
        UserById: {
            type: UserType,
            args: {
                id:{type: GraphQLID}
            },
            resolve(parent, args) {
            }
        },
        Ranks: {
            type: new GraphQLList(RankType),
            async resolve() {
                return await Rank.find();
            }

        },
        RankById: {
            type: RankType,
            args: {
                id:{type: GraphQLString}
            },
            resolve(parent, args) {
                
            }
        },
    }
})

export { RootQuery };