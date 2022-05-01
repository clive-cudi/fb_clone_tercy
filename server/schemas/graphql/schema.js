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

    input loginTypes {
        email: String!
        password: String!
    }

    type hello {
        message: String!
    }
    
    type reg {
        success: Boolean
        user: user
    }


    type Mutation {
        registerUser (input: inputTypes!): reg!
    }

    type Mutation {
        loginUser (input: loginTypes!): reg!
    }

    type Query {
        sayHello: hello!
    }
`;

export {typeDefs};