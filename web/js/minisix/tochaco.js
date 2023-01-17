function NoNull(){
const numInputs = document.querySelectorAll('input[type=number]')

numInputs.forEach(function (input) {
  input.addEventListener('change', function (e) {
    if (e.target.value == '') {
      e.target.value = 0
    }
  })
})
}
function Guardar(){
var slot = document.getElementById("slot").value;
localStorage.setItem("Slot", document.getElementById("slot").value);
localStorage.setItem("Nombre"+slot, document.getElementById("Nombre").value);
localStorage.setItem("Raza"+slot, document.getElementById("Raza").value);
localStorage.setItem("Fuerza"+slot, document.getElementById("Fuerza").value);
localStorage.setItem("Fuerza+"+slot, document.getElementById("Fuerza+").value);
localStorage.setItem("Agilidad"+slot, document.getElementById("Agilidad").value);
localStorage.setItem("Agilidad+"+slot, document.getElementById("Agilidad+").value);
localStorage.setItem("Inteligencia"+slot, document.getElementById("Inteligencia").value);
localStorage.setItem("Inteligencia+"+slot, document.getElementById("Inteligencia+").value);
localStorage.setItem("Carisma"+slot, document.getElementById("Carisma").value);
localStorage.setItem("Carisma+"+slot, document.getElementById("Carisma+").value);

localStorage.setItem("Armas1"+slot, document.getElementById("Armas1").value);
localStorage.setItem("Bloquear"+slot, document.getElementById("Bloquear").value);
localStorage.setItem("Intimidar"+slot, document.getElementById("Intimidar").value);
localStorage.setItem("Levantar"+slot, document.getElementById("Levantar").value);
localStorage.setItem("Resistencia"+slot, document.getElementById("Resistencia").value);
localStorage.setItem("Herreria"+slot, document.getElementById("Herreria").value);

localStorage.setItem("Armas2"+slot, document.getElementById("Armas2").value);
localStorage.setItem("Atletismo"+slot, document.getElementById("Atletismo").value);
localStorage.setItem("Esquivar"+slot, document.getElementById("Esquivar").value);
localStorage.setItem("Robar"+slot, document.getElementById("Robar").value);
localStorage.setItem("Sigilo"+slot, document.getElementById("Sigilo").value);
localStorage.setItem("Lanzar"+slot, document.getElementById("Lanzar").value);

localStorage.setItem("Historia"+slot, document.getElementById("Historia").value);
localStorage.setItem("Idiomas"+slot, document.getElementById("Idiomas").value);
localStorage.setItem("Medicina"+slot, document.getElementById("Medicina").value);
localStorage.setItem("Cerrajero"+slot, document.getElementById("Cerrajero").value);
localStorage.setItem("Percibir"+slot, document.getElementById("Percibir").value);
localStorage.setItem("Rastrear"+slot, document.getElementById("Rastrear").value);
localStorage.setItem("Magia"+slot, document.getElementById("Magia").value);

localStorage.setItem("Coraje"+slot, document.getElementById("Coraje").value);
localStorage.setItem("Diplomacia"+slot, document.getElementById("Diplomacia").value);
localStorage.setItem("Persuadir"+slot, document.getElementById("Persuadir").value);
localStorage.setItem("Seduccion"+slot, document.getElementById("Seduccion").value);
localStorage.setItem("Suerte"+slot, document.getElementById("Suerte").value);

localStorage.setItem("Bloqueo"+slot, document.getElementById("Bloqueo").value);
localStorage.setItem("Esquiva"+slot, document.getElementById("Esquiva").value);
localStorage.setItem("Redu"+slot, document.getElementById("Redu").value);

localStorage.setItem("Habilidades"+slot, document.getElementById("Habilidades").value);
localStorage.setItem("Inventario"+slot, document.getElementById("Inventario").value);
localStorage.setItem("Vida"+slot, document.getElementById("Vida").value);
localStorage.setItem("Dinero"+slot, document.getElementById("Dinero").value);
}
function Cargar(){
if (localStorage.getItem("Slot") == null){NoNull(); exit;}
localStorage.setItem("Slot", document.getElementById("slot").value);
document.getElementById("slot").value = localStorage.getItem("Slot");
var slot = document.getElementById("slot").value;
document.getElementById("Nombre").value = localStorage.getItem("Nombre"+slot);
document.getElementById("Raza").value = localStorage.getItem("Raza"+slot);
document.getElementById("Fuerza").value = localStorage.getItem("Fuerza"+slot);
document.getElementById("Fuerza+").value = localStorage.getItem("Fuerza+"+slot);
document.getElementById("Agilidad").value = localStorage.getItem("Agilidad"+slot);
document.getElementById("Agilidad+").value = localStorage.getItem("Agilidad+"+slot);
document.getElementById("Inteligencia").value = localStorage.getItem("Inteligencia"+slot);
document.getElementById("Inteligencia+").value = localStorage.getItem("Inteligencia+"+slot);
document.getElementById("Carisma").value = localStorage.getItem("Carisma"+slot);
document.getElementById("Carisma+").value = localStorage.getItem("Carisma+"+slot);

document.getElementById("Armas1").value = localStorage.getItem("Armas1"+slot);
document.getElementById("Bloquear").value = localStorage.getItem("Bloquear"+slot);
document.getElementById("Intimidar").value = localStorage.getItem("Intimidar"+slot);
document.getElementById("Levantar").value = localStorage.getItem("Levantar"+slot);
document.getElementById("Resistencia").value = localStorage.getItem("Resistencia"+slot);
document.getElementById("Herreria").value = localStorage.getItem("Herreria"+slot);

document.getElementById("Armas2").value = localStorage.getItem("Armas2"+slot);
document.getElementById("Atletismo").value = localStorage.getItem("Atletismo"+slot);
document.getElementById("Esquivar").value = localStorage.getItem("Esquivar"+slot);
document.getElementById("Robar").value = localStorage.getItem("Robar"+slot);
document.getElementById("Sigilo").value = localStorage.getItem("Sigilo"+slot);
document.getElementById("Lanzar").value = localStorage.getItem("Lanzar"+slot);

document.getElementById("Historia").value = localStorage.getItem("Historia"+slot);
document.getElementById("Idiomas").value = localStorage.getItem("Idiomas"+slot);
document.getElementById("Medicina").value = localStorage.getItem("Medicina"+slot);
document.getElementById("Cerrajero").value = localStorage.getItem("Cerrajero"+slot);
document.getElementById("Percibir").value = localStorage.getItem("Percibir"+slot);
document.getElementById("Rastrear").value = localStorage.getItem("Rastrear"+slot);
document.getElementById("Magia").value = localStorage.getItem("Magia"+slot);

document.getElementById("Coraje").value = localStorage.getItem("Coraje"+slot);
document.getElementById("Diplomacia").value = localStorage.getItem("Diplomacia"+slot);
document.getElementById("Persuadir").value = localStorage.getItem("Persuadir"+slot);
document.getElementById("Seduccion").value = localStorage.getItem("Seduccion"+slot);
document.getElementById("Suerte").value = localStorage.getItem("Suerte"+slot);

document.getElementById("Bloqueo").value = localStorage.getItem("Bloqueo"+slot);
document.getElementById("Esquiva").value = localStorage.getItem("Esquiva"+slot);
document.getElementById("Redu").value = localStorage.getItem("Redu"+slot);

document.getElementById("Habilidades").value = localStorage.getItem("Habilidades"+slot);
document.getElementById("Inventario").value = localStorage.getItem("Inventario"+slot);
document.getElementById("Vida").value = localStorage.getItem("Vida"+slot);
document.getElementById("Dinero").value = localStorage.getItem("Dinero"+slot);
if (document.getElementById("Nombre").value != ""){Fijar();}
Calcular();
NoNull();
}
function Calcular(){
document.getElementById("Bloqueo").value = "";
var BaseF1 = parseInt(document.getElementById("Fuerza").value);
var BaseF2 = parseInt(document.getElementById("Bloquear").value);
var BaseF = BaseF1+BaseF2;
var ResultadoF = BaseF*3;
document.getElementById("Bloqueo").value = ResultadoF;

document.getElementById("Esquiva").value = "";
var BaseE1 = parseInt(document.getElementById("Agilidad").value);
var BaseE2 = parseInt(document.getElementById("Esquivar").value);
var BaseE = BaseE1+BaseE2;
var ResultadoE = BaseE*3;
document.getElementById("Esquiva").value = ResultadoE;

document.getElementById("Redu").value = "";
var BaseR1 = parseInt(document.getElementById("Fuerza").value);
var BaseR2 = parseInt(document.getElementById("Resistencia").value);
var BaseR = BaseR1+BaseR2;
var ResultadoR = BaseR*3;
document.getElementById("Redu").value = ResultadoR;
}
function Fijar(){
if (document.getElementsByTagName("input")[0].disabled == true){
var todos = document.getElementsByTagName("input");
for (var i = 0; i < todos.length; i++) {
    todos[i].removeAttribute('disabled');
}
document.getElementById("Nombre").disabled = false;
document.getElementById("Raza").disabled = false;
}else{
var todos = document.getElementsByTagName("input");
for (var i = 0; i < todos.length; i++) {
    todos[i].setAttribute('disabled', 'disabled');
}
document.getElementById("Nombre").disabled = true;
document.getElementById("Raza").disabled = true;
}
document.getElementById("Bloqueo").setAttribute('disabled', 'disabled');
document.getElementById("Esquiva").setAttribute('disabled', 'disabled');
document.getElementById("Redu").setAttribute('disabled', 'disabled');
document.getElementById("Vida").removeAttribute('disabled');
document.getElementById("Dinero").removeAttribute('disabled');
document.getElementById("Mod1").removeAttribute('disabled');
document.getElementById("Mod2").removeAttribute('disabled');
document.getElementById("CriticoC").setAttribute('disabled', 'disabled');
document.getElementById("Tirada").setAttribute('disabled', 'disabled');
}
function Reset(){
document.getElementById("Fuerza").value = "1";
document.getElementById("Fuerza+").value = "0";
document.getElementById("Agilidad").value = "1";
document.getElementById("Agilidad+").value = "0";
document.getElementById("Inteligencia").value = "1";
document.getElementById("Inteligencia+").value = "0";
document.getElementById("Carisma").value = "1";
document.getElementById("Carisma+").value = "0";

document.getElementById("Armas1").value = "0";
document.getElementById("Bloquear").value = "0";
document.getElementById("Intimidar").value = "0";
document.getElementById("Levantar").value = "0";
document.getElementById("Resistencia").value = "0";
document.getElementById("Herreria").value = "0";
document.getElementById("Armas2").value = "0";
document.getElementById("Atletismo").value = "0";
document.getElementById("Esquivar").value = "0";
document.getElementById("Robar").value = "0";
document.getElementById("Sigilo").value = "0";
document.getElementById("Lanzar").value = "0";
document.getElementById("Historia").value = "0";
document.getElementById("Idiomas").value = "0";
document.getElementById("Medicina").value = "0";
document.getElementById("Cerrajero").value = "0";
document.getElementById("Percibir").value = "0";
document.getElementById("Rastrear").value = "0";
document.getElementById("Magia").value = "0";
document.getElementById("Coraje").value = "0";
document.getElementById("Diplomacia").value = "0";
document.getElementById("Persuadir").value = "0";
document.getElementById("Seduccion").value = "0";
document.getElementById("Suerte").value = "0";
}