var PSD = require('psd');
var psd = PSD.fromFile("https://hpmsora.github.io/Web-Tools/FilePreview_Tool/Assets/samplePSD.psd");
psd.parse();

/*PSD.fromURL("https://hpmsora.github.io/Web-Tools/FilePreview_Tool/Assets/samplePSD.psd").then(function(psd) {
  document.getElementById('testIfram_Class').appendChild(psd.image.toPng());
});*/