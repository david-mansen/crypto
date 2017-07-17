/**
 * Created by kevin on 7/17/2017.
 */
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