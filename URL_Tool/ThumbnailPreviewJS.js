$(document).ready(function() {
$.get('http://www.guardian.co.uk/culture/2012/jun/21/jimmy-carr-apologises-error-tax', 
function(data) {
   $(data).find('meta[name=adescription]').attr("content");
});
});