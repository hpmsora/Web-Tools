var query = 'select * from html where url="' + 'http://www.naver.com/' + '" and xpath="*"';
var url = 'https://query.yahooapis.com/v1/public/yql?q=' + encodeURIComponent(query);

  $.get(url, function(data) {
    var html = $(data).find('html');
    $('#PreviewTitle').html(html.find('meta[name=keywords]').attr('content') || 'no keywords found');

    console.log(html.find('meta[name=keywords]').attr('content') || 'no keywords found');
  });
console.log('-------------------');