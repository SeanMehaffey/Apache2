$(document).ready(function() {
    for (i = 1; i < 5; i++)
    $('#in' + i).puiinputtext();
    $('#button1').puibutton();

});


$(document).ready(function() {
 setTimeout(function(){$('#loadingmain').fadeToggle(4000, "linear");},2000)
     setTimeout(function(){$('.loadFrame').attr('src', "");},6000)
});

$(document).ready(function() {

$('#tabview').puitabview();
});

//submit button
function submit() {
button1();
button2();
button3();
$("#button1").css("color", "black");
validate();
}

function validate() {

    var x = document.getElementById("in1").value;
    var y = document.getElementById("in2").value;
    var z = document.getElementById("in3").value;

    if ((x == "")&&(y == "")&&(z == "")) {
      alert("All boxes need to be filled!");

    }
    else if ((x == "")&&(y == "")) {
      alert("Name and employee ID needs to be filled");

    }

    else if ((x == "")&&(z == "")) {
      alert("Name and Vin needs to be filled");

    }

    else if ((y == "")&&(z == "")) {
      alert("Employee ID and Vin need to be filled");

    }

    else if (y == "") {
      alert("Employee ID needs to be filled");

    }

    else if (x == "") {
      alert("Name needs to be filled");

    }
    else if (z == "") {
      alert("Vin needs to be filled");

    }

}


//imput functions
function button1(){

 var x = document.getElementById("in1").value
  document.getElementById("out1").innerHTML = x}

  function button2(){

   var x = document.getElementById("in2").value
    document.getElementById("out2").innerHTML = x}

    function button3(){

     var x = document.getElementById("in3").value
      document.getElementById("out3").innerHTML = x}

      function button4(){

       var x = document.getElementById("in4").value
        document.getElementById("out4").innerHTML = x}


/*for loop that runs the slide show*/
$(document).ready(function() {
  for (i = 1; i < 3; i++)
  $('#images'+i).puigalleria({
            panelWidth: 600,
            panelHeight: 300,
            showCaption: false,
        });
});




/*for loop that runs the drop down*/
    $(document).ready(function() {
      for (i = 1; i < 4; i++)

      $('#options' + i).puipanel({
          toggleable: true
      });
    });
/*carousel*/
    $(document).ready(function() {
          $('#cars2').puicarousel({
           headerText: 'Remote DataSource',
           pageLinks: 5,
           datasource: function(callback) {
               $.ajax({
                   type: "GET",
                   url: '/MehafStc/JS/vehicle.json',
                   dataType: "json",
                   context: this,
                   success: function(response) {
                      //how many sections on the file it reads
                       callback.call(this, response.slice(0,6));
                   }
               });
           },
           itemContent: function(car) {
               var content = $('<div class="ui-grid ui-grid-responsive"></div>');
               content.append('<div class="ui-grid-row"><div class="ui-grid-col-12"><img src="../MehafStc/IMG/cars/' + car.brand +  '.jpg" /></div>')
                       .append('<div class="ui-grid-row"><div class="ui-grid-col-6">Vin</div><div class="ui-grid-col-6">' + car.vin + ' </div></div>')
                       .append('<div class="ui-grid-row"><div class="ui-grid-col-6">Year</div><div class="ui-grid-col-6">' + car.year + ' </div></div>')
                       .append('<div class="ui-grid-row"><div class="ui-grid-col-6">Color</div><div class="ui-grid-col-6">' + car.color + ' </div></div>');
               return content.html();
           }
       }); });
