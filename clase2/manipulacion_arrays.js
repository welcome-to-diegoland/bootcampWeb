// 1. Declarar el array "participantes"
let participantes = ["Elena", "Carlos", "Javier", "Laura", "Miguel", "Patricia"];

// Función para imprimir la clasificación
const imprimirClasificacion = (mensaje) => {
  console.log(`\n${mensaje}`);
  participantes.forEach((participante, index) => {
    console.log(`${index + 1}. ${participante}`);
  });
};

// Mostrar la clasificación inicial
imprimirClasificacion("Clasificación inicial:");

// 2. Laura supera a Javier
let posicionLaura = participantes.indexOf("Laura");
let posicionJavier = participantes.indexOf("Javier");
// Elimina a Javier de su posición actual (posiciónJavier)
participantes.splice(posicionJavier, 1); 
// Inserta a Javier después de Laura (posicionLaura + 1)
participantes.splice(posicionLaura + 1, 0, "Javier"); 
imprimirClasificacion(
  `Laura supera a Javier. Método: splice (Se usó splice para eliminar a Javier de la posición ${posicionJavier + 1} y reinsertarlo en la posición ${posicionLaura + 2}. splice permite eliminar un elemento de cualquier posición del array y luego insertar elementos en una nueva posición.)`
);

// 3. Patricia es descalificada y se elimina usando splice
let posicionPatricia = participantes.indexOf("Patricia");
// Usamos splice para eliminar a Patricia, ya que sabemos su posición exacta
participantes.splice(posicionPatricia, 1); 
imprimirClasificacion(
  `Patricia es descalificada. Método: splice (Se usó splice para eliminar a Patricia de la posición ${posicionPatricia + 1}. Aunque pop también eliminaría el último elemento, splice permite especificar cualquier posición y eliminar elementos de forma precisa.)`
);

// 4. Se incorporan Raúl y Sofía detrás de Elena y antes de Carlos
let posicionCarlos = participantes.indexOf("Carlos");
// Inserta a Raúl y Sofía en las posiciones correspondientes
participantes.splice(posicionCarlos, 0, "Raúl", "Sofía"); 
imprimirClasificacion(
  `Se incorporan Raúl y Sofía detrás de Elena y antes de Carlos. Método: splice (Se usó splice para insertar a Raúl y Sofía en las posiciones ${posicionCarlos} y ${posicionCarlos + 1}. splice permite agregar elementos en cualquier posición del array sin necesidad de mover el resto de los elementos manualmente.)`
);

// 5. Carmen toma la posición principal
participantes.unshift("Carmen"); 
imprimirClasificacion(
  `Carmen toma la posición principal. Método: unshift (Se usó unshift ya que este método agrega un elemento al principio del array, lo que coloca a Carmen en la posición 1. unshift es útil cuando necesitamos añadir un elemento al inicio del array, moviendo los elementos existentes hacia atrás.)`
);
