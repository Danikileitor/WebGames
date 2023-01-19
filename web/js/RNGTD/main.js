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

function spawnEnemies(spawnCantidad) {
  oleada++;
  for (let i = 1; i <= spawnCantidad; i++) {
    const xOffset = i * 150;
    enemies.push(
      new Enemy({ position: { x: camino1[1].x - xOffset, y: camino1[1].y } })
    );
  }
}

const torres = [];
let activeTile = undefined;
let enemyCantidad = 3;
let vidas = 10;
let oleada = 0;
mostrarVidas(vidas);
spawnEnemies(enemyCantidad);

function mostrarVidas(corazones) {
  document.getElementById("vidas").innerHTML = "";
  for (let i = 0; i < corazones; i++) {
    document.getElementById("vidas").innerHTML +=
      "<img src='assets/RNGTD/vida.gif'></img>";
  }
}

function animate() {
  const animationId = requestAnimationFrame(animate);
  c.drawImage(mapa, 0, 0, canvas.width, canvas.height);

  for (let i = enemies.length - 1; i >= 0; i--) {
    const enemy = enemies[i];
    enemy.update();

    if (enemy.position.x > canvas.width) {
      vidas--;
      enemies.splice(i, 1);
      mostrarVidas(vidas);
      if (vidas === 0) {
        window.cancelAnimationFrame(animationId);
        document.getElementById("F").style.display = "block";
      }
    }
  }

  //evento cuando hay 0 enemigos
  if (enemies.length === 0) {
    enemyCantidad += 2;
    spawnEnemies(enemyCantidad);
  }

  sitios.forEach((tile) => {
    tile.update(mouse);
  });

  torres.forEach((torre) => {
    torre.update();
    torre.target = null;
    const validEnemies = enemies.filter((enemy) => {
      const xDiferencia = enemy.center.x - torre.center.x;
      const yDiferencia = enemy.center.y - torre.center.y;
      const distancia = Math.hypot(xDiferencia, yDiferencia);
      return distancia < enemy.radio + torre.rango;
    });
    torre.target = validEnemies[0];

    for (let i = torre.proyectiles.length - 1; i >= 0; i--) {
      const proyectil = torre.proyectiles[i];

      proyectil.update();

      const xDiferencia = proyectil.enemy.center.x - proyectil.position.x;
      const yDiferencia = proyectil.enemy.center.y - proyectil.position.y;
      const distancia = Math.hypot(xDiferencia, yDiferencia);

      //evento cuando un proyectil alcanza a un enemigo
      if (distancia < proyectil.enemy.radio + proyectil.radio) {
        proyectil.enemy.vida -= 20;
        if (proyectil.enemy.vida <= 0) {
          const enemyIndex = enemies.findIndex((enemy) => {
            return proyectil.enemy === enemy;
          });
          if (enemyIndex > -1) {
            enemies.splice(enemyIndex, 1);
          }
        }

        torre.proyectiles.splice(i, 1);
      }
    }
  });
}

const mouse = {
  x: undefined,
  y: undefined,
};

canvas.addEventListener("click", (event) => {
  if (activeTile && !activeTile.isOcupado) {
    torres.push(
      new Torre({
        position: { x: activeTile.position.x, y: activeTile.position.y },
      })
    );
    activeTile.isOcupado = true;
  }
});

window.addEventListener("mousemove", (event) => {
  mouse.x =
    event.clientX -
    document.getElementById("RNGTD").getBoundingClientRect().left;
  mouse.y =
    event.clientY -
    document.getElementById("RNGTD").getBoundingClientRect().top;

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
