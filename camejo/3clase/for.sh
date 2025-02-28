#!/bin/bash

export i=0

echo "while"

while [ $i -lt 10 ]
do
    echo "i: $i"
    export i=$(($i + 1))  # Incrementa 'i' en 1
done

echo "for"
for j in $(seq 1 8)
do 
    echo "j:$j"
done

echo "Terminé"
