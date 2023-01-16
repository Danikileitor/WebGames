function load() {
  document.getElementById("div1").style.display = "";
}
function over(obj) {
  var aleatorio = Math.round(Math.random() * 9);
  var colores = [
    "red",
    "blue",
    "yellow",
    "green",
    "pink",
    "brown",
    "lime",
    "coral",
    "cian",
    "gold",
  ];
  document.getElementById(obj.id).style.background = colores[aleatorio];
  document.getElementById("puntostexto").style.background = colores[aleatorio];
  var fecha1 = new Date();
  document.getElementById("temporizador").value = fecha1.getTime();
  var tiempoactual = document.getElementById("temporizador").value;
  var tiempofinal = document.getElementById("temporizadorfin").value;
  if (tiempofinal <= tiempoactual) {
    document.getElementById("div2").style.display = "none";
    document.getElementById("div1").style.display = "";
    document.getElementById("tiempotexto").innerHTML = "¿Reintentar?";
    if (
      document.getElementById("record").value <=
      document.getElementById("puntos").value
    ) {
      document.getElementById("record").value =
        document.getElementById("puntos").value;
      if (document.getElementById("record").value >= 100) {
        document.getElementById("recordtexto").style.background = "red";
        document.getElementById("recordfondo").style.background = "red";
      }
    }
  }
  if (aleatorio == 1) {
    document.getElementById("puntos").value++;
  }
  if (aleatorio == 0) {
    document.getElementById("puntos").value--;
  }
  if (document.getElementById("puntos").value < "10") {
    document.getElementById("juego").style.background = "white";
  }
  if (document.getElementById("puntos").value == "10") {
    document.getElementById("juego").style.background = "lightblue";
  }
}
function out(obj) {
  var aleatorio = Math.round(Math.random() * 9);
  var colores = [
    "red",
    "blue",
    "yellow",
    "green",
    "pink",
    "brown",
    "lime",
    "coral",
    "cian",
    "gold",
  ];
  document.getElementById(obj.id).style.background = colores[aleatorio];
  document.getElementById("contador").style.background = colores[aleatorio];
  document.getElementById("tiempotexto").style.background = colores[aleatorio];
  var fecha1 = new Date();
  document.getElementById("temporizador").value = fecha1.getTime();
  var tiempoactual = document.getElementById("temporizador").value;
  var tiempofinal = document.getElementById("temporizadorfin").value;
  if (tiempofinal <= tiempoactual) {
    document.getElementById("div2").style.display = "none";
    document.getElementById("div1").style.display = "";
    document.getElementById("tiempotexto").innerHTML = "¿Reintentar?";
    if (
      document.getElementById("record").value <=
      document.getElementById("puntos").value
    ) {
      document.getElementById("record").value =
        document.getElementById("puntos").value;
      if (document.getElementById("record").value >= 100) {
        document.getElementById("recordtexto").style.background = "red";
        document.getElementById("recordfondo").style.background = "red";
      }
    }
  }
  if (aleatorio == 1) {
    document.getElementById("puntos").value++;
  }
  if (aleatorio == 0) {
    document.getElementById("puntos").value--;
  }
  if (document.getElementById("puntos").value < "10") {
    document.getElementById("juego").style.background = "white";
  }
  if (document.getElementById("puntos").value == "10") {
    document.getElementById("juego").style.background = "lightblue";
  }
}
function comenzar() {
  document.getElementById("div1").style.display = "none";
  document.getElementById("div2").style.display = "";
  document.getElementById("juego").style.background = "white";
  document.getElementById("puntostexto").style.background = "white";
  document.getElementById("contador").style.background = "white";
  document.getElementById("tiempotexto").style.background = "white";
  document.getElementById("tiempotexto").innerHTML = "¡Tienes 1 minuto!";
  document.getElementById("puntos").value = 0;
  var fecha = new Date();
  var tiempo = fecha.getTime();
  var tiempofin = tiempo + 60000;
  document.getElementById("temporizador").value = tiempo;
  document.getElementById("temporizadorfin").value = tiempofin;
}
