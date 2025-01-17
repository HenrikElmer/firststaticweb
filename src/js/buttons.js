
function ruleClick() {
    var x = document.getElementById("rules")
    var y = document.getElementById("resultat")
    var z = document.getElementById("picture")

    x.style.display = "block";
    y.style.display = "none";
    z.style.display = "none";

}

function resClick() {
    var x = document.getElementById("rules")
    var y = document.getElementById("resultat")
    var z = document.getElementById("picture")

    x.style.display = "none";
    y.style.display = "block";
    z.style.display = "none";

}

function picClick() {
    var x = document.getElementById("rules")
    var y = document.getElementById("resultat")
    var z = document.getElementById("picture")

    x.style.display = "none";
    y.style.display = "none";
    z.style.display = "block";

}

function helpClick() {
    var x = document.getElementById("help1")
    var y = document.getElementById("help2")
    x.style.visibility = "hidden";
    y.style.visibility = "visible";
}

function helpClick2() {
    var x = document.getElementById("help1")
    var y = document.getElementById("help2")
    y.style.visibility = "hidden";
    x.style.visibility = "visible";
}
