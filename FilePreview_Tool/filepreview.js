var global = window
var Parser = require('psd.js').Parser
var ndarray = require('ndarray')
var savePixels = require('save-pixels')
var concat = require('concat-stream')

$(document).ready(function(){

  var $UploadedFile = $('#UploadedFile');

  $UploadedFile.on('change', function (e) {

    var UploadedFile = e.target.files[0];
    var tempAddress = URL.UploadedFile;

    console.log(UploadedFile.value);
    console.log(tempAddress);
  });
})

document.getElementById("UploadedFile").onchange = function () {
    var reader = new FileReader();

    reader.onload = function (e) {
        // get loaded data and render thumbnail.
        document.getElementById("image").src = e.target.result;
    };

    // read the image file as a data URL.
    reader.readAsDataURL(this.files[0]);
};