$(document).ready(function () {

    console.log('Loaded JS');

    $('#amount').keyup(function () {

        var coin = $('.coin').val();
        var quantities = $('#amount').val().trim();

        var total = coin * quantities;

        $('#total').attr('placeholder', total);
    });
});
