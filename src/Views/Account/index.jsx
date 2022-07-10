import React, { useContext } from "react";
import { useSearchParams } from "react-router-dom";
import { TableContext } from "../../App";
import Form from "../../Components/Form";
import "./_account.scss";

const Account = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const { tableState, setTableState } = useContext(TableContext);
  const id = searchParams.get("id");
  const mode = searchParams.get("mode");
  const initialValues = tableState?.data?.find((item) => item.id === id);
  const header =
    !id || (id && !initialValues)
      ? "Create A New Account"
      : mode === "edit"
      ? "Edit your Account"
      : "View your Account";
  console.log("initialValues", initialValues);
  return (
    <div className="account-page">
      <div className="first-part" />
      <div className="second-part" />
      <div className="third-part">
        <h1>{header}</h1>
        <Form
          initialValues={initialValues}
          isDisabled={id && initialValues && mode !== "edit"}
        />
      </div>
    </div>
  );
};

export default Account;
