class Sitio {
  constructor({ position = { x: 0, y: 0 } }) {
    this.position = position;
    this.size = 32;
    this.color = "rgba(0,0,255,0.05)";
    this.ocupado = false;
  }
  draw() {
    c.fillStyle = this.color;
    c.fillRect(this.position.x, this.position.y, this.size, this.size);
  }
  update(mouse) {
    this.draw();

    if (
      mouse.x > this.position.x &&
      mouse.x < this.position.x + this.size &&
      mouse.y > this.position.y &&
      mouse.y < this.position.y + this.size
    ) {
      this.color = "rgba(0,0,0,0.75)";
    } else {
      this.color = "rgba(0,0,255,0.05)";
    }
  }
}

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

class Torre {
  constructor({ position = { x: 0, y: 0 } }) {
    this.position = position;
    this.width = 32 * 2;
    this.height = 32;
  }
  draw() {
    c.fillStyle = "blue";
    c.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
}
