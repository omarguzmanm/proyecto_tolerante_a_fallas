# Proyecto de computación tolerante a fallas

# 🖥Consumo de API con Flask utilizando Docker, Kubernetes e Istio
<p align="center">
 <img src="https://user-images.githubusercontent.com/86528554/205555513-9d28d7e8-7b87-4d0c-a346-cb1e939229b1.gif" alt="Sublime's custom image"/>
</p>

# 🧑‍💻Alumnos:
 - Guzmán Munguía Omar Alejandro
 - Lazo Villa Gabriel
 - López de Rueda Fernando Yaír Valentín


# 🌐Tecnologías usadas
 - HTML
 - CSS
 - JS
 - PYTHON (flask)
 - DOCKER
 - KUBERNETES
 - ISTIO

# 📑Descripción

Aplicación desarrollada en python y desplegada en Flask para generar un servidor web, dicha aplicación
hace el consumo de diferentes APIS (GIPHY, MARVEL Y DOGS); permitiendole al usuario hacer uso de estas.

# ☑APIs utilizadas
 - **GIPHY:** Api la cual te permite hacer una busqueda de cualquier gif mediante una barra la cual se situa en la parte de arriba.
 - **MARVEL:** Api la cual despliega varios personajes de la franquicia los cuales al dar click sobre uno direccionará a la persona a una pagína donde se mostrará la biografía de ese personaje en cuestión, además de los comics donde aparece.
  - **DOG API:** Api la cual te mostrará la una imagen de referencia de la raza de perros ingresada desde el teclado, estas imagenes las mostrará de manera aleatoria lo que hace que muestre una gran variedad de imagenes por cada raza de perros.


# Pre-requisitos🗂

**🐳Docker**
**🪱Python**
**⚡Flask**
**⚙Minikube**
**📁Istio**

# ▶ Iniciamos
Docker
---
Descargamos la imagen de docker con el siguiente comando:
```
docker pull ferderueda7/proyecto
```
Captura de nuestra imagen ya creada

![docker](https://user-images.githubusercontent.com/114009509/205820047-0f110ffe-1aea-482b-afeb-312b246755f3.png)

Podemos checar que nuestra imagen se creó correctamente con:
```
docker images
```
Kubernetes
---
Iniciamos minikube:
```
Minikube start
```

Cargamos nuestro deployment y service para generar nuestros pods
```
kubectl apply -f proyecto-v1.yaml
```
<p align="center">
 <img src="https://user-images.githubusercontent.com/85196028/205832832-9591dd4c-00ba-48d9-904b-e7827da9ce1e.png" alt="Sublime's custom image"/>
</p>



Miramos que se generaron:
```
kubectl get pods
minikube dashboard
```
![image](https://user-images.githubusercontent.com/85196028/205824583-1917a54d-64cd-423a-a03b-f5c18919f9b2.png)


Istio
---
Aplicamos una inyección a nuestros pods:
```
kubectl label namespace default istio-injection=enabled
```

Aplicar cambios a los archivos para que se les inyecte el proxy a los pods:
```
kubectl apply -f proyecto-v1.yaml
```
Verificar que se hizo la inyeccion correctamente:
![inyeccion](https://user-images.githubusercontent.com/114009509/205819529-e0312433-0cd0-4287-8625-8f0e80046a77.png)

```
kubectl get pods
kubectl describe pods <pod_name>
```
Al hacer el describe a un pod, podemos apreciar que este ahora tiene dos contenedores, uno para la aplicación y el otro como proxy.
De esta forma, nos aseguramos de que en caso de una caida, caiga primero el proxy y luego nuestra aplicación.
![image](https://user-images.githubusercontent.com/85196028/205824766-f2795473-32ed-48f3-b55b-a40963f62b85.png)


Iniciar modo iteractivo de nuestro pod:
```
kubectl exec -it <pod_name> /bin/sh
```
Generar peticiones para obtener tráfico:
```
while sleep 1; do curl -o /dev/null -s -w %{http_code} http://<name_service>-svc:80/; done
```

**Para ver las metricas, el trafico y estadísticas de los pods y servicios ejecuta los siguientes comandos**

[Kiali](https://istio.io/latest/docs/ops/integrations/kiali/)
```
istioctl dashboard kiali
```
[Prometheus](https://istio.io/latest/docs/ops/integrations/prometheus/)
```
istioctl dashboard prometheus
```
[Grafana](https://istio.io/latest/docs/ops/integrations/grafana/)
```
istioctl dashboard grafana
```
[Jaeger](https://istio.io/latest/docs/ops/integrations/jaeger/)
```
istioctl dashboard jaeger
```


# 📱Imagenes de nuestra aplicacion

![imagen 1](https://user-images.githubusercontent.com/114009509/205428044-fe26d151-c655-4801-a608-dfe0cb4fcf4c.png)

![imagen 2](https://user-images.githubusercontent.com/114009509/205428226-21112ded-7978-483e-9a90-264e403002d0.png)

![imagen 3 ](https://user-images.githubusercontent.com/114009509/205428250-14c07ee2-3edc-4714-933b-81a04fa087ef.png)

![imagen 4](https://user-images.githubusercontent.com/114009509/205428658-8fc0fc0e-c43e-4dbe-8af8-0909b6325803.png)

![imagen 5](https://user-images.githubusercontent.com/114009509/205428707-a0e9c90e-c22d-438d-af03-7db00d5d52a4.png)


Otra función de nuestra app es que al momento de seleccionar el recuadro de la API de pokemón direccione al usuario a una pagina de error donde despues de 4 segundos se direcciona automaticamente a la pagina de inicio lo cual es una forma de tolerancia a fallas.

![imagen 6](https://user-images.githubusercontent.com/114009509/205428921-1ea3f54c-fc1d-437e-ac2d-e2c7b9ca4584.png)

Al momento de ingresar una direcccion inexistente se le direccionará automaticamente al inicio y en caso de que no lo haga podrá dar click en un botón que se le mostrará en pantalla.

![imagen 7](https://user-images.githubusercontent.com/114009509/205430214-08ada25a-105c-46dc-ba85-9a51edf84cfc.png)

Archivo PDF
---
  +[Reporte](Reporte-ProyectoFinal.pdf)
  
Video
---

# Para ver el video del funcionamiento de la aplicación, toque la imagen o el link ⬇️

[![Uso completo de la aplicación](https://i.ytimg.com/vi/vVnYJlETDnE/maxresdefault.jpg)](https://www.youtube.com/watch?v=vVnYJlETDnE)
https://www.youtube.com/watch?v=vVnYJlETDnE
