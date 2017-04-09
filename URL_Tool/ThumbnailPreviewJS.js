var query = 'select * from html where url="' + document.getElementById("MessageBox").value + '" and xpath="*"';

console.log(query);
var url = 'https://query.yahooapis.com/v1/public/yql?q=' + encodeURIComponent(query);

  $.get(url, function(data) {
    var html = $(data).find('html');
    console.log(html.find("meta[name='twitter:description']").attr('content'));

    $('.PreviewTitle').html(html.find("meta[name='twitter:description']").attr('content') || 'no title found');
  });
console.log('-------------------');