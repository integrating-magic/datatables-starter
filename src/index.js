let table;

// TODO: Load the DataTables libraries by linking to the DataTables CDN.
//TODO: Get data from FileMaker
//TODO: prep it for the JS.
//TODO: create the columns.
//TODO: Explore options of Datatables
//https://datatables.net/reference/option/
//https://datatables.net/examples/index
// exposing loadData to FileMaker Script
window.loadTable = function (json) {
  table = $("#dtable").DataTable({
    columns: [],
    data: [],
  });
};
