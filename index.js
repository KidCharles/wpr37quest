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

const Classes = [{
		id: 0,
		name: 'Wizard',
		desc: 'Believes in explosions'
	},
	{
		id: 1,
		name: 'Fighter',
		desc: 'pretty cool dude'
	}
]

const People = [{
		id: 0,
		name: 'Megumin',
		classId: 0,
		raceId: 0
	},
	{
		id: 1,
		name: 'John',
		classId: 1,
		raceId: 1
	}
]

const races = [{
		id: 0,
		name: 'human',
		desc: 'Basic'
	},

	{
		id: 1,
		name: 'elf',
		desc: 'Knife ears'
	}
]

let personId = 2;
let raceId = 2;
let classId = 2;

const resolvers = {
	Query: {

	},
	Mutations: {
		addPerson: (root, arg) => {
			const Person = {

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
server.start(() => console.log(`sever is running on http://localhost:4000`))