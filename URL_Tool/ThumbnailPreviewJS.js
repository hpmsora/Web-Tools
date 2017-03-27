$.ajax({
      url: "http://textance.herokuapp.com/title/www.bbc.co.uk",
      complete: function(data) {
        alert(data.responseText);
      }
});