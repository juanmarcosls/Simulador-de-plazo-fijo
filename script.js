

function calcular(){

    document.getElementById("btnCalcular").addEventListener("click", verificar);
}

function verificar(){
    let nombre= document.getElementById("NombreApellido").value;
    let monto= document.getElementById("MontoInvertir").value;
    let dias= document.getElementById("CantidadDias").value;

     
    if(nombre===""|| monto==="" ||dias ===""){
        let error= document.getElementById("nombreError");
        error.innerHTML= "hay campos sin llenar";
   
    }else{
        varificaMonto(monto);
        varificaDias(dias);
        
        let error= document.getElementById("nombreError");
        error.innerHTML=""
    }

}
function varificaMonto(valor){
    if(valor < 1000 ){
        let error= document.getElementById("montoError");
        error.innerHTML= "el monto debe ser mayor a 1000";

    }else{
        let error= document.getElementById("montoError");
        error.innerHTML= "";
    }

}
function varificaDias(valor){
    if(valor < 30 ){
        let error= document.getElementById("diasError");
        error.innerHTML= "ingrese un valor numerico mayor a 30"
    }else{
        let error= document.getElementById("diasError");
        error.innerHTML= "";
    }

}

calcular();