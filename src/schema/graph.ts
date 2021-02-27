import { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID, GraphQLList } from "graphql";

class Std{
    id: string;
    name: string;
    sex: string;
    groupid: string;
}

let students = [
    { id: "1", name: "Anton", sex: "man", groupid: "1" },
    { id: "2", name: "Sasha", sex: "woman", groupid: "2" },
    { id: "3", name: "Anton", sex: "man", groupid: "1" },
    { id: "4", name: "l", sex: "man", groupid: "2" },
    { id: "5", name: "Лена", sex: "ж", groupid: "1" },
    { id: "6", name: "кеннатий", sex: "man", groupid: "2" },
    { id: "7", name: "Ales", sex: "woman", groupid: "2" }
];

let groups = [
    { id: "1", name: "vp-31" },
    { id: "2", name: "gk-11" }
];

const StudentType: GraphQLObjectType = new GraphQLObjectType({
    name: "Student",
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        sex: { type: GraphQLString },
        groupid: { type: GraphQLID },
        group:{
            type: GroupType,
            resolve(parent, args){
                let a;
                groups.forEach(el => {
                    if (el.id == parent.groupid) { a = el };
                });
                return a;
            }
        }
    })
})

const GroupType: GraphQLObjectType = new GraphQLObjectType({
    name: "Group",
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        sudents:{
            type: new GraphQLList(StudentType),
            resolve(parent: any, args: any){
                let a: Array<Std> = [];
                students.forEach(el => {
                    if (el.groupid == parent.id) { a.push(el) };
                });
                return a;
            }
        }
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

        },
        Students:{
            type: new GraphQLList(StudentType),
            resolve(parent, args){
                return students;
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
})