





$(document).ready(function () {


  var localData = [
        {'brand': 'Volkswagen', 'year': 2012, 'color': 'White', 'vin': 'dsad231ff'},
        {'brand': 'Audi', 'year': 2011, 'color': 'Black', 'vin': 'gwregre345'},
        {'brand': 'Renault', 'year': 2005, 'color': 'Gray', 'vin': 'h354htr'},
        {'brand': 'BMW', 'year': 2003, 'color': 'Blue', 'vin': 'j6w54qgh'},
        {'brand': 'Mercedes', 'year': 1995, 'color': 'White', 'vin': 'hrtwy34'},
        {'brand': 'Volvo', 'year': 2005, 'color': 'Black', 'vin': 'jejtyj'},
        {'brand': 'Honda', 'year': 2012, 'color': 'Yellow', 'vin': 'g43gr'},
        {'brand': 'Jaguar', 'year': 2013, 'color': 'White', 'vin': 'greg34'},
        {'brand': 'Ford', 'year': 2000, 'color': 'Black', 'vin': 'h54hw5'},
        {'brand': 'Fiat', 'year': 2013, 'color': 'Red', 'vin': '245t2s'}
    ];


  $('#tbllocal').puidatatable({
      caption: 'Cars',
      draggableRows: true,
      sortField: 'brand',
      sortOrder: 1,
      columns: [
          {field: 'vin', headerText: 'Vin'},
          {field: 'brand', headerText: 'Brand'},
          {field: 'year', headerText: 'Year'},
          {field: 'color', headerText: 'Color'}
      ],
      datasource: localData
  });

  var localData2 = new Object();

    $("#button1").click(function () {

        localData2.vin = null;
        localData2.brand = null;
        localData2.year = null;
        localData2.color = null;
        localData2.vin = $("#in1").val();
        localData2.brand = $("#in2").val();
        localData2.year = $("#in3").val();
        localData2.color = $("#in4").val();



if (localData2.vin == ''){}

else if (localData2.brand == ''){}

else if (localData2.year == ''){}

else if (localData2.color == ''){}

else {
  localData.push(localData2);

$('#default').puigrowl();
$('#default').puigrowl('show', [{severity: 'Info', summary: 'Info', detail: "submitted successfully"}]);



  $('#tbllocal').puidatatable({
    caption: 'Local Datasource',
    draggableRows: true,
    sortField: 'brand',
    sortOrder: 1,
    columns: [
        {field: 'vin', headerText: 'Vin'},
        {field: 'brand', headerText: 'Brand'},
        {field: 'year', headerText: 'Year'},
        {field: 'color', headerText: 'Color'}
    ],
    datasource: localData
});}



          });
    });
