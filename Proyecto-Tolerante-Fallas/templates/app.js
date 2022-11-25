function guardarDatos() {
     localStorage.nombre = document.getElementById("nombre").value;
     localStorage.usuario = document.getElementById("usuario").value;
     localStorage.correo = document.getElementById("correo").value;
     localStorage.password = document.getElementById("password").value;

     window.location = "login";
 }
function recuperarDatos() {
     if ((localStorage.nombre != undefined) && (localStorage.password != undefined)) {
        // document.getElementById("datos").innerHTML = "<input type='text' class='form-control datos' id='nombre' placeholder='name' required>" + "<label for='floatingInput'>"+ localStorage.nombre + "</label>" ;
        document.getElementById("datos").innerHTML = "<input type='text' class='form-control datos' id='nombre' placeholder='name' required value=" + localStorage.nombre + ">"+"<label for='floatingInput'>Nombre completo</label>" ;
        document.getElementById("datos2").innerHTML = "<input type='text' class='form-control datos' id='nombre' placeholder='name' required value=" + localStorage.usuario + ">"+"<label for='floatingInput'>Usuario</label>" ;
        document.getElementById("datos3").innerHTML = "<input type='email' class='form-control datos' id='nombre' placeholder='name' required value=" + localStorage.correo + ">"+"<label for='floatingInput'>Correo electronico</label>" ;
        document.getElementById("datos4").innerHTML = "<input type='password' class='form-control datos' id='nombre' placeholder='name' required value=" + localStorage.password + ">"+"<label for='floatingInput'>Contraseña</label>" ;

        //     document.getElementById("datos").innerHTML = "<input type='text' class='form-control datos' id='nombre' placeholder='name' required value=" + localStorage.nombre + ">"  ;

     } else {
         document.getElementById("datos").innerHTML = "No has introducido tu nombre y tu password";
     }
 }