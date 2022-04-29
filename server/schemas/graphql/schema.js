import { gql } from 'apollo-server';

const typeDefs = gql`
    type user {
        firstName: String!
        surname: String!
        email: String!
        mobile: String!
        password: String!
    }

    input inputTypes {
        firstName: String!
        surname: String!
        email: String!
        mobile: String!
        password: String!
    }

    type hello {
        message: String!
    }


    type Mutation {
        registerUser (input: inputTypes!): user!
    }

    type Query {
        sayHello: hello!
    }
`;

export {typeDefs};