class Sprite {
  constructor({
    position = { x: 0, y: 0 },
    imageSrc,
    frames = { max: 1, disparo: 0 },
    offset = { x: 0, y: 0 },
  }) {
    this.position = position;
    this.image = new Image();
    this.image.src = imageSrc;
    this.frames = {
      max: frames.max,
      current: 0,
      elapsed: 0,
      hold: 5,
      disparo: frames.disparo,
    };
    this.offset = offset;
  }
  draw() {
    const corteWidth = this.image.width / this.frames.max;
    const corte = {
      position: { x: corteWidth * this.frames.current, y: 0 },
      width: corteWidth,
      height: this.image.height,
    };
    c.drawImage(
      this.image,
      corte.position.x,
      corte.position.y,
      corte.width,
      corte.width,
      this.position.x - this.offset.x,
      this.position.y - this.offset.y,
      corte.width,
      corte.height
    );
  }
  update() {
    // anmiación
    this.frames.elapsed++;
    if (this.frames.elapsed % this.frames.hold === 0) {
      this.frames.current++;
      if (this.frames.current >= this.frames.max) {
        this.frames.current = 0;
      }
    }
  }
}
