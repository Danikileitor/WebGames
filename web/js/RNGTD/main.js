const canvas = document.getElementById("RNGTD");
const c = canvas.getContext("2d");

canvas.width = 1280;
canvas.height = 768;

c.fillStyle = "white";
c.fillRect(0, 0, canvas.width, canvas.height);

const mapa1 = new Image();
mapa1.onload = () => {
  c.drawImage(mapa1, 0, 0, canvas.width, canvas.height);
};
mapa1.src = "assets/RNGTD/maps/mapa1.png";
