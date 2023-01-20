class Enemy extends Sprite {
  constructor({ position = { x: 0, y: 0 }, imagesrc, imageframes = 1 }) {
    super({ position, imageSrc: imagesrc, frames: { max: imageframes } });
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
    this.rapidez = 1;
  }
  draw() {
    super.draw();

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
