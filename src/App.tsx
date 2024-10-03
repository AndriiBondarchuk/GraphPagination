import { NotificationsProvider } from "@toolpad/core/useNotifications";
import TableWithPagination from "./components/TableWithPagination";

function App() {
  return (
    <NotificationsProvider>
      <TableWithPagination />
    </NotificationsProvider>
  );
}

export default App;
