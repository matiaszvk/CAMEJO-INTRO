encontrar_mensaje(){

entrada="$1"

sed -E -e 's/1|2|9/x/g' -e 's/0|8/_/g' pared.txt > codigo_secreto.txt
}

encontrar_mensaje "1"