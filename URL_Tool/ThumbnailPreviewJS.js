$(document).ready(function() {
  $.get('http://stackoverflow.com/questions/17712185/jquery-load-is-not-loading-a-local-html-file-inside-a-cocoa-webview', function (url) {
    $('.PreviewTitle').html($(url).find('meta[name=title]').attr("content"));
  });
});