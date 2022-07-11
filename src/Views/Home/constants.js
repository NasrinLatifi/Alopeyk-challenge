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
    title: "First Name",
    dataIndex: "firstName",
    key: "firstName",
    filterSearch: true,
    filterMode: "tree",
    onFilter: (value, record) => record.firstName.includes(value),
    width: 100,
    ...getColumnSearchProps({
      dataIndex: "firstName",
      searchText,
      setSearchText,
      searchedColumn,
      setSearchedColumn,
    }),
  },
  {
    title: "Last Name",
    dataIndex: "lastName",
    width: 100,
    key: "lastName",
    ...getColumnSearchProps({
      dataIndex: "lastName",
      searchText,
      setSearchText,
      searchedColumn,
      setSearchedColumn,
    }),
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: "Birth date",
    dataIndex: "birthDate",
    key: "birthDate",
  },
  {
    title: "Gender",
    dataIndex: "gender",
    key: "gender",
  },
  {
    title: "Work Type",
    dataIndex: "worktype",
    key: "worktype",
    filters: [
      { text: "Freelance", value: "Freelance" },
      { text: "Full time", value: "Full time" },
      { text: "Part Time", value: "Part Time" },
    ],
    filterSearch: true,
    filterMode: "tree",
    onFilter: (value, record) => record.worktype.includes(value),
  },
  {
    title: "Country",
    dataIndex: "country",
    key: "country",
  },
  {
    title: "City",
    dataIndex: "city",
    key: "city",
  },
  {
    title: "Job Title",
    dataIndex: "jobTitle",
    key: "jobTitle",
  },
  {
    title: "Phone Number",
    dataIndex: "phoneNumber",
    key: "phoneNumber",
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
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
