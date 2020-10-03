var form = d3.select('form');

buildTable = function() {

    d3.event.preventDefault();

    let input = d3.select("#dateform").property("value") 

    let filteredData = data.filter(d => d.datetime.includes(input));

    d3.select('table').remove();

    let table = d3.select('#tableSpace').append('table').attr('class', 'table table-striped')
    let thead = table.append('thead');
    let tbody = table.append('tbody');

    let headers = data.map(d => Object.keys(d))[0];

    let headerRow = thead.append('tr')
        .selectAll('th')
        .data(headers)
        .enter()
        .append('th')
        .text(d => d);

    filteredData.forEach(d => {
        var row = tbody.append('tr');
        Object.values(d).forEach(value => {
        var cell = row.append('td');
        cell.text(value)
        })
    })
}

// searchHandler = function () {
//     d3.event.preventDefault();

//     var input = d3.select("#date-form").property("value") 

//     var filteredData = data.filter(d => d.datetime.slice(1, -2) === input);
// }

form.on('keyup',buildTable);
// buildTable();
// console.log(table);