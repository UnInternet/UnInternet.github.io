function search() {
  var searchInput = document.getElementById('search').text();
  var url = "https://uninternet.github.io/groups/" + searchInput;
  window.open(url);
}