$(document).ready(function(){
  //Input File
  var $files = $('#files');

  //File Change Event
  $files.on('change', function (e) {

    //File Object Information
    var files = e.target.files;

    //Create DocxJS
    var docxJS = new DocxJS();

    //File Parsing
    docxJS.parse(
      files[0],
      function () {
        //After Rendering
        docxJS.render($('#loaded-layout')[0], function (result) {
          if (result.isError) {
            console.log(result.msg);
          } else {
            console.log("Success Render");
          }
        });
      }, function (e) {
        console.log("Error!", e);
      }
    );
  });
});