$(document).ready(function () {

    $('#amount').keyup(function () {

        var coin = $('.coin').val();
        var quantities = $('#amount').val().trim();

        var total = coin * quantities;

        $('#total').attr('placeholder', total);
    });
});

getData: function () {
    app.get("/Orders", function (req, res) {

        request({
            method: 'POST',
            url: 'https://private-eb3c42-coinigy.apiary-mock.com/api/v1/orders',
            headers: {
            }
        }, function (error, response, body) {

            res.render('Response:', body);
        });
    })
}
