var PSD = require('psd');

PSD.fromURL("https://hpmsora.github.io/Web-Tools/FilePreview_Tool/Assets/samplePSD.psd").then(function(psd) {
  document.getElementById('testPSD').appendChild(psd.image.toPng().css({"width":"500px", "height":"500px"}));
});