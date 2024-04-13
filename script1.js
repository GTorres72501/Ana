var text = "Assim estava o céu no momento em que o brilho mais intenso já presenciado nasceu.";
var speed = 90; // Velocidade em milissegundos

function typeWriter() {
  if (i < text.length) {
    document.getElementById("typewriter").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  } else {
    setTimeout(eraseText, 1000);
  }
}

function eraseText() {
  var textLength = document.getElementById("typewriter").innerHTML.length;
  if (textLength > 0) {
    document.getElementById("typewriter").innerHTML = text.substring(0, textLength - 1);
    setTimeout(eraseText, speed);
  }
}

var i = 0;
typeWriter();