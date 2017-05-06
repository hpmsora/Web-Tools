$(document).ready(function(){

  var $UploadedFile = $('#UploadedFile');

  $UploadedFile.on('change', function (e) {

    var UploadedFile = e.target.files;

    console.log(UploadedFile.value);
  });
})