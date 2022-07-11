import React, { useContext, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TableContext } from "../../App";
import { getColumns } from "./constants";
import { Table } from "antd";
import "./_home.scss";
import "antd/dist/antd.css";
import { ACCOUNT_ROUTE } from "../../RouteManager";

const Home = () => {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const { tableState, setTableState } = useContext(TableContext);
  const navigateToLogin = () => {
    navigate(ACCOUNT_ROUTE);
  };
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
  const handleChange = () => {};
  return (
    <div className="home-page-container">
      <div className="button-container">
        <button onClick={navigateToLogin} className="add-member-button">
          Add New Account
        </button>
      </div>
      <Table
        columns={columns}
        dataSource={tableState?.data}
        onChange={handleChange}
      />
    </div>
  );
};

export default Home;
