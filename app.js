const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const tareas = [];
function contarTareas(lista) {
  return lista.length;
}

function mostrarMenu() {
  console.log("\n1. Agregar tarea\n2. Listar tareas\n3. Salir");
  rl.question("Elige una opción: ", (respuesta) => {
    const opcion = parseInt(respuesta);
    switch (opcion) {
      case 1:
        rl.question("Escribe la tarea: ", (tarea) => {
          if (tarea.trim() !== "") {
            tareas.push(tarea);
          } else {
            console.log("La tarea no puede estar vacía.");
          }
          mostrarMenu();
        });
        break;
      case 2:
        console.log("Tareas:", tareas);
        console.log("Tareas:", +contarTares(tareas));
        mostrarMenu(); // vuelve al menú
        break;
      case 3:
        console.log("¡Chau!");
        rl.close();
        break;
      default:
        console.log("Por favor ingresa un número válido.");
        mostrarMenu(); // vuelve al menú
        break;
    }
  });
}

mostrarMenu();
