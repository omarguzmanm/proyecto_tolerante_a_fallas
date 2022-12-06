 // función encargada de la redirección
function redireccion() {
     window.location = '/';
 }
 
 // se llamará a la función que redirecciona después de 10 minutos (600.000 segundos)
 var temp = setTimeout(redireccion, 4000);
 
 // cuando se pulse en cualquier parte del documento
 document.addEventListener("click", function() {
     // borrar el temporizador que redireccionaba
     clearTimeout(temp);
     // y volver a iniciarlo
     temp = setTimeout(redireccion, 4000);
 })