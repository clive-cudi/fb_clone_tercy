import { userOps } from "./user.js";

const resolvers = {
    Mutation: {
        ...userOps.mutations
    },
    Query: {
        ...userOps.query
    }
};

export {resolvers};

console.log(resolvers)