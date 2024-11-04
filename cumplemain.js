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
    DiasRestantesCumpleDiv.innerHTML = `Faltan <span class="dorado">${diasRestantes}</span> días para el cumpleaños de Matías.`;
}

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
    DiasRestantesNavidadDiv.innerHTML = `Faltan <span class="dorado">${diasRestantes}</span> días para Navidad.`;
}

// Llamar a las funciones cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    DiasRestantesCumple();
    DiasRestantesNavidad();
});