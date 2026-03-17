function tabla(){

    let numero = document.getElementById("numero").value

    document.getElementById("resultado").innerHTML = ""

    for(let i = 1; i <= 10; i++){

        document.getElementById("resultado").innerHTML +=
        numero + " x " + i + " = " + (numero * i) + "<br>"

    }

}

function cambiartexto(){
    let nuevo=document.getElementById("nuevo_texto").value
    document.getElementById("texto").innerHTML=nuevo
}

function respuesta_boton(){
    let respuesta=document.getElementById("respuesta_boton").innerHTML="Click en el boton"
}
let contador=0
function contador_cliks(){
    contador+=1
    let respuesta=document.getElementById("respuesta_btn_contador").innerHTML=( contador)
}

function seleccion(){
    let eleccion= document.getElementById("seleccion").value
    document.getElementById("mostrar_select").innerHTML=eleccion
}

function mostrar_texto(){
    let texto= document.getElementById("texto_input").value
    document.getElementById("mostrar_input_texto").innerHTML= texto
}