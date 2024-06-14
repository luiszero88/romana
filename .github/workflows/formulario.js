function result(){
    //Las variables son iguales a lo que escriba el usuario como respuesta a nuestro formulario. Llamamos al nombre de identificación que creó en el paso anterior y le tomamos el valor.
    var name = document.getElementById('fecha-produccion').value;
   // var email = document.getElementById('email').value;

    if (document.getElementById('poll1').checked){
        poll = document.getElementById('poll1').value;
    } else if(document.getElementById('poll2').checked){
        poll = document.getElementById('poll2').value;
    } else {
        poll = document.getElementById('poll3').value;
    }

    var comments = document.getElementById('comments').value;

    document.write("Gracias por participar");
    
    document.write(name + "<br/>");
    document.write(email + "<br/>");
    document.write(poll + "<br/>");
    document.write(comments + "<br/>");
}