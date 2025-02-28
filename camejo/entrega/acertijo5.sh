#!/bin/bash

factorial(){

    numero="$1"
    resultado=1

    if [[ "$numero" -eq 0 ]]; then
        echo "1"
        return
    fi
    for (( i=1; i<=numero; i++ )); do
        resultado=$((resultado * i ))
    done
    echo "$resultado"
}

fibonacci(){

    numero="$1"
    x=0
    y=1

    for (( i=0; i<numero; i++ )); do

        z=$((x + y))
        x=$y
        y=$z
        
    done
    echo "$x"

}


contar_palabra_misterio(){
    grep -o "misterio" paginaDiario.txt | wc -l 
}

contar_frase_de_mabel(){
    numero_de_veces_mabel="$1"

    if (( numero_de_veces_mabel % 2 == 0 )); then
        resultado=$(factorial "$numero_de_veces_mabel") 
    else resultado=$(fibonacci "$numero_de_veces_mabel") 
    fi
    echo "$resultado"
}

output(){

    cantidad_palabra_misterio="$(contar_palabra_misterio)"
    cantidad_frase_mabel="$(contar_frase_de_mabel "$2")"

    {
        echo "$cantidad_palabra_misterio"
        echo "$cantidad_frase_mabel"
    } > lector_clave_secreta.txt
}

output "$1" "$2" "$3"



