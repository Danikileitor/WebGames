class Torre extends Sprite {
  constructor({
    position = { x: 0, y: 0 },
    imagesrc,
    imageframes = 1,
    offsetY = 0,
    disparoframe,
    proyectilimage,
  }) {
    super({
      position,
      imageSrc: imagesrc,
      frames: { max: imageframes, disparo: disparoframe },
      offset: { x: 0, y: offsetY },
    });
    this.width = 32 * 2;
    this.height = 32;
    this.center = {
      x: this.position.x + this.width,
      y: this.position.y + this.height / 8,
    };
    this.rango = 250;
    this.recarga = 100;
    this.proyectiles = [];
    this.proyectilimage = proyectilimage;
    this.target;
  }
  draw() {
    super.draw();

    c.beginPath();
    c.arc(this.center.x, this.center.y, this.rango, 0, Math.PI * 2);
    c.fillStyle = "rgba(0,0,255,0.05)";
    c.fill();
  }
  update() {
    this.draw();
    if (this.target || (!this.target && this.frames.current !== 0)) {
      super.update();
    }
    if (
      this.target &&
      this.frames.current === this.frames.disparo &&
      this.frames.elapsed % this.frames.hold === 0
    ) {
      this.disparar();
    }
  }
  disparar() {
    this.proyectiles.push(
      new Proyectil({
        position: { x: this.center.x - 20, y: this.center.y - 114 },
        enemy: this.target,
        imagesrc: this.proyectilimage,
      })
    );
  }
}
