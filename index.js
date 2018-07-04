const {
	GraphQLServer
} = require('graphql-yoga')

// typeDef is like routing

//Query is like the end point (app.get or the R in CRUD)
//Mutation is like the end points (app.put, app.delete, app.post)
//Type person, class and race are like setting up a table in sql.

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


//resolvers is like the controller file or the C UD in CRUD
let personId = 6;
let classId = 6;
let raceId = 6;

const resolvers = {
	Query: {

    },
	Mutations: {
		addPerson: (root, arg) => {
			const Person = {
                id:personId++,
                name: arg.name,
                classId: ()=>{
                    db.getClass(arg.class)
                            
                }
			}
		},
		addClass: (root, arg) => {
            const Class = {
                id:classId++,
                name: arg.name,
                desc: arg.desc,
            }
		},
		addRace: (root, arg) => {
            const Race = {
                id: raceId++,
                name: arg.name,
                desc: arg.desc
            }
        },
        
	}
}

const server = new GraphQLServer({
	typeDefs,
	resolvers
})
server.start(() => console.log(`sever is running on http://localhost:4000`))