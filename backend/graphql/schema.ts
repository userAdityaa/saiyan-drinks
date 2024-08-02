import {gql} from 'apollo-server-express'
import { Drink } from '../models';

const typeDefs = gql`

    type User { 
     id: ID!, 
     name: String!, 
     email: String!,
     drinks: [Drink], 
    }

    type Drink { 
     userId: User, 
     name: String!, 
     quantity: Int!,
     price: Int!,
    }

    type Query { 
        getUser: User, 
        getDrinks: [Drink],
    }

    type Mutation { 
        createUser(name: String!, email: String!, password: String!): User,
    }

`;

module.exports = typeDefs;