
$('form').on('submit', function (e) {
    e.preventDefault();

    var fname = $('#fname').val().trim();
    var lname = $('#lname').val().trim();

    var updated = {
        name: fname,
        lname: lname
    };

    $.post('/', updated)
        .done(function (data) {
            console.log(updated);

            $('.username').html(updated.name + ' ' + updated.lname)


        })
});

function previewProfileImage( uploader ) {
    //ensure a file was selected
    if (uploader.files && uploader.files[0]) {
        var imageFile = uploader.files[0];
        var reader = new FileReader();
        reader.onload = function (e) {
            //set the image data as source
            $('#profileImage').attr('src', e.target.result);
        }
        reader.readAsDataURL( imageFile );
    }
}

$("#imageUpload").change(function(){
    previewProfileImage( this );
});