class Proyectil extends Sprite {
  constructor({ position = { x: 0, y: 0 }, enemy, imagesrc }) {
    super({ position, imageSrc: imagesrc });
    this.velocity = { x: 0, y: 0 };
    this.radio = 10;
    this.center = {
      x: this.position.x + this.radio,
      y: this.position.y + this.radio,
    };
    this.enemy = enemy;
    this.rapidez = 5;
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
