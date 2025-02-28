# Clase Docker

#### Probamos si todo se encuentra correctamente instalado
* `docker run hello-world`

Que hacemos con `docker run`?


#### Comandos Básicos (Hay mucho más)
* `docker run`
* `docker pull`
* `docker images`
* `docker ps` y `docker ps -a`
* `docker start`
* `docker stop`
* `docker exec -it` => Atamos una terminal.



* `docker run -it ubuntu`



Parar todos
```sh
docker stop $(docker ps -a -q)
```
Eliminar todos
```sh
docker rm $(docker ps -a -q)
```