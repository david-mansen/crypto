$(document).ready(function () {

    $('#amount').keyup(function () {

        var coin = $('.coin').val();
        var quantities = $('#amount').val().trim();

        var total = coin * quantities;

        $('#total').attr('placeholder', total);
    });
});
