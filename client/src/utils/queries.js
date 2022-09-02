import { gql } from "@apollo/client";

export const QUERY_USER = gql`
    query allUsers {
        users {
            _id
            username
            email
            firstName
            lastName
            height
            weight
            savedExercise
        }
    }
`

export const QUERY_SINGLE_USER = gql`
    query singleUser($userId: ID!){
        user(userId: ID) {
            _id
            username
            email
            firstName
            lastName
            height
            weight
            savedExercise
        }
    }
`

export const QUERY_ME = gql `
    query me {
        me {
            _id
            username
            email
            firstName
            lastName
            height
            weight
            savedExercise
        }
    }
`

export const QUERY_EXERCISE = gql `
    query allExercises {
        exercises {
            name
            type
            muscle
            equipment
            difficulty
            instructions
        }
    }
`