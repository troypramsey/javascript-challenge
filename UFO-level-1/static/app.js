var form = d3.select('form');

buildTable = function() {

    d3.event.preventDefault();

    var input = d3.select("#dateform").property("value") 

    var filteredData = data.filter(d => d.datetime === input);

    console.log(filteredData);

    var table = d3.select('#tableSpace').append('table').attr('class', 'table table-striped');
    var thead = table.append('thead');
    var tbody = table.append('tbody');

    var headers = data.map(d => Object.keys(d))[0];

    var headerRow = thead.append('tr')
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

form.on("submit",buildTable);
// buildTable();
// console.log(table);