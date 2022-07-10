import{ createContext, useState } from "react";
import "./App.css";
import RouteManager from "./RouteManager";
export const TableContext = createContext();

function App() {
  const [tableState, setTableState] = useState({ date: [] });
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <TableContext.Provider value={[tableState, setTableState]}>
      <RouteManager />
    </TableContext.Provider>
  );
}

export default App;
