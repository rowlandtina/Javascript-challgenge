// from data.js
var tableData = data;

// YOUR CODE HERE!
let tbody = d3.select("tbody");
let table = d3.select("table");
// Console.log the sightings data from data.js
// console.log(data);
// Step 1: Loop Through data and console.log each weather report object
function buildtable(data) {
  data.forEach((item) => {
    console.log(item);
    let row = tbody.append("tr");
    let datetime = row.append("td");
    let city = row.append("td");
    let state = row.append("td");
    let country = row.append("td");
    let shape = row.append("td");
    let durationMinutes = row.append("td");
    let comments = row.append("td");
    datetime.text(item.datetime);
    city.text(item.city);
    state.text(item.state);
    country.text(item.country);
    shape.text(item.shape);
    durationMinutes.text(item.durationMinutes);
    comments.text(item.comments);
  });
}
buildtable(data);
//    //Select the button
let button = d3.select("#filter-btn");
//    // Select the form
var form = d3.select("#form");

//    // Create event handlers
button.on("click", runEnter);
form.on("submit", runEnter);

//    // Complete the event handler function for the form
function runEnter() {
  d3.event.preventDefault();
  // Select the input element and get the raw HTML node
  let ufoinput = d3.select("#datetime");
  // Get the value property of the input element
  let inputValue = ufoinput.property("value");
  //   console.log(inputValue)
  // Use the form input to filter the data by blood type
  let newData = tableData.filter((item) => item.datetime === inputValue);
  console.log(newData);
  tbody.html("");
  if (inputValue) {
    buildtable(newData);
  } else {
    buildtable(data);
  }
}