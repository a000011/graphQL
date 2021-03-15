import { GraphQLInputObjectType, GraphQLObjectType, GraphQLNonNull, GraphQLString, GraphQLID, GraphQLList } from "graphql";
import {User} from "../entity/User";
import {Group} from "../entity/Group";
import {Rank} from "../entity/Rank";


const UserType: GraphQLObjectType = new GraphQLObjectType({
    name: "Student",
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        secname: { type: GraphQLString },
        userGroupId: { type: GraphQLString },
        rank: { type: GraphQLString },
        isAdmin: { type: GraphQLString },
        password: { type: GraphQLString },
        picture: { type: GraphQLString },
        about: { type: GraphQLString },
        group: {
            type: GroupType,
            async resolve(parent, args) {
                return await Group.findOne({id: parent.userGroup});
            }
        }
    })
})

const GroupType: GraphQLObjectType = new GraphQLObjectType({
    name: "Group",
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        picture: { type: GraphQLString },
        about: { type: GraphQLString },
        Users: {
            type: UserType,
            resolve(parent, args) {
            }
        }

    })
})

const RankType: GraphQLObjectType = new GraphQLObjectType({
    name: "Rank",
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        picture: { type: GraphQLString },
        Users: {
            type: new GraphQLList(UserType),
            resolve(parent, args) {
            }
        }

    })
})

const UserInput = new GraphQLInputObjectType({
    name: "UserInput",
    fields:{
        id:{type: GraphQLID},
        name: { type: GraphQLString },
        secname: { type: GraphQLString },
        userGroup: { type: GraphQLString },
        rank: { type: GraphQLString },
        isAdmin: { type: GraphQLString },
        password: { type: GraphQLString },
        picture: { type: GraphQLString },
        about: { type: GraphQLString }
    }
})

const GroupInput = new GraphQLInputObjectType({
    name: "GroupInput",
    fields:{
        id:{type: GraphQLID},
        name: { type: GraphQLString },
        picture: { type: GraphQLString },
        about: { type: GraphQLString }
    }
})

const RankInput = new GraphQLInputObjectType({
    name: "rankInput",
    fields:{
        id:{type: GraphQLID},
        name: { type: GraphQLString },
        picture: { type: GraphQLString }
    }
})

export {  RankInput, GroupType, UserType, RankType, UserInput, GroupInput };