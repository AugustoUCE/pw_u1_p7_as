var num1=null;
var num2=null;

function setearValor(valor){
    //innertext el valor de un contenido a un texto
   let valorActual= document.getElementById('id-display').innerText;
   console.log(valorActual)
   document.getElementById('id-display').innerText;
}
function setearValorConcatenado(valor){
    //innertext el valor de un contenido a un texto
   let valorActual= document.getElementById('id-display').innerText;
   console.log(valorActual)
   document.getElementById('id-display').innerText;
}
function obtenerValor(valor){
     if (this.num1===null) {
        this.num1=valor;
     } else {
        this.num2=valor;
     }

}


function igual(){
    let valorFinal;
    if (operacion==='+') {
        valorFinal=num1+num2

    }elseif(operacion==='-'){
        valorFinal=num1-num2
    }
    setearValor(valorFinal)
}

