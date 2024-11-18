const cambiarTexto = (idElemento, valor) => {
    document.getElementById(idElemento).innerText = valor;
}
const cambiarColor = (idElemento, color) => {
    document.getElementById(idElemento).style.color = color;
}
const cambiarTamano = (idElemento, tamanio) => {
    document.getElementById(idElemento).style.fontSize = tamanio;
}
const agregarElemento = (idElemento, elementoHTML) => {
    document.getElementById(idElemento).innerHTML = document.getElementById(idElemento).innerHTML + elementoHTML
}

const conceptosJS = ()=>{
/*tipos de variables en js
var: variables globales , ya no es comun
let: a nivel de funcion , dentro dle bloque{}, 
no permite declarar en el mismo bloque
const: cuyo valor no cambia 
*/
    let nombre="Augusto";
    let numero1="10";
    let numero2="10.1";
    const  PI = 3.1416;
    console.log(nombre);
    console.log(numero1);
    console.log(PI);
    console.log("Entro al metodo de calculo");
    /*Declaracion de arreglos*/
    const diasSemana=['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes']; 
    console.log(diasSemana);
    console.log(diasSemana[0]);
    console.log(diasSemana[1]);
    console.log(diasSemana[4]);
    console.log(diasSemana[5]);   
    //dentro de JS el concepto de nulo o no existencia: undefined (!= null)
    let valor = null;
    console.log(valor);
    //push agrega al arreglo al final
    diasSemana.push('Sabado');
    console.log(diasSemana);

    //unshif agrega al principio del arreglo
    diasSemana.unshift('Dias');
    console.log(diasSemana);
    //
    const numerosImpares=[1,3,5,7,9,11];
    console.log(numerosImpares);

    const numerosPares = [2, 4, 6, 8, 10, 12]
    console.log(numerosPares);

    const numeros = numerosImpares.concat(numerosPares);
    console.log(numeros);

    for(const dia of diasSemana){
        console.log(dia)
        if(dia ==='Viernes'){
            console.log('al fin viernes');

        }else{
            console.log('Aun no llega viernes')
        }

    }
    //declarar objetos en js
    const miEstudiante = {
        nombre:"Augusto",
        apellido:"Salazar",
        edad:25,
        genero:"masculino",
        ciudadNacimiento:"Quito"
    }
    console.log(miEstudiante);
    console.log(miEstudiante.nombre);
    console.log(miEstudiante.edad);

    if (miEstudiante.edad === 25) {
        console.log('Tiene 25')
    } else {
        console.log('Ya no tiene 25')
    }

    miEstudiante.apellido = 'Teran';
    console.log(miEstudiante);

    //declarar un objetos con atributos 
    const miProfesor = {
        nombre: "Daniel",
        apellido: "Tobart",
        edad: null,
        direccion: {
            calle: "Av. America",
            casa: "120",
            barrio: "Rumipamba"
        }
    }
    console.log(miProfesor);
    console.log(miProfesor.nombre);
    console.log(miProfesor.direccion);
    console.log(miProfesor.direccion.calle);

    miProfesor.direccion.calle="10 de agosto";

    console.log(miProfesor);
    //unifined no existe
    console.log(miProfesor.estatura);
    //null existe 
    console.log(miProfesor.edad);
    
    if(miProfesor.edad== miProfesor.estatura){
        console.log('son iguales');
    }else{
        console.log('Estos no son lo mismo');
    }





}