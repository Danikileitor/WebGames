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
    this.waypoint = 1;
    this.center = {
      x: this.position.x + this.width / 2,
      y: this.position.y + this.height / 2,
    };
  }
  draw() {
    c.fillStyle = "red";
    c.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
  update() {
    this.draw();

    const camino = camino1[this.waypoint];
    const xDistance = camino.x - this.center.x;
    const yDistance = camino.y - this.center.y;
    const angle = Math.atan2(yDistance, xDistance);
    this.position.x += Math.cos(angle);
    this.position.y += Math.sin(angle);
    this.center = {
      x: this.position.x + this.width / 2,
      y: this.position.y + this.height / 2,
    };

    if (
      Math.round(this.center.x) === Math.round(camino.x) &&
      Math.round(this.center.y) === Math.round(camino.y) &&
      camino1.length - 1
    ) {
      this.waypoint++;
    }
  }
}

const enemies = [];
for (let i = 1; i < 10; i++) {
  const xOffset = i * 150;
  enemies.push(
    new Enemy({ position: { x: camino1[1].x - xOffset, y: camino1[1].y } })
  );
}

function animate() {
  c.drawImage(mapa1, 0, 0, canvas.width, canvas.height);
  enemies.forEach((enemy) => {
    enemy.update();
  });

  requestAnimationFrame(animate);
}
