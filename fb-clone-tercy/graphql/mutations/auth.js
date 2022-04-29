import { gql } from '@apollo/client';

export const REGISTER_MUTATION = gql`
    mutation register(
        $input: inputTypes!
    ) {
        registerUser(
            input: $input
        ) {
            success
            user {
                email
                firstName
                surname
                mobile
                password
            }
        }
    }
`;