var query = 'select * from html where url="' + document.getElementById("MessageBox").value + '" and xpath="*"';

console.log(query);
var url = 'https://query.yahooapis.com/v1/public/yql?q=' + encodeURIComponent(query);

  $.get(url, function(data) {
    var html = $(data).find('html');

    $('.PreviewImage').html(html.find("meta[property='og:image']").attr('itemprop') || '');
    $('.PreviewTitle').html(html.find("meta[name='twitter:title']").attr('content') || '');
    $('.PreviewDescription').html(html.find("meta[name='twitter:description']").attr('content') || '');
    $('.PreviewMainURL').html(html.find("meta[name='twitter:domain']").attr('content') || '');
  });
console.log('-------------------');