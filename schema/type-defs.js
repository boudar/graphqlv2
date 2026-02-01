const {gql} = require("apollo-server")


const typeDefs =  `

    type Query {
            users: [User!]!
            user(id: ID!):User
            movies: [Movie!]!
            movie(id: ID!):Movie
        }


    type Movie{
        id:ID!
        name:String
        yearOfPublication:Int!
        isInTheaters: Boolean!
    }

    type User{
        id:ID!
        name:String!
        username:String!
        age:Int!
        nationality: Nationality!
        friends:[User]

    }
    
    enum Nationality{
        CANADA
        BRAZIL
        INDIA
        GERMANY
        CHILE
    
    }
`

module.exports = {typeDefs}
