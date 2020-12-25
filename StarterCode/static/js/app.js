// from data.js
var tableData = data;
console.log(tableData);
// YOUR CODE HERE!
var tbody = d3.select("tbody");
// defining a function buildtable

function buildTable(data){
    data.forEach(element => {
        var row = tbody.append("tr");

        Object.values(element).forEach((val) => {
            var rowval = row.append("td");
            rowval.text(val);
        })
        
    });

}


function filterDate() { 
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    console.log(inputValue);
    // .filter()

}

var button = d3.select("#filter-btn");
button.on("click", filterDate);


buildTable(tableData);