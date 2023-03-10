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
  if (oleada % 3 == 0) {
    spawnCantidad = 3;
  }
  document.getElementById("oleada").innerHTML = oleada;
  for (let i = 1; i <= spawnCantidad; i++) {
    const xOffset = i * 150;
    enemies.push(
      new Enemy({
        position: { x: camino1[1].x - xOffset, y: camino1[1].y },
        imagesrc: "assets/RNGTD/enemigos/orc.png",
        imageframes: 7,
      })
    );
  }
}

const torres = [];
let activeTile = undefined;
let enemyCantidad = 3;
let vidas = 10;
let dinero = 100;
let oleada = 0;
const explosiones = [];
mostrarVidas(vidas);
spawnEnemies(enemyCantidad);

function mostrarVidas(corazones) {
  document.getElementById("vidas").style.minWidth =
    document.getElementById("dinero").style.width;
  document.getElementById("vidas").innerHTML = "";
  for (let i = 0; i < corazones; i++) {
    document.getElementById("vidas").innerHTML +=
      "<img src='assets/Generic/vida.gif'></img>";
  }
}

function muerte(aId) {
  window.cancelAnimationFrame(aId);
  document.getElementById("F").style.display = "block";
  for (let i = 0; i < 10; i++) {
    document.getElementById("vidas").innerHTML +=
      "<img src='assets/Generic/loro.gif'></img>";
  }
}

function actualizarDinero(dineros) {
  document.getElementById("monedas").innerHTML = dineros;
}

function animate() {
  const animationId = requestAnimationFrame(animate);
  c.drawImage(mapa, 0, 0, canvas.width, canvas.height);

  for (let i = enemies.length - 1; i >= 0; i--) {
    const enemy = enemies[i];
    if (oleada >= 3) {
      enemies[i].rapidez = 1 + Math.trunc(oleada / 3);
    }
    enemy.update();

    if (enemy.position.x > canvas.width) {
      vidas--;
      enemies.splice(i, 1);
      mostrarVidas(vidas);
      if (vidas === 0) muerte(animationId);
    }
  }

  for (let i = explosiones.length - 1; i >= 0; i--) {
    const explosion = explosiones[i];
    explosion.draw();
    explosion.update();
    if (explosion.frames.current >= explosion.frames.max - 1) {
      explosiones.splice(i, 1);
    }
  }

  //evento cuando hay 0 enemigos
  if (enemies.length === 0) {
    oleada++;
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
            dinero += 25;
            actualizarDinero(dinero);
          }
        }

        explosiones.push(
          new Sprite({
            position: { x: proyectil.position.x, y: proyectil.position.y },
            imageSrc: "assets/RNGTD/proyectiles/explosiones/explosion.png",
            frames: { max: 4 },
          })
        );
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
  if (activeTile && !activeTile.isOcupado && dinero - 50 >= 0) {
    dinero -= 50;
    actualizarDinero(dinero);
    torres.push(
      new Torre({
        position: { x: activeTile.position.x, y: activeTile.position.y },
        imagesrc: "assets/RNGTD/torres/tower.png",
        imageframes: 19,
        offsetY: 112,
        disparoframe: 6,
        proyectilimage: "assets/RNGTD/proyectiles/projectile.png",
      })
    );
    activeTile.isOcupado = true;
    torres.sort((a, b) => {
      return a.position.y - b.position.y;
    });
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
