function enviarMensaje() {
    var correo = document.getElementById("correo").value;
    var mensaje = document.getElementById("mensaje").value;

    // Validar que ambos campos estén llenos antes de enviar el mensaje
    if (!correo || !mensaje) {
        alert("Por favor, completa ambos campos.");
        return;
    }

    // Correo de destino (actualizado)
    var destino = "kelvinhuaytan009@gmail.com";

    // Simular el envío del mensaje abriendo el cliente de correo electrónico del usuario
    window.location.href = "mailto:" + destino + "?subject=Nuevo mensaje desde el formulario&body=" + mensaje;
}
