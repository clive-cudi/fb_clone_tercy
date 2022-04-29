import { gql } from "@apollo/client";
import { DocumentNode } from "graphql";

export const SAY_HELLO: DocumentNode = gql`
    query {
        sayHello {
            message
        }
    }
`;