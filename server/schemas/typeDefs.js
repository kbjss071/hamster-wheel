const { gql } = require('apollo-server-express');

const typeDefs = gql `
    type Exercise {
        name: String!
        bodyPart: String!
        equipment: String!
        target: String!
    }

    type User {
        username: String!
        email: String!
        password: String!
        fullname: String
        savedExercise: [Exercise]
    }

    type Auth {
        token: ID
        user: User
    }

    type Query {
        exercises(): Exercise
        user: User
    }

    type Mutation {
        addUser(
            username: String!
            email: String!
            password: String!
            fullname: String!
        ): Auth
        updateUser(
            username: String
            email: String
            password: String
            fullname: String
        ): User
        login(username: String!, password: String!): Auth
        saveExercise(exercise: Exercise): User
        deleteExercise(exercise_id: String!): User
    }
`

module.exports = typeDefs;