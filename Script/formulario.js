// Seleccionamos el formulario y el div del mensaje
// busca el formulario que tiene ID
const formulario = document.getElementById('userForm');
const mensajeDiv = document.getElementById('mensaje');

// Escuchar datos 
formulario.addEventListener('submit', event => {
    event.preventDefault();

    // Se añade los valores de los inputs
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const edad = document.getElementById('edad').value;

    //validación sí es mayor o no
    if (edad < 18){
        mensajeDiv.innerText = `Lo sentimos ${nombre}, debe ser mayor de edad para registrarte.`;
        mensajeDiv.style.color = "orange";
    return;
    }
    // Mostramos los datos en la consola 
    console.log("Datos recibidos correctamente:", { nombre, email, edad });

    // Mostramos un mensaje de éxito en la página
    mensajeDiv.innerText = `¡Gracias ${nombre}! Tus datos han sido registrados.`;
    mensajeDiv.style.color = "Blue";
    // Limpiar el formulario
    formulario.reset();
});