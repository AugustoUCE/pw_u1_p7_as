var num1=null;
var num2=null;

var operacion = null;

function setearValor(valor){
    //innertext el valor de un contenido a un texto
   document.getElementById('id-display').innerText=valor;
}

function setearValorConcatenado(valor) {
    let valorActual = document.getElementById('id-display').innerText;
    document.getElementById('id-display').innerText = valorActual + valor;
}
function obtenerValor(valor){
     if (num1===null) {
        num1=parseFloat(valor);
        setearValor(valor)
     } else {
        num2=parseFloat(valor);
        setearValorConcatenado(valor);
     }

}



function igual() {
    let valorFinal;

   
    if (operacion === '+') {
        valorFinal = num1 + num2;
    } else if (operacion === '-') {
        valorFinal = num1 - num2;
    } else if (operacion === '*') {
        valorFinal = num1 * num2;
    } 

    setearValor(valorFinal);
    num1 = valorFinal;
    num2 = null;
    operacion = null;
}

function testOperacion(evalOperacion) {
    operacion = evalOperacion;
    setearValorConcatenado(evalOperacion);
}

function c() {
    num1 = null;
    num2 = null;
    operacion = null;
    setearValor('');
}

function borrarUltimo() {
    let valorActual = document.getElementById('id-display').innerText;

    if (valorActual.length > 0) {
        document.getElementById('id-display').innerText = valorActual.slice(0, -1);
    }
}
