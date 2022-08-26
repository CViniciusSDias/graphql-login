import { gql } from "@apollo/client";

export const USER = gql`
  query User($id: ID!) {
    user(id: $id) {
      firstName
      lastName
    }
  }
`;
