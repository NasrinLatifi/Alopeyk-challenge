import { ACCOUNT_ROUTE } from "../../RouteManager";
import { getColumnSearchProps } from "./ColumnSreach";
import "./_home.scss";

export const getColumns = ({
  tableState,
  setTableState,
  navigate,
  searchText,
  setSearchText,
  searchedColumn,
  setSearchedColumn,
}) => [
  {
    title: "Location Name",
    dataIndex: "locationName",
    key: "locationName",
    filterSearch: true,
    filterMode: "tree",
    onFilter: (value, record) => record.locationName.includes(value),
    width: 100,
    ...getColumnSearchProps({
      dataIndex: "locationName",
      searchText,
      setSearchText,
      searchedColumn,
      setSearchedColumn,
    }),
  },
  {
    title: "Location Type",
    dataIndex: "locationType",
    key: "locationType",
    filters: [
      { text: "Home", value: "home" },
      { text: "Work", value: "work" },
      { text: "Business", value: "business" },
      { text: "Friend's Location", value: "friendly" },
      { text: "Family's Location", value: "family" },
    ],
    filterSearch: true,
    filterMode: "tree",
    onFilter: (value, record) => record.worktype.includes(value),
  },
  {
    title: "Action",
    key: "operation",
    fixed: "right",
    width: 100,
    render: (item) => {
      return (
        <>
          <button
            onClick={() => {
              navigate(ACCOUNT_ROUTE + `?id=${item.id}&mode=edit`);
            }}
            className="dark-button"
          >
            Edit
          </button>
          <button
            onClick={() => {
              onDeleteRecord({ tableState, setTableState, item });
            }}
            className="white-button"
          >
            delete
          </button>
          <button
            onClick={() => {
              navigate(ACCOUNT_ROUTE + `?id=${item.id}&mode=view`);
            }}
            className="dark-button"
          >
            view
          </button>
        </>
      );
    },
  },
];

const onDeleteRecord = ({ tableState, setTableState, item }) => {
  const restList = tableState?.data?.filter((record) => record?.id !== item.id);
  setTableState({ ...tableState, data: restList });
};
