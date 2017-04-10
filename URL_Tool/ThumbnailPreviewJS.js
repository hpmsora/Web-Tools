var query = 'select * from html where url="' + document.getElementById("MessageBox").value + '" and xpath="*"';
var url = 'https://query.yahooapis.com/v1/public/yql?q=' + encodeURIComponent(query);

  $.get(url, function(data) {
    var html = $(data).find('html');

    var title = html.find("meta[property='og:image']").attr('itemprop') || '';
    var url = document.getElementById("MessageBox").value;

    var regExpPinterest = /https?:\/\/(?:www\.)?pinterest.com\/(?:pin\/)([^#\&\?]*).*/;
    var matchPinterest = url.match(regExpPinterest);

    if(matchPinterest) {
        $('#VideoId').html(matchPinterest[1]);
        $('#PreviewWrapID').html('<script async defer src="//assets.pinterest.com/js/pinit.js"></script>');
        var PreviewWrap = document.getElementById("PreviewWrapID");
        var preview = document.createElement('a');
        preview.setAttribute('data-pin-do',"embedPin");
        preview.setAttribute('href',matchPinterest[0]);
        PreviewWrap.appendChild(preview);
        //$('#PreviewWrapID').html('<a data-pin-do="embedPin" href="' + matchPinterest[0] + '"></a>');
    } else {
        $('.PreviewImage').html(title);
        $('.PreviewTitle').html(html.find("meta[name='twitter:title']").attr('content') || '');
        $('.PreviewDescription').html(html.find("meta[name='twitter:description']").attr('content') || '');
        $('.PreviewMainURL').html(html.find("meta[name='twitter:domain']").attr('content') || '');
    }
  });
console.log('-------------------');