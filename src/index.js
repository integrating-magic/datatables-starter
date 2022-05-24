//Here we're importing items we'll need. You can add other imports here.

var table;
const sample = {};
// exposing loadData to FileMaker Script
window.loadData = function (json) {
  const obj = JSON.parse(json);
  console.log(obj);
  const data = obj.data;
  console.log(data);
  //TODO: Load the DataTables libraries by linking to the DataTables CDN.
  //TODO: Get data from FileMaker
  //TODO: prep it for the JS.

  //TODO: create the columns.

  //TODO: Explore options of Datatables
  //https://datatables.net/reference/option/
  // Create the DataTable, after destroying it if already exists

  // Variables for the column definitions

  const myKeys = Object.keys(data[0].fieldData);
  console.log(myKeys);

  table = $("#dtable").DataTable({
    paging: true,
    pageLength: 20,
    searching: true,
    colReorder: true,
    columns: [
      { title: "City" },
      { title: "CompanyName" },
      { title: "Id" },
      { title: "ModifiedTimeStamp" },
      { title: "State" },
      { title: "StreetAddress" },
      { title: "Zip" },
      // { title: "Last Name", data: "lastName" },
      // { title: "Years Young", data: "age", width: "10%" },
    ],
    data: data,
    // data: [
    //   // {firstName: "John", lastName: "Brown", age: 62},
    //   // {firstName: "Jane", lastName: "Doe", age: 58}
    // ],
  });
};
