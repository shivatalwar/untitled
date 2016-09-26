$(document).ready(function(){
    populateTable(); // populateTable function
});
function populateTable() {
    var tableContent = ''; // it a variable
    $.getJSON( '/download', function( data ) { // get files as data
        for(var item in data) { // one by one get and add fortable
            tableContent += '<tr>';
            tableContent += '<td>' + data[item] + '</td>'; // this file name column
            tableContent += '<td><a href='+'/'+data[item]+'>' + data[item]+ '</a></td>'; // this was the link column
        }
        $('#download table tbody').html(tableContent); // add into the table
    });
};