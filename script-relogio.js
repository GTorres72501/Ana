// Data pré-estabelecida (13/04/2004)
var dataPreEstabelecida = new Date('2004-04-04T22:25:00');

function atualizarContador() {
  // Data e hora atuais
  var agora = new Date();

  // Calcula a diferença em milissegundos
  var diferencaEmMilissegundos = agora - dataPreEstabelecida;

  // Calcula a diferença em segundos, minutos, horas e dias
  var segundos = Math.floor(diferencaEmMilissegundos / 1000);
  var minutos = Math.floor(segundos / 60);
  var horas = Math.floor(minutos / 60);
  var dias = Math.floor(horas / 24);

  // Calcula os valores restantes após calcular dias, horas, minutos e segundos
  horas = horas % 24;
  minutos = minutos % 60;
  segundos = segundos % 60;

  // Adiciona zeros à esquerda se o número for menor que 10
  horas = horas < 10 ? "0" + horas : horas;
  minutos = minutos < 10 ? "0" + minutos : minutos;
  segundos = segundos < 10 ? "0" + segundos : segundos;

  // Atualiza o elemento HTML com o contador
  document.getElementById('dias').innerHTML = dias;
  document.getElementById('horas').innerHTML = horas;
  document.getElementById('minutos').innerHTML = minutos;
  document.getElementById('segundos').innerHTML = segundos;
}

// Atualiza o contador a cada segundo (1000 milissegundos)
setInterval(atualizarContador, 1000);

// Chama a função pela primeira vez para exibir o contador inicial
atualizarContador();