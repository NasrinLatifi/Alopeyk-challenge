import { createContext, useState } from "react";
import "./App.css";
import MainMap from "./Components/MainMap";
import RouteManager from "./RouteManager";

export const TableContext = createContext();

function App() {
  const [tableState, setTableState] = useState({ data: [] });
  return (
    <TableContext.Provider value={{ tableState, setTableState }}>
      <RouteManager />
    </TableContext.Provider>
    // <MainMap />
  );
}

export default App;
