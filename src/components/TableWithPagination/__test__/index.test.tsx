import { render, screen, waitFor } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import TableWithPagination from "..";
import "@testing-library/jest-dom";
import { mocks, noDataMock } from "./mockGetShip";

test("renders DataGrid and fetches ships on load", async () => {
  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <TableWithPagination />
    </MockedProvider>
  );

  expect(screen.getByRole("progressbar")).toBeInTheDocument();

  await waitFor(() => {
    expect(screen.getByText("Ship One")).toBeInTheDocument();
    expect(screen.getByText("Ship Two")).toBeInTheDocument();
  });
});

test("renders no rows state", async () => {
  render(
    <MockedProvider mocks={noDataMock} addTypename={false}>
      <TableWithPagination />
    </MockedProvider>
  );

  await waitFor(() => {
    expect(screen.getByRole("grid")).toBeInTheDocument();
    expect(screen.getByRole("grid")).toHaveAttribute("aria-rowcount", "1");
  });
});
