
<<<<<<< HEAD
=======

>>>>>>> 4629f4cb4d1f8a817b396a9e3643ba26ce7e1c14
$('form').on('submit', function (e) {
    e.preventDefault();

    var fname = $('#fname').val().trim();
    var lname = $('#lname').val().trim();

    var updated = {
        name: fname,
        lname: lname
<<<<<<< HEAD
    };
=======
    }
>>>>>>> 4629f4cb4d1f8a817b396a9e3643ba26ce7e1c14

    $.post('/', updated)
        .done(function (data) {
            console.log(updated);

            $('.username').html(updated.name + ' ' + updated.lname)

<<<<<<< HEAD
=======

>>>>>>> 4629f4cb4d1f8a817b396a9e3643ba26ce7e1c14
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
<<<<<<< HEAD
        };
=======
        }
>>>>>>> 4629f4cb4d1f8a817b396a9e3643ba26ce7e1c14
        reader.readAsDataURL( imageFile );
    }
}

$("#imageUpload").change(function(){
    previewProfileImage( this );
<<<<<<< HEAD
});
=======
});
>>>>>>> 4629f4cb4d1f8a817b396a9e3643ba26ce7e1c14
