var table = d3.select('div').append('table');
var thead = table.append('thead');
var tbody = table.append('tbody');

var headers = data.map(d => Object.keys(d))[0];

var headerRow = thead.append('tr')
    .selectAll('th')
    .data(headers)
    .enter()
    .append('th')
    .text(d => d);

data.forEach(d => {
    let row = tbody.append('tr');
    Object.values(d).forEach(value => {
    let cell = row.append('td');
    cell.text(value)
    })
})


// console.log(table);