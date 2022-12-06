function guardarDatos() {
     localStorage.nombre = document.getElementById("nombre").value;
     localStorage.apellido = document.getElementById("apellido").value;
     localStorage.correo = document.getElementById("correo").value;
     localStorage.password = document.getElementById("contraseña").value;
     localStorage.password2 = document.getElementById("contraseña2").value;

     window.location = "login";
 }
function recuperarDatos() {
     if ((localStorage.nombre != undefined) && (localStorage.password != undefined)) {
        // document.getElementById("datos").innerHTML = "<input type='text' class='form-control datos' id='nombre' placeholder='name' required>" + "<label for='floatingInput'>"+ localStorage.nombre + "</label>" ;
        document.getElementById("datos").innerHTML = "<label for=nombre' class='form-label mt-3'>Primer nombre</label>"+"<input type='text' class='form-control' id='nombre' placeholder='nombre' required value=" + localStorage.nombre + ">";
        document.getElementById("datos2").innerHTML = "<label for=apellido' class='form-label mt-3'>Primer apellido</label>" + "<input type='text' class='form-control' id='apellido' placeholder='apellido' required value=" + localStorage.nombre + ">";
        document.getElementById("datos3").innerHTML = "<label for=email' class='form-label mt-3'>Correo electronico</label>" + "<input type='email' class='form-control' id='email' placeholder='correo' required value=" + localStorage.correo + ">";
        document.getElementById("datos4").innerHTML = "<label for=contraseña' class='form-label mt-3'>Contraseña</label>"+"<input type='password' class='form-control' id='contraseña' placeholder='contraseña' required value=" + localStorage.password + ">" ;
        document.getElementById("datos5").innerHTML = "<label for=contraseña2' class='form-label mt-3'>Confirmar contraseña</label>"+"<input type='password' class='form-control' id='contraseña2' placeholder='confirmar contraseña' required value=" + localStorage.password2 + ">" ;

        //     document.getElementById("datos").innerHTML = "<input type='text' class='form-control datos' id='nombre' placeholder='name' required value=" + localStorage.nombre + ">"  ;

     } else {
         document.getElementById("datos").innerHTML = "No has introducido tu nombre y tu password";
     }
 }

 function guardarDatos2() {
    localStorage.email = document.getElementById("email").value;
    // localStorage.contraseña = document.getElementById("password").value;
    // window.location = "login";
}
function recuperarDatos2() {
    if ((localStorage.email != undefined) ) {
       // document.getElementById("datos").innerHTML = "<input type='text' class='form-control datos' id='nombre' placeholder='name' required>" + "<label for='floatingInput'>"+ localStorage.nombre + "</label>" ;
        document.getElementById("datos1").innerHTML = "<label for=email' class='form-label '>Correo electronico</label>" + "<input type='email' class='form-control' id='nombre'  required value=" + localStorage.email + ">";
    //    document.getElementById("datos2").innerHTML = "<label for=contraseña' class='form-label mt-4'>Contraseña</label>"+"<input type='password' class='form-control' id='nombre'  required value=" + localStorage.contraseña + ">" ;

       //     document.getElementById("datos").innerHTML = "<input type='text' class='form-control datos' id='nombre' placeholder='name' required value=" + localStorage.nombre + ">"  ;

    } else {
        document.getElementById("datos").innerHTML = "No has introducido tu correo y tu password";
    }
}