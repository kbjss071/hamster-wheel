import { gql } from "@apollo/client";

export const ADD_USER = gql `
    mutation addUser($username: String!, $email: String!, $password: String!, $firstName: String, $lastName: String){
        addUser(username: $username, email: $email, password: $password, firstName: $firstName, lastName: $lastName) {
            token
            User {
                _id
                username
            }
        }
    }
`


export const UPDATE_USER = gql `
    mutation updateUser ($username: String, $email: String, $password: String){
        updateUser(username: $username, email: $email, password: $password){
            _id
            username
            email
            fullname
        }
    }
`

export const LOGIN_USER = gql `
    mutation login ($username: String!, $password: String!) {
        login (username: $username, password: $password){
            token
            User {
                _id
                username
            }
        }
    }
`

export const ADD_EXERCISE = gql `
    mutation addExercise($userId: ID!, $exercise: exercise){
        saveExercise(userId: $userId, exercise: $exercise){
            _id
            username
            email
            fullname
            savedExercise
        }
    }
`

export const REMOVE_EXERCISE = gql `
    mutation deleteExercise($exerciseId: String!){
        deleteExercise(exerciseId: $exerciseId){
            _id
            username
            savedExercise
        }
    }
`