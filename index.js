var button = document.getElementById("button");

button.onclick = function () {
    var search = document.getElementById("text").value;
    window.open("https://uninternet.github.io/groups/" + search);
}