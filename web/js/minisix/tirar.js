function Tirar(){
document.getElementById("TiradaR").innerHTML = " ";
var dadoT = parseInt("0");
var	critico = parseInt("0");
var criticoC = parseInt("0");
var criticoT = parseInt("0");
var Mod1 = parseInt(document.getElementById("Mod1").value);
var Mod2 = parseInt(document.getElementById("Mod2").value);
var Fuerza = parseInt(document.getElementById("Fuerza").value);
var FuerzaE = parseInt(document.getElementById("Fuerza+").value);
var Agilidad = parseInt(document.getElementById("Agilidad").value);
var AgilidadE = parseInt(document.getElementById("Agilidad+").value);
var Inteligencia = parseInt(document.getElementById("Inteligencia").value);
var InteligenciaE = parseInt(document.getElementById("Inteligencia+").value);
var Carisma = parseInt(document.getElementById("Carisma").value);
var CarismaE = parseInt(document.getElementById("Carisma+").value);

var Armas1 = parseInt(document.getElementById("Armas1").value);
var Bloquear = parseInt(document.getElementById("Bloquear").value);
var Intimidar = parseInt(document.getElementById("Intimidar").value);
var Levantar = parseInt(document.getElementById("Levantar").value);
var Herreria = parseInt(document.getElementById("Herreria").value);
var Armas2 = parseInt(document.getElementById("Armas2").value);
var Atletismo = parseInt(document.getElementById("Atletismo").value);
var Robar = parseInt(document.getElementById("Robar").value);
var Sigilo = parseInt(document.getElementById("Sigilo").value);
var Lanzar = parseInt(document.getElementById("Lanzar").value);
var Historia = parseInt(document.getElementById("Historia").value);
var Idiomas = parseInt(document.getElementById("Idiomas").value);
var Medicina = parseInt(document.getElementById("Medicina").value);
var Cerrajero = parseInt(document.getElementById("Cerrajero").value);
var Percibir = parseInt(document.getElementById("Percibir").value);
var Rastrear = parseInt(document.getElementById("Rastrear").value);
var Magia = parseInt(document.getElementById("Magia").value);
var Coraje = parseInt(document.getElementById("Coraje").value);
var Diplomacia = parseInt(document.getElementById("Diplomacia").value);
var Persuadir = parseInt(document.getElementById("Persuadir").value);
var Seduccion = parseInt(document.getElementById("Seduccion").value);
var Suerte = parseInt(document.getElementById("Suerte").value);

while (true){
critico = Math.floor(Math.random() * (7 - 1)) + 1;
if (critico == 6){criticoC++ ; criticoT = criticoT + critico;}
if (critico != 6){break;}
}
document.getElementById("CriticoC").value = criticoC;

if(document.getElementById("TirarS").value == "Iniciativa"){
for(var i = Agilidad+Mod1; i > 0; i--){
var dado = Math.floor(Math.random() * (7 - 1)) + 1;
document.getElementById("TiradaR").innerHTML += dado + ", ";
dadoT = dadoT + dado;
}
dadoT = dadoT + Mod2;
document.getElementById("CriticoC").value = 0;
}

if(document.getElementById("TirarS").value == "Ataque1"){
for(var i = Fuerza+Mod1; i > 0; i--){
var dado = Math.floor(Math.random() * (7 - 1)) + 1;
document.getElementById("TiradaR").innerHTML += dado + ", ";
dadoT = dadoT + dado;
}
dadoT = dadoT + Mod2 + FuerzaE + criticoT;
}

if(document.getElementById("TirarS").value == "Ataque2"){
for(var i = Agilidad+Mod1; i > 0; i--){
var dado = Math.floor(Math.random() * (7 - 1)) + 1;
document.getElementById("TiradaR").innerHTML += dado + ", ";
dadoT = dadoT + dado;
}
dadoT = dadoT + Mod2 + AgilidadE + criticoT;
}

if(document.getElementById("TirarS").value == "Ataque3"){
for(var i = Inteligencia+Mod1+Magia; i > 0; i--){
var dado = Math.floor(Math.random() * (7 - 1)) + 1;
document.getElementById("TiradaR").innerHTML += dado + ", ";
dadoT = dadoT + dado;
}
dadoT = dadoT + Mod2 + InteligenciaE + criticoT;
}

if(document.getElementById("TirarS").value == "Sanar"){
for(var i = Inteligencia+Mod1+Medicina; i > 0; i--){
var dado = Math.floor(Math.random() * (7 - 1)) + 1;
document.getElementById("TiradaR").innerHTML += dado + ", ";
dadoT = dadoT + dado;
}
dadoT = dadoT + Mod2 + InteligenciaE + criticoT;
}

if(document.getElementById("TirarS").value == "Intimidar"){
for(var i = Fuerza+Mod1+Intimidar; i > 0; i--){
var dado = Math.floor(Math.random() * (7 - 1)) + 1;
document.getElementById("TiradaR").innerHTML += dado + ", ";
dadoT = dadoT + dado;
}
dadoT = dadoT + Mod2 + FuerzaE + criticoT;
}

if(document.getElementById("TirarS").value == "Levantar"){
for(var i = Fuerza+Mod1+Levantar; i > 0; i--){
var dado = Math.floor(Math.random() * (7 - 1)) + 1;
document.getElementById("TiradaR").innerHTML += dado + ", ";
dadoT = dadoT + dado;
}
dadoT = dadoT + Mod2 + FuerzaE + criticoT;
}

if(document.getElementById("TirarS").value == "Herreria"){
for(var i = Fuerza+Mod1+Herreria; i > 0; i--){
var dado = Math.floor(Math.random() * (7 - 1)) + 1;
document.getElementById("TiradaR").innerHTML += dado + ", ";
dadoT = dadoT + dado;
}
dadoT = dadoT + Mod2 + FuerzaE + criticoT;
}

if(document.getElementById("TirarS").value == "Atletismo"){
for(var i = Agilidad+Mod1+Atletismo; i > 0; i--){
var dado = Math.floor(Math.random() * (7 - 1)) + 1;
document.getElementById("TiradaR").innerHTML += dado + ", ";
dadoT = dadoT + dado;
}
dadoT = dadoT + Mod2 + AgilidadE + criticoT;
}

if(document.getElementById("TirarS").value == "Robar"){
for(var i = Agilidad+Mod1+Robar; i > 0; i--){
var dado = Math.floor(Math.random() * (7 - 1)) + 1;
document.getElementById("TiradaR").innerHTML += dado + ", ";
dadoT = dadoT + dado;
}
dadoT = dadoT + Mod2 + AgilidadE + criticoT;
}

if(document.getElementById("TirarS").value == "Sigilo"){
for(var i = Agilidad+Mod1+Sigilo; i > 0; i--){
var dado = Math.floor(Math.random() * (7 - 1)) + 1;
document.getElementById("TiradaR").innerHTML += dado + ", ";
dadoT = dadoT + dado;
}
dadoT = dadoT + Mod2 + AgilidadE + criticoT;
}

if(document.getElementById("TirarS").value == "Lanzar"){
for(var i = Agilidad+Mod1+Lanzar; i > 0; i--){
var dado = Math.floor(Math.random() * (7 - 1)) + 1;
document.getElementById("TiradaR").innerHTML += dado + ", ";
dadoT = dadoT + dado;
}
dadoT = dadoT + Mod2 + AgilidadE + criticoT;
}

if(document.getElementById("TirarS").value == "Historia"){
for(var i = Inteligencia+Mod1+Historia; i > 0; i--){
var dado = Math.floor(Math.random() * (7 - 1)) + 1;
document.getElementById("TiradaR").innerHTML += dado + ", ";
dadoT = dadoT + dado;
}
dadoT = dadoT + Mod2 + InteligenciaE + criticoT;
}

if(document.getElementById("TirarS").value == "Idiomas"){
for(var i = Inteligencia+Mod1+Idiomas; i > 0; i--){
var dado = Math.floor(Math.random() * (7 - 1)) + 1;
document.getElementById("TiradaR").innerHTML += dado + ", ";
dadoT = dadoT + dado;
}
dadoT = dadoT + Mod2 + InteligenciaE + criticoT;
}

if(document.getElementById("TirarS").value == "Cerrajero"){
for(var i = Inteligencia+Mod1+Cerrajero; i > 0; i--){
var dado = Math.floor(Math.random() * (7 - 1)) + 1;
document.getElementById("TiradaR").innerHTML += dado + ", ";
dadoT = dadoT + dado;
}
dadoT = dadoT + Mod2 + InteligenciaE + criticoT;
}

if(document.getElementById("TirarS").value == "Percibir"){
for(var i = Inteligencia+Mod1+Percibir; i > 0; i--){
var dado = Math.floor(Math.random() * (7 - 1)) + 1;
document.getElementById("TiradaR").innerHTML += dado + ", ";
dadoT = dadoT + dado;
}
dadoT = dadoT + Mod2 + InteligenciaE + criticoT;
}

if(document.getElementById("TirarS").value == "Rastrear"){
for(var i = Inteligencia+Mod1+Rastrear; i > 0; i--){
var dado = Math.floor(Math.random() * (7 - 1)) + 1;
document.getElementById("TiradaR").innerHTML += dado + ", ";
dadoT = dadoT + dado;
}
dadoT = dadoT + Mod2 + InteligenciaE + criticoT;
}

if(document.getElementById("TirarS").value == "Coraje"){
for(var i = Carisma+Mod1+Coraje; i > 0; i--){
var dado = Math.floor(Math.random() * (7 - 1)) + 1;
document.getElementById("TiradaR").innerHTML += dado + ", ";
dadoT = dadoT + dado;
}
dadoT = dadoT + Mod2 + CarismaE + criticoT;
}

if(document.getElementById("TirarS").value == "Diplomacia"){
for(var i = Carisma+Mod1+Diplomacia; i > 0; i--){
var dado = Math.floor(Math.random() * (7 - 1)) + 1;
document.getElementById("TiradaR").innerHTML += dado + ", ";
dadoT = dadoT + dado;
}
dadoT = dadoT + Mod2 + CarismaE + criticoT;
}

if(document.getElementById("TirarS").value == "Persuadir"){
for(var i = Carisma+Mod1+Persuadir; i > 0; i--){
var dado = Math.floor(Math.random() * (7 - 1)) + 1;
document.getElementById("TiradaR").innerHTML += dado + ", ";
dadoT = dadoT + dado;
}
dadoT = dadoT + Mod2 + CarismaE + criticoT;
}

if(document.getElementById("TirarS").value == "Seduccion"){
for(var i = Carisma+Mod1+Seduccion; i > 0; i--){
var dado = Math.floor(Math.random() * (7 - 1)) + 1;
document.getElementById("TiradaR").innerHTML += dado + ", ";
dadoT = dadoT + dado;
}
dadoT = dadoT + Mod2 + CarismaE + criticoT;
}

if(document.getElementById("TirarS").value == "Suerte"){
for(var i = Carisma+Mod1+Suerte; i > 0; i--){
var dado = Math.floor(Math.random() * (7 - 1)) + 1;
document.getElementById("TiradaR").innerHTML += dado + ", ";
dadoT = dadoT + dado;
}
dadoT = dadoT + Mod2 + CarismaE + criticoT;
}

var texto = document.getElementById("TiradaR").innerHTML;
document.getElementById("TiradaR").innerHTML = texto.slice(0, -2);
document.getElementById("Tirada").value = dadoT;
}