#!/bin/bash

buscar_a_pato(){

    entrada_registro_mov_pato=$1
    salida=$2

    grep -E "[0-9][0-9]:[0-9][13579].*7.*(resbaló en el barro|limpió las pezuñas)" "$entrada_registro_mov_pato" >> "$salida"

    chances_para_capturar_a_pato=$(head -n 1 "$salida") 

    primer_chance=$(echo "$chances_para_capturar_a_pato" | grep -E -o "[0-9][0-9]:[0-9][0-9]")

    echo "Hora indicada para capturar a Pato: $primer_chance" > pato.txt 
    cat pato.txt
}

buscar_a_pato "$1" "$2"

