
function agregar_animo() {

    //AGREGAMOS EL FORM PARA OBTENER SU CONTENIDO
    let elemensos = document.getElementById("form_animo").elements;
    let dia = elemensos.dia.value;
    let animo = elemensos.animo.value;

    if(dia < 1 || dia > 31) {

        alert("el dia debe ser entre 1 y 31")
        return
    }

    if (document.getElementById(`dia_${dia}`)){
        alert("ya existe ese elemento, si queres cambiarlo primero elimina")
        return
    }


    //CREAMOS UN NUEVO ELEMENTO
    let nuevo_elemento = document.createElement("li") // <li><li>
    // nuevo_elemento.append(`Dia: ${dia}  Animo: ${animo}`); //<li>dia: 34   animo: bien<li>
    nuevo_elemento.setAttribute("id", `dia_${dia}`)
    nuevo_elemento.setAttribute("class","list-group-item")

    if(animo == "muy bien"){
        nuevo_elemento.classList.add("list-group-item-success")
    }

    let nuevo_dia = document.createElement("div");
    nuevo_dia.setAttribute("class", "col")
    nuevo_dia.append(`Dia: ${dia}`)

    let nuevo_animo = document.createElement("div")
    nuevo_animo.setAttribute("class", "col")
    nuevo_animo.append(`Animo: ${animo}`)

    let nuevo_remover = document.createElement("button")
    nuevo_remover.setAttribute("class", "col")


    let nuevo_boton = document.createElement("button")
    nuevo_boton.setAttribute("class", "btn btn-sm btn-danger")
    nuevo_boton.innerText = "Remover"
    nuevo_boton.onclick = function(){remover_animo(`dia_${dia}`)}

    nuevo_remover.append(nuevo_boton)


    let nueva_row = document.createElement("div")
    nueva_row.setAttribute("class", "row")

    nueva_row.append(nuevo_dia)
    nueva_row.append(nuevo_animo)
    nueva_row.append(nuevo_remover)

    nuevo_elemento.append(nueva_row)


    //OBTENEMOS EL LISTADO DE ANIMOS CARGADOS
    let animos = document.getElementById("animos_cargados") 
    animos.append(nuevo_elemento)
}

function remover_animo(id){

    document.getElementById(id).remove()
}

function borrar_todo() {

    document.getElementById("animos_cargados").innerHTML = ""
}