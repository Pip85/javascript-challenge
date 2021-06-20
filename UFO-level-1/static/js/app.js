// Rename data.js data to tableData for more descriptive variable
var tableData = data;

//========================================================================
// Display table on page start up and refresh
//========================================================================

// Reference table body into new variable
var tbody = d3.select("tbody");

// Add table row for each item in tableData
tableData.forEach((tableBody) => {
    var addRow = tbody.append("tr");
