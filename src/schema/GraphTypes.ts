import { GraphQLObjectType, GraphQLNonNull, GraphQLString, GraphQLID, GraphQLList } from "graphql";
const userSchema = require("../Models/Users");
const groupSchema = require("../Models/Group");
const rankSchema = require("../Models/Ranks");


const UserType: GraphQLObjectType = new GraphQLObjectType({
    name: "Student",
    fields: () => ({
        name: { type: new GraphQLNonNull(GraphQLString) },
        secname: { type: new GraphQLNonNull(GraphQLString) },
        userGroup: { type: new GraphQLNonNull(GraphQLString) },
        rank: { type: new GraphQLNonNull(GraphQLString) },
        isAdmin: { type: new GraphQLNonNull(GraphQLString) },
        password: { type: new GraphQLNonNull(GraphQLString) },
        picture: { type: new GraphQLNonNull(GraphQLString) },
        about: { type: GraphQLString },
        group: {
            type: GroupType,
            resolve(parent, args) {
                return groupSchema.findById(parent.userGroup);
            }
        }
    })
})

const GroupType: GraphQLObjectType = new GraphQLObjectType({
    name: "Group",
    fields: () => ({
        name: { type: GraphQLString },
        picture: { type: GraphQLString },
        about: { type: GraphQLString },
        Users: {
            type: UserType,
            resolve(parent, args) {
                return userSchema.find({ userGroup: parent._id })
            }
        }

    })
})

const RankType: GraphQLObjectType = new GraphQLObjectType({
    name: "Rank",
    fields: () => ({
        name: { type: GraphQLString },
        picture: { type: GraphQLString },
        Users: {
            type: new GraphQLList(UserType),
            resolve(parent, args) {
                return userSchema.find({ rang: parent._id })
            }
        }

    })
})

export { GroupType, UserType, RankType };