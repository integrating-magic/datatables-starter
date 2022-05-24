//Here we're importing items we'll need. You can add other imports here.

var table;

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
  console.log(data[0].fieldData);
  console.log(data[0].fieldData.City);

  table = $("#dtable").DataTable({
    paging: true,
    pageLength: 20,
    searching: true,
    colReorder: true,
    columns: [
      { title: myKeys[1] },
      { title: myKeys[2] },
      { title: myKeys[3] },
      { title: myKeys[4] },
      { title: myKeys[5] },
      { title: myKeys[6] },
      // { title: "City" },
      // { title: "CompanyName" },
      // { title: "Id" },
      // { title: "ModifiedTimeStamp" },
      // { title: "State" },
      // { title: "StreetAddress" },
      // { title: "Zip" },
      // { title: "Last Name", data: "lastName" },
      // { title: "Years Young", data: "age", width: "10%" },
    ],
    data: [data[0].fieldData],
    // data: [
    //   {firstName: "John", lastName: "Brown", age: 62},
    //   {firstName: "Jane", lastName: "Doe", age: 58}
    // ],
  });
};

// import { companiesData } from "./companies-data";

// //TODO: Get and array of the unique states.
// const states = companiesData.map((company) => company.fieldData.State);
// // console.log(states);

// const findUnique = (value, index, self) => {
//   return self.indexOf(value) === index;
// };
// const uniqueStates = states.filter(findUnique).sort();
// // console.log(uniqueStates); 

// //TODO: Get each state in its own card/div (Parent element for each state
// const createParent = (state) => {
//   const parent = document.createElement("div");
//   parent.className = "col-4 p-1 ";
//   parent.innerHTML = `<h2> ${state} </h2>`;
// return parent;
// }
// //TODO: Show the state in each parent element title


// //TODO: get data (company) for each state

// //TODO: create button for each company
// const createButton = (company) => {
//   const btn = document.createElement("button");
//   btn.type = "button";
//   btn.innerHTML = company;
//   btn.className = "col-12 p-2 m-1 btn btn-primary";
//   return btn;
//   // after.appendChild(btn);
// };// after.appendChild(btn);

// //TODO: append button to each parent element

// //TODO: append the parent element to the after div

// // const filterFunction = (company,state) => company.fieldData.State === state;
// const filterForState = (array, state) => {
//   console.log(array);
//   console.log(state);
//   return array.filter((company) => company.fieldData.State === state);
// }
// const checkThis = filterForState(companiesData, "TX");
// console.log(checkThis);

// //Ultimate Function
// uniqueStates.forEach((state) => {
//   const stateData = filterForState(companiesData, state);
//   const parentElement = createParent(state);
// //TODO: append button to each parent element
//   stateData.forEach((company) => {
//     const CompanyName = company.fieldData.CompanyName;
//     const btn = createButton(CompanyName);
//     parentElement.appendChild(btn);
//   });
//   //TODO: append the parent element to the after div
//   console.log(stateData);
//   after.appendChild(parentElement);
// });


