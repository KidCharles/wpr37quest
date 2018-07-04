const { GraphQLServer } = require ('graphql-yoga')

// typeDef is like routing

//Query is like the end point (app.get)
//Mutation is like the end points (app.put, app.delete, app.post)

const typeDef = `
    type Query {
        persons: [Person!]!
        
    }

    type Mutation{
        functionOne(

        )
    }

    Person{
        name: String!
        class: String!
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