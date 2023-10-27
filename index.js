function search() {
  var searchInput = document.getElementById('search').text();
  var url = "https://uninternet.github.io/districts/" + searchInput;
  window.open(url);
}