import React, { useContext, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TableContext } from "../../App";
import { getColumns } from "./constants";
import { Table } from "antd";
import "./_home.scss";
import "antd/dist/antd.css";
import { ACCOUNT_ROUTE } from "../../RouteManager";

/**
 * account management
 * @returns table
 */
const Home = () => {
  /****************************** DATA MANAGER *****************************************/
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const { tableState, setTableState } = useContext(TableContext);

  /****************************** NAVIGATE *****************************************/
  const navigate = useNavigate();
  const navigateToLogin = () => {
    navigate(ACCOUNT_ROUTE);
  };

  /****************************** COLUMN GENERATOR *****************************************/
  const columns = useMemo(() => {
    return getColumns({
      searchedColumn,
      setSearchedColumn,
      tableState,
      setTableState,
      navigate,
      searchText,
      setSearchText,
    });
  }, []);

  /****************************** ELMENTS *****************************************/
  return (
    <div className="home-page-container">
      <div className="button-container">
        <button onClick={navigateToLogin} className="add-member-button">
          Add New Location
        </button>
      </div>
      <Table
        columns={columns}
        dataSource={tableState?.data}
        scroll={{ x: 1300 }}
      />
    </div>
  );
};

export default Home;
