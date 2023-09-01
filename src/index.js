let table;
// https://datatables.net/reference/option/
// https://datatables.net/examples/index

window.loadTable = (json) => {
  const obj = JSON.parse(json);
  // const data = obj.data
  const data = [
    { Name: "Limited", Cost: 100 },
    { Name: "SE", Cost: 200 },
  ];
  const columns = [
    {
      title: "First Name",
      data: "Name",
    },
    {
      title: "Cost",
      data: "Cost",
    },
  ];
  const myOptions = { paging: false, searching: false };

  table = $("#dtable").DataTable({
    columns,
    data,
    ...myOptions,
  });
};
$("#dtable").on("click", "tbody tr", function () {
  const row = table.row(this);
  const data = row.data();
  console.log(data);
  FileMaker.PerformScript("Receive Row from JS", JSON.stringify(data));
});
