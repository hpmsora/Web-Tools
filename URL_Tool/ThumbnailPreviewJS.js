var query = 'select * from html where url="' + document.getElementById("MessageBox").value + '" and xpath="*"';
var url = 'https://query.yahooapis.com/v1/public/yql?q=' + encodeURIComponent(query);

  $.get(url, function(data) {
    var html = $(data).find('html');

    console.log(html);

    var title = html.title || null;
    var url = document.getElementById("MessageBox").value;

    var regExpPinterest = /https?:\/\/(?:www\.)?pinterest.com\/(?:pin\/)([^#\&\?]*).*/;
    var matchPinterest = url.match(regExpPinterest);

    console.log(title);

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
        console.log("Not Pinterest");
        if(title == null) {
            title = html.find("meta[name='twitter:title']").attr('content') || null;
            if(title == null) {
                title = html.find("meta[name='og:title']").attr('content') || 'No Title';
            }
        }
        $('.PreviewImage').html('Image');
        $('.PreviewTitle').html();
        $('.PreviewDescription').html(html.find("meta[name='twitter:description']").attr('content') || '');
        $('.PreviewMainURL').html(html.find("meta[name='twitter:domain']").attr('content') || '');
    }
  });
console.log('-------------------');