const {UserList, MovieList} = require("../schema/fakeData.js");

const _ = require("lodash");


const resolvers = {
    Query: {
        users: ()=>{
            return UserList;
        },

        user:(parent,args)=>{
            const id = Number(args.id)
            const user = _.find(UserList, {id})
            return user;
        },


        movies:()=>{
            return MovieList;
        },

        movie: (parent,args)=>{
            const id = args.id
            console.log(id)
            const found = _.find(MovieList, {id})
            console.log(found)
        }
    },

     
}

module.exports = {resolvers}
