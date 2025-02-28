#!/bin/bash

venganza_contra_mabel(){

    canciones_de_mabel=$1
    salida_venganza=$2


    grep -E -v "^[A-Z]{2}|^[a-z]{2}|[0-9]|[aeiou]{3}" "$canciones_de_mabel" | 

    sed -E 's/[aeiou]/X/g' | 

    invertir_linea > "venganza.txt"
}



invertir_linea(){

	while IFS= read line; do

		palabra=$(echo "$line" | wc -w)

		if [ $palabra -lt 5 ]; then
			echo "$line" | rev
        else
            echo "$line"
        fi
	done
}

venganza_contra_mabel "$1" "$2"

