const { gql } = require('apollo-server-express');

const typeDefs = gql `

    type Exercise {
        _id: ID
        name: String
        type: String
        muscle: String
        equipment: String
        difficulty: String
        instructions: String
    }

    type Save {
        _id: ID
        savedDate: String
        exercises: [Exercise]
    }

    type User {
        _id: ID
        username: String
        email: String
        firstName: String
        lastName: String
        height: Float
        weight: Float
        savedExercise: [Exercise]
    }

    type Auth {
        token: ID
        user: User
    }

    type Query {
        users: [User]!
        user(userId: ID!): User
        me: User
        exercises(muscle: String): [Exercise]
    }

    type Mutation {
        addUser(
            username: String!
            email: String!
            password: String!
            firstName: String!
            lastName: String!
        ): Auth
        updateUser(
            username: String
            email: String
            password: String
            firstName: String
            lastName: String
            height: Float
            weight: Float
        ): User
        login(username: String!, password: String!): Auth
        removeUser: User
        saveExercise(exercises: [ID]!): Exercise
        deleteExercise(exercise_id: ID!): User
    }
`

module.exports = typeDefs;

