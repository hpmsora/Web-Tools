$(document).ready(function(){

  var $UploadedFile = $('#UploadedFile');

  $UploadedFile.on('change', function (e) {

    var UploadedFile = e.target.UploadedFile;

    console.log(UploadedFile.mozFullPath);
  });
})