//------------------------------------------------
// PSD Viwer
var PSD = require('psd');

PSD.fromURL("https://hpmsora.github.io/Web-Tools/FilePreview_Tool/Assets/samplePSD.psd").then(function(psd) {
  var psdImage = psd.image.toPng();
  psdImage.style.max-width = "500px";
  psdImage.style.max-height = "500px";

  document.getElementById('testPSD').appendChild(psdImage);
});
//------------------------------------------------



//------------------------------------------------