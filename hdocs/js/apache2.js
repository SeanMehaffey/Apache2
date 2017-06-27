




$(document).ready(function() {



//first tab -serverUptime


$.ajaxSetup({
  type: "GET",
  url: '/MehafDyn/apache1.3.py',
  dataType: "json",
});




(function apache2() {
setTimeout(apache2, 10000);
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

      for (g = 21; g < 100; g++) {
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


})();







for (g = 6; g < 10; g++) {
$('#tabview' + g).puitabview();}
});
