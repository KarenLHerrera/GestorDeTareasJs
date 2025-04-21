let tareas = [];
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function mostrarMenu() {
    console.log("1. Agregar tarea\n2. Listar tareas\n3. Salir");
    readline.question('', (input) => {
        let opcion;
        try {
            opcion = parseInt(input);
        } catch (e) {
            console.log("Por favor ingresa un número.");
            mostrarMenu();
            return;
        }

        switch (opcion) {
            case 1:
                readline.question("Escribe la tarea:\n", (tarea) => {
                    tareas.push(tarea);
                    mostrarMenu();
                });
                break;
            case 2:
                console.log("Tareas: ", tareas);
                mostrarMenu();
                break;
            case 3:
                readline.close();
                break;
            default:
                mostrarMenu();
                break;
        }
    });
}

mostrarMenu();