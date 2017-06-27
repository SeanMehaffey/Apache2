$(document).ready(function () {



//set up for ajax
  $.ajaxSetup({
  type: "GET",
  url: '/MehafDyn/SeanDatabase.py',
  dataType: "json"

  });



//table
  $('#tbllocal').puidatatable({
      caption: 'DataBase',
      columns: [
          {field: 'Vin', headerText: 'Vin'},
          {field: 'Brand', headerText: 'Brand'},
          {field: 'Year', headerText: 'Year'},
          {field: 'Color', headerText: 'Color'}
      ],


      //datasource ajax
      datasource: function(callback){

        $.ajax({
        data: {'J':'table'},
        context: this,
        success: function(response) {

          callback.call(this, response);
        }
      });

 }



  });
//end table



    });//end function
