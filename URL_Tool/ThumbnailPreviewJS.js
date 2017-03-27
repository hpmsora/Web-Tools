$(document).ready(function() {
  $.get('https://www.youtube.com/results?search_query=making+link+thumbnail', function (url) {
    $('.PreviewTitle').html("Hello");
  });
});