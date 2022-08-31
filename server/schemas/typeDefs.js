const { gql } = require('apollo-server-express');

const typeDefs = gql `
    input Exercise {
        name: String!
        bodyPart: String!
        equipment: String!
        target: String!
        exercise_id: String!
    }

    type Exercise {
        id: String!
        name: String!
        bodyPart: String!
        equipment: String!
        target: String!
    }

    type User {
        _id: ID
        username: String!
        email: String!
        password: String!
        fullname: String
        savedExercise: [Exercise]!
    }

    type Auth {
        token: ID
        user: User
    }

    type Query {
        users: [User]!
        user(userId: ID!): User
        me: User
        exercises: [Exercise]
    }


    type Mutation {
        addUser(
            username: String!
            email: String!
            password: String!
            fullname: String
        ): Auth
        updateUser(
            username: String
            email: String
            password: String
            fullname: String
        ): User
        login(username: String!, password: String!): Auth
        removeUser: User
        saveExercise(userId: ID!, exercise_id: String): User
        deleteExercise(exercise_id: String!): User
    }
`

module.exports = typeDefs;

