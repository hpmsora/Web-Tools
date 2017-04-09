var query = 'select * from html where url="' + 'http://stackoverflow.com/questions/35911262/fetching-metadata-from-url' + '" and xpath="*"';
var url = 'https://query.yahooapis.com/v1/public/yql?q=' + encodeURIComponent(query);

  $.get(url, function(data) {
    var html = $(data).find('html');
    console.log(html);

    $('#PreviewTitle').html(html.find("meta[name='twitter:title']").attr('content') || 'no title found');

    console.log(html.find('meta[name=twitter:title]').attr('content') || 'no keywords found');
  });
console.log('-------------------');