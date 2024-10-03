import { GridColDef } from "@mui/x-data-grid";

export const columns: GridColDef[] = [
  { field: "name", headerName: "Name", width: 200 },
  {
    field: "model",
    headerName: "Model",
    width: 170,
    valueGetter: (value) => (value ? value : "N/A"),
  },
  { field: "type", headerName: "Type", width: 170 },
  {
    field: "active",
    headerName: "Active",
    width: 170,
    valueGetter: (value) => (value ? "Yes" : "No"),
  },
];

export const PAGE_SIZE = 5;
export const DEFAULT_PAGE = 0;
export const pageSizeOptions = [4, 5, 10];
