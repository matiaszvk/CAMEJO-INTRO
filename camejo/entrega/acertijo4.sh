archivo_recibido="$1"

grep  -E -i -o "[a-z]" "$archivo_recibido" | tr -d '\n' > mensaje_papiro.txt

sed -e 's/cueva/doblar/Ig' -e 's/secreta/izquierda/Ig' -e 's/pocos/despues/Ig' -e 's/metros/derecha/Ig'  -e 's/arriba/adelante/Ig' -e 's/atras/reversa/Ig' mensaje_papiro.txt > mensaje_papiro_temporal.txt

mv mensaje_papiro_temporal.txt  mensaje_papiro.txt
