//Here we're importing items we'll need. You can add other imports here.
import "./style.css";
import "regenerator-runtime/runtime.js";

var table;

// exposing loadData to FileMaker Script
window.loadData = function (json) {
  var obj = JSON.parse(json); // data from FM is a string
  var data = obj.data;
  // return;
  // create column headers from data
  var firstRecord = data[0];
  var columns = Object.keys(firstRecord.fieldData).map(function (key) {
    console.log("key", key);
    var field = firstRecord[key];
    var visible = true;
    if (key === "Id") visible = false;
    return {
      title: key,
      data: "fieldData." + key,
      visible: visible,
    };
  });

  // Create the DataTable, after destroying it if already exists
  if (table) table.destroy();
  table = $("#dtable").DataTable({
    paging: false,
    searching: false,
    scrollY: "536",
    colReorder: true,
    columns: columns,
    data: data,
  });

  // Add the click handler to the row, after removing it if already exists
  $("#dtable tbody").off("dblclick");
  $("#dtable tbody").on("dblclick", "tr", function () {
    var record = table.row(this).data();
    var json = JSON.stringify(record);

    FileMaker.PerformScript("On Double Click Row", json);
  });
};
