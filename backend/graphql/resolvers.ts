import { User } from "../models";
import { UserInput } from "../dto/user.dto";

const resolvers = {
    Query: {
        getUser: async() => { 
            return (User.find({}))
        }
    },
    Mutation: { 
        createUser: async (_: any, { username, email, password } : UserInput ) => {
            const user = new User({ username, email, password });
            await user.save();
        },
        
    },
};

module.exports = resolvers;