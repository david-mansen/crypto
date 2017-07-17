$(document).ready(function () {

    $('.coin').click(function () {
        var coin = $('.coin').val();
        var quantities = $('#amount').val().trim();
        var name = $('option').attr('class');
        var check = $('#checkbox').attr('value');

        var total = coin * quantities;

        console.log(name)

        var val = total.toLocaleString();
        $('#total').attr('placeholder', val);

        if (name === 'Bitcoin (BTC)') {
            $('#checkbox').attr('value', 'Bitcoin (BTC)');
        } else if (name === 'Ethereum (ETH) ') {
            $('#checkbox').attr('value', 'Ethereum (ETH)');
        }
        console.log(check + ' adad ')
    });

    $('#amount').keyup(function () {

        var coin = $('.coin').val();
        var quantities = $('#amount').val().trim();

        var total = coin * quantities;

        var val = total.toLocaleString();
        $('#total').attr('placeholder', val);
    })
});
