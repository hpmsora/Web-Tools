var query = 'select * from html where url="' + document.getElementById("MessageBox").value + '" and xpath="*"';
var url = 'https://query.yahooapis.com/v1/public/yql?q=' + encodeURIComponent(query);

  $.get(url, function(data) {
    var html = $(data).find('html');

    var title = html.find("meta[property='og:image']").attr('itemprop') || '';
    console.log(title);

    var url = document.getElementById("MessageBox").value;

    var regExpPinterest = /https?:\/\/(?:www\.)?pinterest.com\/(?:pin\/)([^#\&\?]*).*/;
    var matchPinterest = url.match(regExpPinterest);

    console.log("--" + matchPinterest[0]);

    $('.PreviewImage').html(title);
    $('.PreviewTitle').html(html.find("meta[name='twitter:title']").attr('content') || '');
    $('.PreviewDescription').html(html.find("meta[name='twitter:description']").attr('content') || '');
    $('.PreviewMainURL').html(html.find("meta[name='twitter:domain']").attr('content') || '');
  });
console.log('-------------------');