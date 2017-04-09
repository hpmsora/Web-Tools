var query = 'select * from html where url="' + document.getElementById("MessageBox").value + '" and xpath="*"';

console.log(query);
var url = 'https://query.yahooapis.com/v1/public/yql?q=' + encodeURIComponent(query);

  $.get(url, function(data) {
    var html = $(data).find('html');

    $('.PreviewImage').html(html.find("meta[property='og:image']").attr('itemprop') || 'no title found');
    $('.PreviewTitle').html(html.find("meta[name='twitter:title']").attr('content') || 'no title found');
  });
console.log('-------------------');