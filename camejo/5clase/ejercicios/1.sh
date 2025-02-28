#les pibes quieren hacer un to do list. para eso queiren hacer
#un script que se guarde en un archivo llamado tareas.txt
#todas las  tareas que pongamos por linea de comando.
# la idea es que tenga listar tareas, agregar y eliminar.
#primero debe tener un menu con opciones 

archivo_tareas="tareas.txt"

mostrar_menu(){
	echo "elija una opcion"
	echo "1) agregar tarea"
	echo "2) mostrar lista"
	echo "3) eliminar tarea"
	echo "4) salir del menu"
}

agregar_tarea(){

        read -p "ingrese su tarea: " tarea
        echo "$tarea" >> "$archivo_tareas"
}

listar_tareas(){
        cat "$archivo_tareas"
}

eliminar_tarea(){
        listar_tareas
        read -p " ingrese el numero de la tarea a eliminar " num_tarea
        sed -i "$(num_tarea)d" "$archivo_tareas"
        echo "tarea eleimnada"
}
while true; do

        mostrar_menu
        read -p "selecciona una opcion: " opcion

        case $opcion in

		1)
			agregar_tarea
                        ;;

                2)      listar_tareas
                        ;;

                3)      eliminar_tarea
                        ;;

                4)
                        listar_tareas
                        echo " saliendo"
                        exit 0
                        ;;
        esac
done