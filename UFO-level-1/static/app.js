// REFERENCING FORM
var form = d3.select('form');

// EVENT HANDLER AND TABLE BUILDER
buildTable = function() {

    // Stops page refresh
    d3.event.preventDefault();

    // Builds filtered data from form input
    let input = d3.select("#dateform").property("value") 
    let filteredData = data.filter(d => d.datetime.includes(input));

    // Clear previous table if it exists
    d3.select('table').remove();

    // Build striped table skeleton
    let table = d3.select('#tableSpace').append('table').attr('class', 'table table-striped')
    let thead = table.append('thead');
    let tbody = table.append('tbody');

    // Build header row
    let headers = data.map(d => Object.keys(d))[0];
    let headerRow = thead.append('tr')
        .selectAll('th')
        .data(headers)
        .enter()
        .append('th')
        .text(d => d);

    // Build rows and columns using filtered data
    filteredData.forEach(d => {
        var row = tbody.append('tr');
        Object.values(d).forEach(value => {
        var cell = row.append('td');
        cell.text(value)
        })
    })
}


// EVENT LISTENER FIRES WHENEVER NEW CHARACTERS ARE INSERTED INTO FORM
form.on('keyup',buildTable);
