#!/bin/bash

export i=0

while [ $i -lt 10 ]
do
    echo "i: $i"
    export i = $(($i +1))

done

echo "termine"

#$( se llama subshell)
#$((para resolver una operacion aritmetica))