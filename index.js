const { GraphQLServer } = require ('graphql-yoga')

// typeDef is like routing

const typeDef = `
    type Query {
        name: String!
        class: String!
        
    }

    type Mutation{
        functionOne(

        )
    }
`

//resolvers is like the controller file 

const resolvers = {
    Query: {

    },
    Mutations: {
        functionOne: (root, arg)=>{

        },
        functionTwo: (root, arg)=>{

        }
    }
}

const server = new GraphQLServer({
    typeDefs,
    resolvers
})
server.start (()=> console.log(`sever is running on http://localhost:4000`))