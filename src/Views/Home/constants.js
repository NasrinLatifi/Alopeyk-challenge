import { ACCOUNT_ROUTE } from "../../RouteManager";

export const getColumns = ({ tableState, setTableState, navigate }) => [
  {
    title: "First Name",
    dataIndex: "firstName",
    key: "firstName",
    // filters: [
    //   { text: "Joe", value: "Joe" },
    //   { text: "Jim", value: "Jim" },
    // ],
    // filteredValue: filteredInfo.name || null,
    // onFilter: (value, record) => record.name.includes(value),
    // sorter: (a, b) => a.name.length - b.name.length,
    // sortOrder: sortedInfo.columnKey === "firstName" ? sortedInfo.order : null,
    ellipsis: true,
  },
  {
    title: "Last Name",
    dataIndex: "lastName",
    key: "lastName",
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
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
            className="add-member-button"
          >
            Edit
          </button>
          <button
            onClick={() => {
              onDeleteRecord({ tableState, setTableState, item });
            }}
            className="add-member-button"
          >
            delete
          </button>
          <button
            onClick={() => {
              navigate(ACCOUNT_ROUTE + `?id=${item.id}&mode=view`);
            }}
            className="add-member-button"
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
