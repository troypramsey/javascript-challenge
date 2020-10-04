// REFERENCING FORM
var form = d3.select('form');

// TABLE BUILDING FUNCTION
buildTable = function(x) {

    // Build striped table skeleton
    let table = d3.select('#tableSpace').append('table').attr('class', 'table table-striped')
    let thead = table.append('thead');
    let tbody = table.append('tbody');

    // Build header row
    let headers = x.map(d => Object.keys(d))[0];
    let headerRow = thead.append('tr')
        .selectAll('th')
        .data(headers)
        .enter()
        .append('th')
        .text(d => d[0].toUpperCase()+d.slice(1));

    // Build rows and columns using filtered data
    x.forEach(d => {
        var row = tbody.append('tr');
        Object.values(d).forEach(value => {
        var cell = row.append('td');
        cell.text(value)
        })
    })
}

// BUILD INITIAL TABLE
buildTable(data);

// EVENT HANDLER REBUILDS TABLE USING FILTERED DATA
handleFilter = function() {

    // Clear previous table if it exists
    d3.select('table').remove();

    // Stops page refresh
    d3.event.preventDefault();

    // Builds filtered data from form input
    let dateInput = d3.select("#dateform").property("value")
    let cityInput = d3.select("#cityform").property("value") 
    let stateInput = d3.select("#stateform").property("value") 
    let countryInput = d3.select("#countryform").property("value") 
    let shapeInput = d3.select("#shapeform").property("value") 
    let filteredData = data.filter(d => d.datetime.includes(dateInput))
    .filter(d => d.city.includes(cityInput))
    .filter(d => d.state.includes(stateInput))
    .filter(d => d.country.includes(countryInput))
    .filter(d => d.shape.includes(shapeInput));

    // Build new filtered table
    buildTable(filteredData)
}


// EVENT LISTENER FIRES WHENEVER NEW CHARACTERS ARE INSERTED INTO FORM
form.on('keyup',handleFilter);
