function foo(response) {
  var meta = response.meta;
  var data = response.data;
  console.log(meta);
  console.log(data);
}

var script = document.createElement('script');
script.src = 'http://stackoverflow.com/questions/35911262/fetching-metadata-from-url';

document.getElementsByTagName('head')[0].appendChild(script);