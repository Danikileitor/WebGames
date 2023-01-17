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

/*
[
                        {
                         "x":0,
                         "y":0
                        }, 
                        {
                         "x":-59.3333333333333,
                         "y":280
                        }, 
                        {
                         "x":166,
                         "y":279.333333333333
                        }, 
                        {
                         "x":165.333333333333,
                         "y":86.6666666666667
                        }, 
                        {
                         "x":422,
                         "y":87.3333333333333
                        }, 
                        {
                         "x":422,
                         "y":248
                        }, 
                        {
                         "x":694,
                         "y":248
                        }]
*/