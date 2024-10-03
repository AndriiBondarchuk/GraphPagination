import { gql } from "@apollo/client";

export const MUTATION_WITH_ERROR = gql`
  mutation DestroyedShip($id: String) {
    killShip(id: $id)
  }
`;
