import React, { useContext } from "react";
import { useSearchParams } from "react-router-dom";
import { TableContext } from "../../App";
import Form from "../../Components/Form";
import "./_account.scss";

/**
 * Location reads id and mode form search params
 * if id exsits, we check initial value
 * in edit mode, we can edit form
 * in view mode, we can see informations
 * @returns Location form
 */
const Account = () => {
  /****************************** VALUE GETTERS *****************************************/
  let [searchParams] = useSearchParams();
  const { tableState, setTableState } = useContext(TableContext);

  /****************************** HEADER CHECKER *****************************************/
  const id = searchParams.get("id");
  const mode = searchParams.get("mode");
  const initialValues = tableState?.data?.find((item) => item.id === id);
  const header =
    !id || (id && !initialValues)
      ? "Create A New Location"
      : mode === "edit"
      ? "Edit your Location"
      : "View your Location";

  /****************************** ELEMENTS *****************************************/
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
