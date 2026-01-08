// Caso 1: Calcular promedio de calificaciones por cada estudiante mostrando nombre y promedio, filtrar promedios >= 8 y ordenar de mayor a menor
const estudiantes = [
    { nombre: 'Ana', calificaciones: [8, 9, 7] },
    { nombre: 'Bruno', calificaciones: [9, 9, 8] },
    { nombre: 'Carlos', calificaciones: [6, 7, 8] }
];

const promediosAltos = estudiantes
    .map(estudiante => {
        const promedio = estudiante.calificaciones.reduce((a, b) => a + b, 0) / estudiante.calificaciones.length;
        return { nombre: estudiante.nombre, promedio };
    })
    .filter(estudiante => estudiante.promedio >= 8)
    .sort((a, b) => b.promedio - a.promedio)
    .filter (n => n.nombre.charAt(0) == 'A');    //se puede quitar esta linea si no se quiere filtrar por nombre

console.log(promediosAltos);