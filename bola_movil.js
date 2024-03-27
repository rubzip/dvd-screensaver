// Obtener el canvas y su contexto
const canvas = document.getElementById('lienzo');
const ctx = canvas.getContext('2d');

// Definir las propiedades de la bola
const bola = {
  x: canvas.width / 2,   // posición inicial en el centro horizontal
  y: canvas.height / 2,  // posición inicial en el centro vertical
  radio: 20,             // radio de la bola
  velocidadX: 2,         // velocidad horizontal
  velocidadY: 1          // velocidad vertical
};

// Función para dibujar la bola en su posición actual
function dibujarBola() {
  ctx.beginPath();
  ctx.arc(bola.x, bola.y, bola.radio, 0, Math.PI * 2);
  ctx.fillStyle = 'red';
  ctx.fill();
  ctx.closePath();
}

// Función para actualizar la posición de la bola
function actualizarPosicion() {
  bola.x += bola.velocidadX;
  bola.y += bola.velocidadY;

  // Rebotar en los bordes del canvas
  if (bola.x + bola.radio > canvas.width || bola.x - bola.radio < 0) {
    bola.velocidadX *= -1;
  }
  if (bola.y + bola.radio > canvas.height || bola.y - bola.radio < 0) {
    bola.velocidadY *= -1;
  }
}

// Función principal para animar la bola
function animar() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpiar el canvas
  dibujarBola(); // Dibujar la bola en su nueva posición
  actualizarPosicion(); // Actualizar la posición de la bola
  requestAnimationFrame(animar); // Repetir la animación en el siguiente cuadro
}

// Iniciar la animación
animar();
