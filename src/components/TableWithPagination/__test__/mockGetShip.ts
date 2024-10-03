import { PAGE_SIZE } from "../config";
import { GET_SHIPS } from "../query/getShips";

export const mocks = [
  {
    request: {
      query: GET_SHIPS,
      variables: { limit: PAGE_SIZE, offset: 0 },
    },
    result: {
      data: {
        ships: [
          {
            id: "1",
            name: "Ship One",
            model: "Model A",
            type: "Type X",
            active: true,
          },
          {
            id: "2",
            name: "Ship Two",
            model: "Model B",
            type: "Type Y",
            active: false,
          },
        ],
      },
    },
  },
];

export const noDataMock = [
  {
    request: {
      query: GET_SHIPS,
      variables: { limit: PAGE_SIZE, offset: 0 },
    },
    result: {
      data: {
        ships: [],
      },
    },
  },
];