class Proyectil {
  constructor({ position = { x: 0, y: 0 }, enemy, imagesrc }) {
    this.position = position;
    this.velocity = { x: 0, y: 0 };
    this.radio = 10;
    this.center = {
      x: this.position.x + this.radio,
      y: this.position.y + this.radio,
    };
    this.image = new Image();
    this.image.src = imagesrc;
    this.enemy = enemy;
    this.rapidez = 5;
  }
  draw() {
    c.context.drawImage(this.image, this.position.x, this.position.y);

    /*
    c.beginPath();
    c.arc(this.position.x, this.position.y, this.radio, 0, Math.PI * 2);
    c.fillStyle = "orange";
    c.fill();
    */
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
