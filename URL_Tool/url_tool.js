function DetectKeys() {
  var textKey = window.event.keyCode;

  $('#LogId').html(textKey);

  if(textKey == 32 || textKey == 13) {
    $('#LogId').html("Detect!");
    showInfo();
  }
}

function ValidURL(str) {
  var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
  return regexp.test(str);
}

function getVideoId(url) {
    var regExpYouTube = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    var regExpVimeo = /https?:\/\/(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)/;
    var matchVimeo = url.match(regExpVimeo);
    var matchYouTube = url.match(regExpYouTube);

    if (matchYouTube && matchYouTube[2].length == 11) {
        return ["YouTube", matchYouTube[2]];
    } else if (matchVimeo) {
        return ["Vimeo", matchVimeo[3]];
    }else {
        return 'error';
    }
}

function showingVideo(type, id) {
  if(type == "YouTube")
    $('#ResultBoxInner').html('<iframe width="560" height="315" src="https://www.youtube.com/embed/' + id + '" frameborder="0" allowfullscreen></iframe>');
  else if(type == "Vimeo")
    $('#ResultBoxInner').html('<iframe width="560" height="315" src="https://player.vimeo.com/video/' + id + '" frameborder="0" allowfullscreen></iframe>');
}

function shwoingWebPreview() {
  $.get("ThumbnailPreview.html", function(data) {
    $("#ResultBox").append(data);
  });
}

function showInfo() {
    var text = document.getElementById("MessageBox").value;
    
    if(ValidURL(text)) {
      var VideoId = getVideoId(text);
      if(VideoId != "error") {
        $('#VideoId').html(VideoId[1]);
        showingVideo(VideoId[0], VideoId[1]);
      } else {
        shwoingWebPreview();
      }
    }
}