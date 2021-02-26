import { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID } from "graphql";

let students = [
    { id: "1", name: "Anton", sex: "man", groupid: "1" },
    { id: "2", name: "Sasha", sex: "woman", groupid: "2" },
    { id: "3", name: "Ales", sex: "woman", groupid: "2" }
];

let groups = [
    { id: "1", name: "vp-31" },
    { id: "2", name: "gk-11" }
];

const StudentType = new GraphQLObjectType({
    name: "Student",
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        sex: { type: GraphQLString },
        groupid: { type: GraphQLID }
    })
})

const GroupType = new GraphQLObjectType({
    name: "Group",
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString }
    })
})

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        Student: {
            type: StudentType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                //эта функция рыщит по бд 
                let a = {
                    id: "0",
                    name: "noname",
                    sex: "no",
                    groupid: "nogroup"
                };
                students.forEach(el => {
                    if (el.id == args.id) { a = el };
                });
                return a;
            }
        },
        Group: {
            type: GroupType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                let b = {
                    id: "0",
                    name: "noname"
                }
                groups.forEach(el => {
                    if (el.id == args.id) { b = el };
                });
                return b;
            }

        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
})