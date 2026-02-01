const {gql} = require("apollo-server")


const typeDefs =  `

    type Query {
            users: [User!]!
            user(id: ID!):User
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