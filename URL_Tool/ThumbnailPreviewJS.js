$("#PreviewTitle").load("{http://www.naver.com/} meta[name='Author']", function(response, status, xhr){
    var $meta = $("meta", this);

    $(this).text($meta.attr("content"));

    $meta.remove();
});