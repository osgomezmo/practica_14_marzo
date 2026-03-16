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