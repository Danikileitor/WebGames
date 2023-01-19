class Torre {
  constructor({ position = { x: 0, y: 0 }, proyectilimage }) {
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
    this.proyectilimage = proyectilimage;
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
          imagesrc: this.proyectilimage,
        })
      );
    }
    this.frames++;
  }
}
