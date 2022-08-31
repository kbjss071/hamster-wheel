const { gql } = require('apollo-server-express');

const typeDefs = gql `
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
        savedExercise: [Exercise]
        height: Number
        weight: Number
    }

    type Auth {
        token: ID
        user: User
    }

    type Query {
        users: [User]!
        user(userId: ID!): User
        me: User
        exercises(): [Exercise]
    }

    input Exercise {
        name
        bodyPart
        equipment
        target
        exercise_id
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
        saveExercise(userId: ID!, exercise: Exercise!): User
        deleteExercise(exercise_id: String!): User
    }
`

module.exports = typeDefs;

