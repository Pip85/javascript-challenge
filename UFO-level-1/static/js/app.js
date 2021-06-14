// Rename data.js data to tableData for more descriptive variable
var tableData = data;

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

var button = d3.select("#filter-btn");
var enter = d3.select("#input");

button.on("click", findSightings);
// enter.on("change", findSightings);
// var output = d3.select("#output");

// function findSightings() {
//     var dateInput = d3.select("#datetime");
//     console.log(dateInput);
//     var dateRequest = dateInput.property("value");
//     console.log(dateRequest);
//     tableData.forEach(search => {
//         var dateMatch = search.filter (date => date.datetime === dateRequest); 
//         console.log(dateMatch);
//     });
// }
//     output.html(" ");
//     var tbody = d3.select("tbody");
//     dateMatch.forEach((filteredTableBody) => {
//         var addRow = tbody.append("tr");
//         Object.entries(filteredTableBody).forEach(([key, value]) => {
//             var fields = addRow.append("td");
//             fields.text(value);
//         });
//     });
// }
function findSightings() {
    d3.event.preventDefault();
    var dateInput = d3.select("#datetime");
    var dateRequest = dateInput.property("value");    
    var dateMatch = tableData.filter (date => date.datetime === dateRequest);
    console.log(dateMatch);                 
}

// function findSightings() {
//     d3.event.preventDefault();
//     var dateInput = d3.select("#datetime");
//     var dateRequest = dateInput.property("value");    
//     var dateMatch = tableData.filter (date => date.datetime === dateRequest); 
//     console.log(dateMatch);
//     dateMatch.display()
//     }

// function findSightings() {
//     // d3.event.preventDefault();
//     var dateInput = d3.select("#datetime");
//     var dateRequest = dateInput.property("value");   
//     var getTable = d3.select("ufo-table");
//     tr = getTable.d3.select
//     var dateMatch = tableData.filter (date => date.datetime === dateRequest); 
//     console.log(dateMatch);
//     dateMatch.display()
//     }






// function findSightings() {
//     var dateInput = d3.select("#datetime");
//     var dateRequest = dateInput.property("value");
//     var tr = tableData.d3.select("tr");
//     for (i = 0; i < tr.length; i++) {
//         td = tr[i].getElementsByTagName("td");
//         for (j = 0; j < td.length; j++) {
//             if (td[j].innerHTML.indexOf(dateRequest) > -1) {
//                 found = true;
//             }
//         }
//         if (found) {
//             tr[i].style.display = "";
//             found = false;
//         } else {
//             tr[i].style.display = "none";
//         }
//     }
// }


// function filter() {
//     var dateInput, dateValue, tableData, tableRow;
//     dateInput = document.getElementById("datetime");
//     dateValue = dateInput.value;
//     tableData = document.getElementById("ufo-table");
//     tableRow = tableData.getElementsByTagName("td")[0];
// }
// var tableData = data;
// var tbody = d3.select("tbody");
// var input = d3.select("#datetime");
// var inputDate = input.property("value");

// tableData.forEach((tableBody) => {
//     if tableBody.datetime === inputDate {
//         var addRow = tbody.append("tr");
//         Object.entries(tableBody).forEach(([key, value]) => {
//             var field = addRow.append("td");
//             field.text(value);
//         });
//     }
// }

// var inputDate = document.getElementById("datetime").addEventListener("keyup", filterDate);
// function filterDate() {
//     var searchDate = document.getElementById("datetime");
//     var date = searchDate.value;
//     var searchTable = document.getElementById("ufo-table");
//     if tableLen = table.rows.length; {
//         if tableLen != 0) {

//         }
//     }

// }


// init: function() {
//     var inputDate = document.getElementById("datetime");
//     tableData.forEach.call(inputDate, function(input) {
//         input.oninput = onInputEvent;
//     });
// }

