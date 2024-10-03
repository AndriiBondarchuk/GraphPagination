import { useLazyQuery } from "@apollo/client";
import { GET_SHIPS } from "./query/getShips";
import { Box, Paper } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import { DEFAULT_PAGE, PAGE_SIZE, columns, pageSizeOptions } from "./config";
import ErrorMutationButton from "../ErrorMutationButton";

const TableWithPagination = () => {
  const [getRows, { data: ships, loading }] = useLazyQuery(GET_SHIPS, {
    variables: { limit: PAGE_SIZE, offset: 0 },
  });

  useState(() => {
    getRows();
  });

  const handleChangePagination = ({
    pageSize,
    page,
  }: {
    pageSize: number;
    page: number;
  }) => {
    return getRows({
      variables: {
        limit: pageSize,
        offset: page * pageSize,
      },
    });
  };

  return (
    <Box
      sx={{
        display: "flex",
        width: "100dvw",
        height: "100dvh",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Paper sx={{ height: 370, width: "760px" }}>
        <DataGrid
          rowCount={20} // hardcore magic number cause my free mock API can't handle it
          rows={ships?.ships || []}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: DEFAULT_PAGE, pageSize: PAGE_SIZE },
            },
          }}
          pageSizeOptions={pageSizeOptions}
          checkboxSelection
          loading={loading}
          paginationMode="server"
          onPaginationModelChange={(data) =>
            handleChangePagination({ pageSize: data.pageSize, page: data.page })
          }
        />
      </Paper>
      <ErrorMutationButton />
    </Box>
  );
};

export default TableWithPagination;
