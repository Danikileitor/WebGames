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
    this.radio = 50;
    this.vida = 100;
    this.velocidad = { x: 0, y: 0 };
    this.rapidez = 50;
  }
  draw() {
    c.fillStyle = "red";
    //c.fillRect(this.position.x, this.position.y, this.width, this.height);
    c.beginPath();
    c.arc(this.center.x, this.center.y, this.radio, 0, Math.PI * 2);
    c.fill();

    //barra de vida
    c.fillStyle = "red";
    c.fillRect(this.position.x, this.position.y - 15, this.width, 10);

    c.fillStyle = "lime";
    c.fillRect(
      this.position.x,
      this.position.y - 15,
      this.width * (this.vida / 100),
      10
    );
  }
  update() {
    this.draw();

    const camino = camino1[this.waypoint];
    const xDistance = camino.x - this.center.x;
    const yDistance = camino.y - this.center.y;
    const angle = Math.atan2(yDistance, xDistance);
    this.velocidad.x = Math.cos(angle) * this.rapidez;
    this.velocidad.y = Math.sin(angle) * this.rapidez;
    this.position.x += this.velocidad.x;
    this.position.y += this.velocidad.y;

    this.center = {
      x: this.position.x + this.width / 2,
      y: this.position.y + this.height / 2,
    };

    if (
      Math.abs(Math.round(this.center.x) - Math.round(camino.x)) <
        Math.abs(this.velocidad.x) &&
      Math.abs(Math.round(this.center.y) - Math.round(camino.y)) <
        Math.abs(this.velocidad.y) &&
      camino1.length - 1
    ) {
      this.waypoint++;
    }
  }
}

class Proyectil {
  constructor({ position = { x: 0, y: 0 }, enemy }) {
    this.position = position;
    this.velocity = { x: 0, y: 0 };
    this.radio = 10;
    this.center = {
      x: this.position.x + this.radio,
      y: this.position.y + this.radio,
    };
    this.enemy = enemy;
    this.rapidez = 5;
  }
  draw() {
    c.beginPath();
    c.arc(this.position.x, this.position.y, this.radio, 0, Math.PI * 2);
    c.fillStyle = "orange";
    c.fill();
  }
  update() {
    this.draw();

    const angle = Math.atan2(
      this.enemy.center.y - this.center.y,
      this.enemy.center.x - this.center.x
    );
    this.velocity.x = Math.cos(angle) * this.rapidez;
    this.velocity.y = Math.sin(angle) * this.rapidez;
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
  }
}

class Torre {
  constructor({ position = { x: 0, y: 0 } }) {
    this.position = position;
    this.width = 32 * 2;
    this.height = 32;
    this.center = {
      x: this.position.x + this.width / 2,
      y: this.position.y + this.height / 2,
    };
    this.rango = 250;
    this.recarga = 100;
    this.proyectiles = [];
    this.target;
    this.frames = 0;
  }
  draw() {
    c.fillStyle = "blue";
    c.fillRect(this.position.x, this.position.y, this.width, this.height);

    c.beginPath();
    c.arc(this.center.x, this.center.y, this.rango, 0, Math.PI * 2);
    c.fillStyle = "rgba(0,0,255,0.15)";
    c.fill();
  }
  update() {
    this.draw();
    if (this.frames % this.recarga === 0 && this.target) {
      this.proyectiles.push(
        new Proyectil({
          position: { x: this.center.x, y: this.center.y },
          enemy: this.target,
        })
      );
    }
    this.frames++;
  }
}
