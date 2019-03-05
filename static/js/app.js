// from data.js
//console.log(data)
//var reports = data;

// TEST CODE 

   // from data.js
   // Validate the data pulls and goes into list in console
  //  var dateArray = [];
  //  var cityArray = [];
      
  //  data.forEach(report => {
  //    dateArray.push(report.datetime)
  //    cityArray.push(report.city)
     
     
  //  });
   
  //  console.log(dateArray)
  //  console.log(cityArray)


// MY FIRST LANDING PAGE VIEW OF ALL DATA
   //d3.select("#table-area").text(cityArray)

// Use D3 to select the table body
var tbody = d3.select("tbody");

// Use D3 to select the table
var table = d3.select("#ufo-table");

// Use D3 to set the table class to `table table-striped`
table.attr("class", "table table-striped");

// BUILT Function to upper case the field values for State, City 
function upper(string) {

    let u = string.search(" ");
    //let p = string.search('\\(\\');
    if (u > 0) {
      return string.charAt(0).toUpperCase() + string.slice(1,u+1) + string.charAt(u+1).toUpperCase() + string.slice(u+2);
    }
    //else if (u == 0 && p > 0) {
    //  return string.charAt(0).toUpperCase() + string.slice(1,p+1) + string.charAt(p+1).toUpperCase() + string.slice(p+2);
   // }
    else {
    return string.charAt(0).toUpperCase() + string.slice(1);
    }
}
;

// FUNCTION to Upper case the state, country
function upper_all(string) {

   return string.toUpperCase();
}
;

//FUNCTION to clean the minutes and seconds
function clean(my_data) {
  my_data = my_data.toString();
  
  let s = my_data.search("sec");
   console.log(s); 
  let m = my_data.search("min");
  
   
   let mtext = " minutes";
   let stext = " seconds";
  

   if (m > 0) {
     return my_data.slice(0,m) + mtext;
   }
   else if (s > 0) {
     return my_data.slice(0,s) + stext;
   } else {
     return my_data;
   }
  }

;


// function clean(string) {
//   return string;
// }

// Loop through an array of data and build the entire table body from scratch

// Iterate through each datetime
 data.forEach(data_field =>   {

  // Append one table row per student/grade
  var row = tbody.append("tr");

  // append one cell for the student and one cell for the grade
  row.append("td").text(data_field.datetime);
  row.append("td").text(upper(data_field.city));
  row.append("td").text(upper_all(data_field.state));
  row.append("td").text(upper_all(data_field.country));
  row.append("td").text(data_field.shape.charAt(0).toUpperCase() + data_field.shape.slice(1));
  row.append("td").text(clean(data_field.durationMinutes));
  row.append("td").text(data_field.comments.charAt(0).toUpperCase() + data_field.comments.slice(1));
});

// BUTTON FILTER PROCESS FOR STATE

var submit = d3.select("#submit-state");

submit.on("click", function() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#form-control-state");

  // Get the value property of the input element
  var inputValue = inputElement.property("value").toLowerCase();

  console.log(inputValue);

// Take value from filter button and tell JS to start an action to pull the data values
  

  var filteredData = data.filter(the_data => the_data.state === inputValue);

  // IDENTIFYING IF THERE IS ANY DATA - IF NOT, INFORM THE USER
  
  if (!filteredData || !filteredData.length) {
    console.log("There were not UFO Sitings in this State, try again!");
    d3.select('tbody').text("There were no UFO Sitings in the State you selected, try again!")
    
  }else {
  
  console.log(filteredData);
  
  
   // Use D3 to select the table body
   var tbody = d3.select("tbody");
   tbody.html("");

   // Use D3 to select the table
   var table = d3.select("#ufo-table");
   
   // Use D3 to set the table class to `table table-striped`
   table.attr("class", "table table-striped");
   
   
   // Loop through an array of data and build the entire table body from scratch
   
   // Iterate through each datetime
    filteredData.forEach(data_field =>   {
      
     // Append one table row per student/grade
     var row = tbody.append("tr");
   
     // append one cell for the student and one cell for the grade
  row.append("td").text(data_field.datetime);
  row.append("td").text(upper(data_field.city));
  row.append("td").text(upper_all(data_field.state));
  row.append("td").text(upper_all(data_field.country));
  row.append("td").text(data_field.shape.charAt(0).toUpperCase() + data_field.shape.slice(1));
  row.append("td").text(clean(data_field.durationMinutes));
  row.append("td").text(data_field.comments.charAt(0).toUpperCase() + data_field.comments.slice(1));
   })
  }
})
  ;

  // BUTTON FILTER PROCESS FOR DATE

  var submit = d3.select("#submit-date");

submit.on("click", function() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#form-control-date");

  
  // Get the value property of the input element
  var inputValue = inputElement.property("value").toString();

// Take value from filter button and tell JS to start an action to pull the data values
  

  var filteredData = data.filter(the_data => the_data.datetime === inputValue);

  // IDENTIFYING IF THERE IS ANY DATA - IF NOT, INFORM THE USER
  
  if (!filteredData || !filteredData.length) {
    console.log("There were not UFO Sitings in this State, try again!");
   
  d3.select('tbody').text("There were no UFO Sitings on the Date you selected, try again!")
    
  }else {

    console.log(filteredData);
  // Use D3 to select the table body
   var tbody = d3.select("tbody");
   tbody.html("");

   // Use D3 to select the table
   var table = d3.select("#ufo-table");
   
   // Use D3 to set the table class to `table table-striped`
   table.attr("class", "table table-striped");
   
   
   // Loop through an array of data and build the entire table body from scratch
   
   // Iterate through each datetime
    filteredData.forEach(data_field =>   {
      
     // Append one table row per student/grade
     var row = tbody.append("tr");
   
     // append one cell for the student and one cell for the grade
  row.append("td").text(data_field.datetime);
  row.append("td").text(upper(data_field.city));
  row.append("td").text(upper_all(data_field.state));
  row.append("td").text(upper_all(data_field.country));
  row.append("td").text(data_field.shape.charAt(0).toUpperCase() + data_field.shape.slice(1));
  row.append("td").text(clean(data_field.durationMinutes));
  row.append("td").text(data_field.comments.charAt(0).toUpperCase() + data_field.comments.slice(1));
   })
  }
}
  )
  ;



