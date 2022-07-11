import { createContext, useState } from "react";
import "./App.css";
import RouteManager from "./RouteManager";

export const TableContext = createContext();

function App() {
  const [tableState, setTableState] = useState({ data: [] });
  return (
    <TableContext.Provider value={{ tableState, setTableState }}>
      <RouteManager />
    </TableContext.Provider>
  );
}

export default App;
