let table;

//https://datatables.net/reference/option/
//https://datatables.net/examples/index

window.loadTable = (json) => {
  const columns = [];
  const data = [];
  table = $("#dtable").DataTable({
    columns: columns,
    data: data,
  });
};
