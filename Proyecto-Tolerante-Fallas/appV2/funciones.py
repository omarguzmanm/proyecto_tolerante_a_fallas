from flask import session
from conexionBD import * 


#creando una funcion y dentro de la misma una data (un diccionario)
#con valores del usuario ya logueado
def dataLoginSesion():
    inforLogin = {
        "idLogin"             :session['id'],
        "nombre"              :session['nombre'],
        "apellido"            :session['apellido'],
        "emailLogin"          :session['email'],
        "create_at"           :session['create_at'],
    }
    return inforLogin

