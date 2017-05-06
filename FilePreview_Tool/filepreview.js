$(document).ready(function(){

  var $UploadedFile = $('#UploadedFile');

  $UploadedFile.on('change', function (e) {

    var UploadedFile = e.target.files[0];
    var tempAddress = URL.UploadedFile;

    console.log(UploadedFile.value);
    console.log(tempAddress);
  });
})