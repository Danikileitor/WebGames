const canvas = document.getElementById("RNGTD");
const c = canvas.getContext("2d");

canvas.width = 1280;
canvas.height = 768;

c.fillStyle = "white";
c.fillRect(0, 0, canvas.width, canvas.height);

const sitios2D = [];

for (let i = 0; i < sitios1.length; i += 40) {
  sitios2D.push(sitios1.slice(i, i + 40));
}

const sitios = [];

sitios2D.forEach((row, y) => {
  row.forEach((symbol, x) => {
    if (symbol === 37) {
      sitios.push(
        new Sitio({
          position: {
            x: x * 32,
            y: y * 32,
          },
        })
      );
    }
  });
});

const mapa = new Image();
mapa.onload = () => {
  animate();
};
mapa.src = "assets/RNGTD/maps/mapa1.png";

const enemies = [];
for (let i = 1; i < 10; i++) {
  const xOffset = i * 150;
  enemies.push(
    new Enemy({ position: { x: camino1[1].x - xOffset, y: camino1[1].y } })
  );
}

const torres = [];
let activeTile = undefined;

function animate() {
  c.drawImage(mapa, 0, 0, canvas.width, canvas.height);
  enemies.forEach((enemy) => {
    enemy.update();
  });

  sitios.forEach((tile) => {
    tile.update(mouse);
  });

  torres.forEach((torre) => {
    torre.draw();
  });

  requestAnimationFrame(animate);
}

const mouse = {
  x: undefined,
  y: undefined,
};

canvas.addEventListener("click", (event) => {
  if (activeTile) {
    torres.push(new Torre({ position: { x: activeTile.position.x, y: activeTile.position.y } }));
  }
});

window.addEventListener("mousemove", (event) => {
  mouse.x = event.clientX;
  mouse.y = event.clientY;

  for (let i = 0; i < sitios.length; i++) {
    const tile = sitios[i];
    if (
      mouse.x > tile.position.x &&
      mouse.x < tile.position.x + tile.size &&
      mouse.y > tile.position.y &&
      mouse.y < tile.position.y + tile.size
    ) {
      activeTile = tile;
      break;
    } else {
      activeTile = null;
    }
  }
});
