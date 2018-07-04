const { GraphQLServer } = require ('graphql-yoga')

const typeDef = `
    type Query {
        persons: [Person!]!
        
    }

    type Mutation{
        functionOne(

        )
    }

    Person{
        id: ID!
        name: String!
        class: String!
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