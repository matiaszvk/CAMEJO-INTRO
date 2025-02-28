#!/bin/bash

#set -e
#set -algo para cortar el programa tras un fallo

echo 'patovica de boliche'

#delcarar una variable con export
export edad=19




if [  $edad -lt 30 ] #poner $ a la variable
#se usa -lt en vez de <, con un corchete
#si pones doble corchete se puede usar > < etc
#if [[  $edad < 18 ]]

then
    echo "no podes entrar, wachin de matine"
elif [ $edad -gt 18 ]
then
    echo " no podes sos un viejo acabado"

else 
    echo "pasa flaco"
fi
