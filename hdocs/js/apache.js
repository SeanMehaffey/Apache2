

$(document).ready(function() {





$('#Dropdown').puidropdown({


  change: function () {


    $.ajax({
      type: "GET",
      url: '/MehafDyn/apacheDropdown.py',
      dataType: "json",
      data: {'J':'G','host2':$('#Dropdown').val()},
      success: function(response){
        $("#content").html(response[0]['name'] + ": " + response[0]['data'] + "<br>" + response[1]['name'] + ": " + response[1]['data']
      + "<br>" + response[2]['name'] + ": " + response[2]['data']+ "<br>" + response[3]['name'] + ": " + response[3]['data']);
      var dropdown1 = setTimeout(function(){},10000)
    }


    });


  }



});


document.getElementById('hide').style.display = 'none';
document.getElementById('content').style.display = 'block';
document.getElementById('drophide').style.display = 'block';
document.getElementById('dashButton').innerHTML = 'View dashBoard';
//first tab -serverUptime
(function apache3(){
setTimeout(apache3, 30000);
$.ajaxSetup({
  type: "GET",
  url: '/MehafDyn/apache1.2.py',
  dataType: "json",
});




(function apache() {

  restarttime = 1;
  serverUptime = 2;
  totalAccesses = 3;
  cpuUsage = 4;
  data = 5;
  datacount = 6;


$.ajax({
      data: {'J':'G'},
      context: this,
      success: function(response) {

      for (i = 1; i <= 16; i++) {
      $('#tab' + i).html(response[restarttime]['name']+ ": " + response[restarttime]['data'] + "<br>" + response[serverUptime]['name']+
       ": " + response[serverUptime]['data'] + "<br>" +response[totalAccesses]['name'] + ": "+ response[totalAccesses]['data'] + "<br>" + response[cpuUsage]['name'] +": "+ response[cpuUsage]['data'] + "<br>"
        + response[data]['name'] +": "+ response[data]['data'] );

        restarttime = restarttime + datacount;
        serverUptime = serverUptime + datacount;
        totalAccesses = totalAccesses + datacount;
        cpuUsage = cpuUsage + datacount;
        data = data + datacount;
    }},


    });
    for (i = 1; i <= 4; i++) {
    $('#tabview' + i).puitabview();}

})();



$.ajaxSetup({
  type: "GET",
  url: '/MehafDyn/apache1.3.py',
  dataType: "json",
});


(function apache2() {

  restarttime2 = 1;
  serverUptime2 = 2;
  totalAccesses2 = 3;
  cpuUsage2 = 4;
  data2 = 5;
  datacount2 = 6;


$.ajax({
      data: {'J':'G'},
      context: this,
      success: function(response) {

      for (g = 17; g <= 29 ; g++) {
      $('#tab' + g).html(response[restarttime2]['name']+ ": " + response[restarttime2]['data'] + "<br>" + response[serverUptime2]['name']+
       ": " + response[serverUptime2]['data'] + "<br>" +response[totalAccesses2]['name'] + ": "+ response[totalAccesses2]['data'] + "<br>" + response[cpuUsage2]['name'] +": "+ response[cpuUsage2]['data'] + "<br>"
        + response[data2]['name'] +": "+ response[data2]['data'] );

        restarttime2 = restarttime2 + datacount2;
        serverUptime2 = serverUptime2 + datacount2;
        totalAccesses2 = totalAccesses2 + datacount2;
        cpuUsage2 = cpuUsage2 + datacount2;
        data2 = data2 + datacount2;
    }},


    });
    for (g = 5; g < 10; g++) {
    $('#tabview' + g).puitabview();}

})();


})();




});
