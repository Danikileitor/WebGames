const canvas = document.getElementById("RNGTD");
const c = canvas.getContext("2d");

canvas.width = 1280;
canvas.height = 768;

c.fillStyle = "white";
c.fillRect(0, 0, canvas.width, canvas.height);

const mapa1 = new Image();
mapa1.onload = () => {
  animate();
};
mapa1.src = "assets/RNGTD/maps/mapa1.png";

class Enemy {
  constructor({
    position = {
      x: 0,
      y: 0,
    },
  }) {
    this.position = position;
    this.width = 100;
    this.height = 100;
  }
  draw() {
    c.fillStyle = "red";
    c.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
  update() {
    this.draw();
    this.position.x++;

    const camino = camino1[0];
    const yDistance = camino.y - this.position.y;
    const xDistance = camino.x - this.position.x;
    const angle = Math.atan2(yDistance, xDistance);
  }
}

const enemy = new Enemy({ position: { x: 200, y: 400 } });

function animate() {
  c.drawImage(mapa1, 0, 0, canvas.width, canvas.height);
  enemy.update();

  requestAnimationFrame(animate);
}
