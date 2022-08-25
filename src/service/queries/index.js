import { gql } from "@apollo/client";

export const USER = gql`
  query user {
    user(id: ${id}) {
      id, email, firstName, lastName
    }
  }
`;
