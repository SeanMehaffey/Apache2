

$(document).ready(function () {



$("#ds").puidatascroller({
    header:'Scroll Down to Load More Cars',
    chunkSize: 10,
    datasource: function (callback) {
        $.ajax({
            type: "GET",
            url: '/MehafStc/JS/cars.json',
            dataType: "json",
            context: this,

            success: function (response) {
                callback.call(this, response);
            }
        });
    },
    mode:'document',
    template: $('#cartemplate')
});
});
