import { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID, GraphQLList } from "graphql";
import { resolve } from "path";
//import groupSchema from "../Models/Group";
const studentSchema = require("../Models/Student");
const groupSchema = require("../Models/Group");



class Std{
    public id: string;
    public name: string;
    public sex: string;
    public groupid: string;
}



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
                return groupSchema.findById(parent.groupid);
            }
        }
    })
})

const GroupType: GraphQLObjectType = new GraphQLObjectType({
    name: "Group",
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        students:{
            type: new GraphQLList(StudentType),
            resolve(parent: any, args: any){    
               return studentSchema.find({groupid: parent._id})
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
                return studentSchema.findById(args.id);
            }
        },
        Group: {
            type: GroupType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return groupSchema.findById(args.id);                
            }

        },
        Students: {
            type: new GraphQLList(StudentType),
            resolve(){
                return studentSchema.find({});
            }
        },
        Groups: {
            type: new GraphQLList(GroupType),
            resolve(){
                return groupSchema.find({});
            }
        }
    }
})

const Mutations = new GraphQLObjectType({
    name:"Mutation",
    fields: {
        AddStudent:{
            type: StudentType,
            args: {
                name: {type: GraphQLString},
                sex: {type: GraphQLString},
                groupid: {type: GraphQLString}
            },
            resolve(parent, args){
                let newStudent = new studentSchema({
                    name: args.name,
                    sex: args.sex,
                    groupid: args.groupid
                })
                return newStudent.save();
            }
        },
        AddGroup: {
            type: GroupType,
            args:{
                name: {type: GraphQLString}
            },
            resolve(parent, args){
                let newGroup = new groupSchema({
                    name: args.name
                })
                return newGroup.save();
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutations
})
