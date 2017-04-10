var query = 'select * from html where url="' + document.getElementById("MessageBox").value + '" and xpath="*"';
var url = 'https://query.yahooapis.com/v1/public/yql?q=' + encodeURIComponent(query);

  $.get(url, function(data) {
    var html = $(data).find('html');

    var title = html.find("title").text() || null;
    if(title == null) {
        title = $(html).attr('title');
    }

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
    } else {
        console.log("Not Pinterest");
        var imageURL = html.find("meta[property='og:image']").attr('content') || null;
        console.log(imageURL);
        if(imageURL != null) {
            $('.PreviewImage').html("<img src='" + imageURL + "' style='width:300px;'>");
        } else {
            $('.PreviewImage').html('Image');
        }
        
        if(title == null) {
            title = html.find("meta[name='title']").attr('content') || html.find("meta[name='twitter:title']").attr('content') || html.find("meta[property='og:title']").attr('content') || 'No Title';
        }
        $('.PreviewTitle').html(title);

        var description = html.find("meta[name='description']").attr('content') || html.find("meta[name='twitter:description']").attr('content') || html.find("meta[property='og:description']").attr('content') || 'No Title';
        $('.PreviewDescription').html(description);
        $('.PreviewMainURL').html(extractRootDomain(url));
    }
  });

function extractHostname(url) {
    var hostname;
    if (url.indexOf("://") > -1) {
        hostname = url.split('/')[2];
    } else {
        hostname = url.split('/')[0];
    }
    hostname = hostname.split(':')[0];

    return hostname;
}
function extractRootDomain(url) {
    var domain = extractHostname(url),
        splitArr = domain.split('.'),
        arrLen = splitArr.length;
    if (arrLen > 2) {
        domain = splitArr[arrLen - 2] + '.' + splitArr[arrLen - 1];
    }
    return domain;
}
