var table;
const four = 4;
// https://datatables.net/reference/option/
// https://datatables.net/examples/index

window.loadTable = (json) => {
  const obj = JSON.parse(json);
  // const data = obj.columns;
  const columns = [
    {
      title: "First Name",
      data: "first",
    },
    {
      title: "Last",
      data: "last",
    },
    {
      title: "Age",
      data: "age",
    },
  ];
  const data = [];
  table = $("#dtable").DataTable({
    columns,
    data,
  });
};
