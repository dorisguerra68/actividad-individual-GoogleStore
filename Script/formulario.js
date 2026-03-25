// Seleccionamos el formulario y el div del mensaje
const formulario = document.getElementById('userForm');
const mensajeDiv = document.getElementById('mensaje');

// Escuchar datos 
formulario.addEventListener('submit', event => {
    event.preventDefault();

    // Se añade los valores de los inputs
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const edad = document.getElementById('edad').value;

    // Mostramos los datos en la consola 
    console.log("Datos recibidos:", { nombre, email, edad });
    //if (edad >= 18)

    // Mostramos un mensaje de éxito en la página
    mensajeDiv.innerText = `¡Gracias ${nombre}! Tus datos han sido registrados.`;
    
    // Opcional: Limpiar el formulario
    formulario.reset();
});