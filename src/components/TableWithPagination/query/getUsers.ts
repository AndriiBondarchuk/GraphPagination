import { gql } from "@apollo/client";

// that query are down for now :)
// but have filtering so if I'll have a chance I'll migrate table to it

export const GET_USERS = gql`
  query getUsers($limit: Int, $offset: Int, $where: users_bool_exp) {
    users(limit: $limit, offset: $offset, where: $where) {
      id
      name
      twitter
      rocket
      timestamp
    }
  }
`;
