import { GraphQLInputObjectType, GraphQLObjectType, GraphQLNonNull, GraphQLString, GraphQLID, GraphQLList } from "graphql";
const userSchema = require("../Models/Users");
const groupSchema = require("../Models/Group");
const rankSchema = require("../Models/Ranks");


const UserType: GraphQLObjectType = new GraphQLObjectType({
    name: "Student",
    fields: () => ({
        id: { type: GraphQLID },
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
        id: { type: GraphQLID },
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
        id: { type: GraphQLID },
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

const UserInput = new GraphQLInputObjectType({
    name: "UserInput",
    fields:{
        name: { type: GraphQLString },
        secname: { type: new GraphQLNonNull(GraphQLString) },
        userGroup: { type: new GraphQLNonNull(GraphQLString) },
        rank: { type: new GraphQLNonNull(GraphQLString) },
        isAdmin: { type: new GraphQLNonNull(GraphQLString) },
        password: { type: new GraphQLNonNull(GraphQLString) },
        picture: { type: new GraphQLNonNull(GraphQLString) },
        about: { type: GraphQLString }
    }
})
const UserUpdateInput = new GraphQLInputObjectType({
    name: "UserUpdateInput",
    fields:{
        id:{type:GraphQLID},
        name: { type: GraphQLString },
        secname: { type: new GraphQLNonNull(GraphQLString) },
        userGroup: { type: new GraphQLNonNull(GraphQLString) },
        rank: { type: new GraphQLNonNull(GraphQLString) },
        isAdmin: { type: new GraphQLNonNull(GraphQLString) },
        password: { type: new GraphQLNonNull(GraphQLString) },
        picture: { type: new GraphQLNonNull(GraphQLString) },
        about: { type: GraphQLString }
    }
})
const GroupInput = new GraphQLInputObjectType({
    name: "GroupInput",
    fields:{
        name: { type: GraphQLString },
        picture: { type: new GraphQLNonNull(GraphQLString) },
        about: { type: GraphQLString }
    }
})
const GroupUpdateInput = new GraphQLInputObjectType({
    name: "GroupUpdateInput",
    fields:{
        id:{type:GraphQLID},
        name: { type: GraphQLString },
        picture: { type: new GraphQLNonNull(GraphQLString) },
        about: { type: GraphQLString }
    }
})
const RankInput = new GraphQLInputObjectType({
    name: "rankInput",
    fields:{
        name: { type: GraphQLString },
        picture: { type: new GraphQLNonNull(GraphQLString) }
    }
})
const RankUpdateInput = new GraphQLInputObjectType({
    name: "rankUpdateInput",
    fields:{
        id:{type:GraphQLID},
        name: { type: GraphQLString },
        picture: { type: new GraphQLNonNull(GraphQLString) }
    }
})
export { RankUpdateInput, RankInput, GroupUpdateInput, GroupType, UserType, RankType, UserInput, UserUpdateInput, GroupInput };