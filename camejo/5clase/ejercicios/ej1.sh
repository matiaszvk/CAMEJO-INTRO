#les pibes quieren hacer un to do list. para eso queiren hacer
#un script que guarde en un archvio llamado tareas.txt
#todas las rareas que 

archivo_tareas="tareas.txt"
mostrar_menu(){

    echo "OPciones"
    echo "1) agregar tarea"
    echo "2) listar tareas"
    echo "3) eliminar"
    echo "4) salir"
}

agregar_tarea(){

    read -p "aingrese la tarea: " tarea 
    echo "$tarea" >> "$archivo_tareas"
    echo "se agrego la tarea correctamente"
}

listar_tareas(){

    cat "$archivo_tareas"
}

eliminar_tarea(){

    listar_tareas
    read -p "ingrese el numero de tarea a eliminar" num_tarea
    sed -i "${num_tarea}d" "$archivo_tareas"
    echo "tarea eliminada"
}


while true; do
    mostrar_menu   
    read -p "selecciona una ipcion: " opcion

    case $opcion in

        1) 
            agregar_tarea
            ;;
        2) 
            listar_tareas
            ;;
        3) 
            eliminar_tarea
            ;;

        4)
            listar_tareas
            echo "saliendo ..."
            exit 0
            ;;
    esac
done