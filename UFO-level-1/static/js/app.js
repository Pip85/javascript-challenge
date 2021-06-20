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

    // Populate table rows with table data
    Object.entries(tableBody).forEach(([key, value]) => {
        var field = addRow.append("td");
        field.text(value);
    });
});

//========================================================================
// Display filtered table
//========================================================================

// Set variables to hold contents of button and form from HTML
var formContent = d3.select("#action");
var buttonContent = d3.select("#filter-btn");