function DiasRestantesCumple() {
  // 1. Obtener la fecha actual
  let fechaActual = new Date();

  // 2. Obtener la fecha de tu cumpleaños (17 de noviembre)
  let fechaCumple = new Date(fechaActual.getFullYear(), 10, 17);

  // Si el cumpleaños ya pasó este año, establecer el próximo año
  if (fechaActual > fechaCumple) {
    fechaCumple.setFullYear(fechaActual.getFullYear() + 1);
  }

  // 3. Calcular la diferencia en días
  let diferenciaMilisegundos = fechaCumple.getTime() - fechaActual.getTime();
  let diasRestantes = Math.ceil(diferenciaMilisegundos / (1000 * 60 * 60 * 24));

  // 4. Mostrar el resultado
  let DiasRestantesCumpleDiv = document.getElementById("DiasRestantesCumple");
  DiasRestantesCumpleDiv.innerHTML = `Faltan ${diasRestantes} días para el cumpleaños de Matías.`;
}

document.addEventListener('DOMContentLoaded', function() {
    DiasRestantesCumple();
  });

  function DiasRestantesNavidad() {
    // 1. Obtener la fecha actual
    let fechaActual = new Date();
  
    // 2. Obtener la fecha de Navidad (25 de diciembre)
    let fechaNavidad = new Date(fechaActual.getFullYear(), 11, 25);
  
    // Si Navidad ya pasó este año, establecer la próxima Navidad
    if (fechaActual > fechaNavidad) {
      fechaNavidad.setFullYear(fechaActual.getFullYear() + 1);
    }
  
    // 3. Calcular la diferencia en días
    let diferenciaMilisegundos = fechaNavidad.getTime() - fechaActual.getTime();
    let diasRestantes = Math.ceil(diferenciaMilisegundos / (1000 * 60 * 60 * 24));
  
    // 4. Mostrar el resultado
    let DiasRestantesNavidadDiv = document.getElementById("DiasRestantesNavidad");
    DiasRestantesNavidadDiv.innerHTML = `Faltan ${diasRestantes} días para Navidad.`;
  }
  
  // Llamar a la función cuando el DOM esté listo
  document.addEventListener('DOMContentLoaded', function() {
    DiasRestantesNavidad();
  });

 document.addEventListener("DOMContentLoaded", function() {
    // Cargar la animación JSON en el div con id "animacionNavidad"
    var animation = lottie.loadAnimation({
        container: document.getElementById('animacionNavidad'), // Contenedor para la animación
        renderer: 'svg', // Usa SVG para una mejor calidad
        loop: true, // Para que se repita
        autoplay: true, // Iniciar automáticamente
        path: "animacionNavidad.json" // Ruta a tu archivo JSON de animación
    });

    // Ajustar la velocidad de la animación
    animation.setSpeed(0.5); // Cambia el número para ajustar la velocidad (0.5 es la mitad de la velocidad normal)
});

