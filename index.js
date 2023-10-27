var button = document.getElementById("btnSearch");

button.onclick = function () {
    var search = document.getElementById("text").value;
    window.open("https://uninternet.github.io/groups/" + search);
}