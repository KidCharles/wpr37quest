const { GraphQLServer } = require ('graphql-yoga')

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