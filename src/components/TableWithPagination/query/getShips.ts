import { gql } from "@apollo/client";

export const GET_SHIPS = gql`
  query GetShips($limit: Int, $offset: Int) {
    ships(limit: $limit, offset: $offset) {
      id
      name
      model
      type
      active
    }
  }
`;
