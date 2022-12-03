# Proyecto de computación tolerante a fallas

# 🖥Consumo de API con Flask utilizando Docker, Kubernetes e Istio

Alumnos:
 - Guzmán Munguía Omar Alejandro
 - Lazo Villa Gabriel
 - López de Rueda Fernando Yaír Valentín


🌐Tegnologías usadas
 - HTML
 - CSS
 - JS
 - PYTHON
 - MYSQL
 - DOCKER
 - KUBERNETES
 - ISTIO

# 📑Descripción

Aplicación desarrollada en python y desplegada en Flask para generar un servidor web, dicha aplicación
hace el consumo de diferentes APIS (GIPHY, MARVEL Y DOGS); permitiendole al usuario hacer uso de estas.

# ☑APIS utilizadas
 - GIPHY: Api la cual te permite hacer una busqueda de cualquier gif mediante una barra la cual se situa en la parte de arriba.
 - MARVEL: Api la cual despliega varios personajes de la franquicia los cuales al dar click sobre uno direccionará a la persona a una pagína donde se mostrará la biografía de ese personaje en cuestión, además de los comics donde aparece.
  - DOG API: Api la cual te mostrará la una imagen de referencia de la raza de perros ingresada desde el teclado, estas imagenes las mostrará de manera aleatoria lo que hace que muestre una gran variedad de imagenes por cada raza de perros.



![imagen 1](https://user-images.githubusercontent.com/114009509/205428044-fe26d151-c655-4801-a608-dfe0cb4fcf4c.png)

![imagen 2](https://user-images.githubusercontent.com/114009509/205428226-21112ded-7978-483e-9a90-264e403002d0.png)

![imagen 3 ](https://user-images.githubusercontent.com/114009509/205428250-14c07ee2-3edc-4714-933b-81a04fa087ef.png)

![imagen 4](https://user-images.githubusercontent.com/114009509/205428658-8fc0fc0e-c43e-4dbe-8af8-0909b6325803.png)

![imagen 5](https://user-images.githubusercontent.com/114009509/205428707-a0e9c90e-c22d-438d-af03-7db00d5d52a4.png)


Otra función de nuestra app es que al momento de seleccionar el recuadro de la API de pokemón direccione al usuario a una pagina de error donde despues de 4 segundos se direcciona automaticamente a la pagina de inicio lo cual es una forma de tolerancia a fallas.

![imagen 6](https://user-images.githubusercontent.com/114009509/205428921-1ea3f54c-fc1d-437e-ac2d-e2c7b9ca4584.png)


**Docker**


Para poder descargar nuestra imagen se debe de ultilizar el siguiente comando:

   docker pull gabreillazo/theproyect 
