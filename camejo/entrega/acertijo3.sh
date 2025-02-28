#!/bin/bash

ordenar_infractores() {
    recibir_lista_infractores="$1"
    if [[ -n "$recibir_lista_infractores" ]]; then
        echo "$recibir_lista_infractores" | sort -t, -k3n
    fi
}

archivo_temporal="infractores_temporal.txt"
cat "$1" > "$archivo_temporal"

ordenar_infractores "$(cat "$archivo_temporal")" | head -n 3 > acertijo3.txt 

for anio in {2020..2024}; do
    resultados=$(grep "$anio" "$1")
    if [[ -n "$resultados" ]]; then
        ordenar_infractores "$resultados" | head -n 3
    fi
done > infractores.txt

rm "$archivo_temporal"
