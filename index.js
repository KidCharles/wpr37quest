const {GraphQLServer} = require('graphql-yoga')

// typeDef is like routing

// Query is like the end point (app.get or the R in CRUD)
// Mutation is like the end points (app.put, app.delete, app.post)
// Type person, class and race are like setting up a table in sql.

const typeDefs = `
    type Query {
        persons: [Person!]!
        classes: [Class!]!
        races: [Race!]!
    }

    type Mutations{
        addPerson(name:String!, classId:ID!, raceId:ID!) :Person
        addClass(name:String!, desc:String!) :Class
        addRace(name:String!, desc:String!) :Race
    }

    type Person{
        id: ID!
        name: String!
        classId: ID
        raceId: ID
        Class: Class
        Race: Race
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


// resolvers is like the controller file or the C UD in CRUD

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

const personId = 2;
const raceId = 2;
const classId = 2;

const resolvers = {
	Query: {
        persons: ()=> People,
        races: ()=> races,
        classes: ()=> Classes
    },
	Mutations: {
		addPerson: (root, arg) => {
			const Person = {
                id:personId++,
                name: arg.name,
                classId: arg.classId,
                raceId: arg.raceId
            }
            People.push(Person)
		},
		addClass: (root, arg) => {
            const Class = {
                id:classId++,
                name: arg.name,
                desc: arg.desc,
            }
            Classes.push(Class)
		},
		addRace: (root, arg) => {
            const Race = {
                id: raceId++,
                name: arg.name,
                desc: arg.desc
            }
            Races.push(Race)
        },
        
    },
    Person:{
        Class(person){
           return Classes.find((personClass) => personClass.id === person.classId)
        },
        Race(person){
            return races.find((personRace)=> personRace.id === person.raceId)
        }
    },

}

const server = new GraphQLServer({
	typeDefs,
	resolvers
})
server.start(() => console.log(`sever is running on http://localhost:4000`))