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
        .text(d => d);

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
    let input = d3.select("#dateform").property("value") 
    let filteredData = data.filter(d => d.datetime.includes(input));

    // Build new filtered table
    buildTable(filteredData)
}


// EVENT LISTENER FIRES WHENEVER NEW CHARACTERS ARE INSERTED INTO FORM
form.on('keyup',handleFilter);
