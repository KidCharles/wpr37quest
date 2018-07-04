const { GraphQLServer } = require ('graphql-yoga')

const typeDef = `
    type Query {
        persons: [Person!]!
        
    }

    type Mutation{
        functionOne(

        )
    }

    type Person{
        id: ID!
        name: String!
        classId: ID!
        raceId: ID
    }

    type Class{
        id: ID!
        name: String!
        desc: String!
    }

    type Race{
        id: ID!
        name: String!
        desc: String!
    }

    
`

const resolvers = {
    Query: {

    },
	Mutations: {
		addPerson: (root, arg) => {
			const Person = {
                id:ID,
                name: arg.name,
                classId: ()=>{
                    db.getClass(arg.class)
                            
                }
			}
		},
		addClass: (root, arg) => {

		},
		addRace: (root, arg) => {

        }
    }
}

const server = new GraphQLServer({
    typeDefs,
    resolvers
})
server.start (()=> console.log(`sever is running on http://localhost:4000`))