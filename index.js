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

function focus_input(){
    document.getElementById("text_focus").style.background= "yellow"
}

function mostrar_ayuda(){
    document.getElementById("mensaje_ayuda").innerHTML="recuerde que es necesario usar el @"
}

function validar_vacio(){
    var nombre= document.getElementById("input_name").value

    if  (nombre.trim()==""){
        document.getElementById("mensaje_nombre").innerHTML= "Debe ingresar un nombre"
    }
}

function validar_password(){
    var password=document.getElementById("input_password").value

    if (password.length<6){
        document.getElementById("mensaje_password").innerHTML="el minimo de dijitos es 6"
    }else{
        document.getElementById("mensaje_password").innerHTML=""
    }
}
//punto parcial
function calcularAnios(){
    let anio = document.getElementById("anio").value;

    if(anio === ""){
        alert("Por favor ingrese un año");
        return;
    }

    if(anio > 3000){
        alert("El año debe ser menor a 3000");
        return;
    }

    let faltan = 3000 - anio;

    alert("Faltan " + faltan + " años para el año 3000");
}
//punto parcial
function calcular(){
    let n1 = parseFloat(document.getElementById("num1").value);
    let n2 = parseFloat(document.getElementById("num2").value);

    if (isNaN(n1) || isNaN(n2)) {
        document.getElementById("resultado_suma").innerHTML = "Ingrese valores válidos";
        return;
    }

    let suma = n1 + n2;
    let raiz = Math.sqrt(suma);

    document.getElementById("resultado_suma").innerHTML =
        "Suma: " + suma + "<br>" +
        "Raíz cuadrada: " + raiz;
}