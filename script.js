function modeChange() {
  var element = document.body;

  var d = document.getElementById("mode");

  if (d.innerText == "Dark Mode") {
    element.className = "darkmode";
    d.innerText = "Light Mode";
  } else {
    element.className = "lightmode";
    d.innerText = "Dark Mode";
  }
}
