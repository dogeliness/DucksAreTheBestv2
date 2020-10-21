var colours = ["#FF0000", "#FF7F00", "#FFFF00", "#00FF00", "#0000FF", "#4B0082", "#9400D3"];
var colour = 0;

window.setInterval(function() {
    $('body').css('background-color',colours[colour]);
    colour++;
    if (colour == 7) {
        colour = 0;
    }
}, 1000);

function placeDown(event) {
    var x = event.clientX + "px";
    var y = event.clientY + "px";
    var img = document.createElement('img');
    img.src = "duck_xs.png";
    img.style.left = x;
    img.style.top = y;
    document.body.appendChild(img); 
}

var titles = ["DUCKS QUACK ME UP", "THEY SHOULD HAVE DUCKTORS INSTEAD OF VETS", "DUCK JOKES ARE FOWL", "Ducks are the Best"];
document.title = titles[Math.floor(Math.random() * 3)];