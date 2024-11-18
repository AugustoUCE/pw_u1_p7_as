const cambiarTexto = (idElemento, valor) => {
  document.getElementById(idElemento).innerText = valor;
};
const cambiarColor = (idElemento, color) => {
  document.getElementById(idElemento).style.color = color;
};
const cambiarTamano = (idElemento, tamanio) => {
  document.getElementById(idElemento).style.fontSize = tamanio;
};
const agregarElemento = (idElemento, elementoHTML) => {
  document.getElementById(idElemento).innerHTML =
    document.getElementById(idElemento).innerHTML + elementoHTML;
};

const conceptosJS = () => {
  /*tipos de variables en js
var: variables globales , ya no es comun
let: a nivel de funcion , dentro dle bloque{}, 
no permite declarar en el mismo bloque
const: cuyo valor no cambia 
*/
  let nombre = "Augusto";
  let numero1 = "10";
  let numero2 = "10.1";
  const PI = 3.1416;
  console.log(nombre);
  console.log(numero1);
  console.log(PI);
  console.log("Entro al metodo de calculo");
  /*Declaracion de arreglos*/
  const diasSemana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"];
  console.log(diasSemana);
  console.log(diasSemana[0]);
  console.log(diasSemana[1]);
  console.log(diasSemana[4]);
  console.log(diasSemana[5]);
  //dentro de JS el concepto de nulo o no existencia: undefined (!= null)
  let valor = null;
  console.log(valor);
  //push agrega al arreglo al final
  diasSemana.push("Sabado");
  console.log(diasSemana);

  //unshif agrega al principio del arreglo
  diasSemana.unshift("Dias");
  console.log(diasSemana);
  //
  const numerosImpares = [1, 3, 5, 7, 9, 11];
  console.log(numerosImpares);

  const numerosPares = [2, 4, 6, 8, 10, 12];
  console.log(numerosPares);

  const numeros = numerosImpares.concat(numerosPares);
  console.log(numeros);

  for (const dia of diasSemana) {
    console.log(dia);
    if (dia === "Viernes") {
      console.log("al fin viernes");
    } else {
      console.log("Aun no llega viernes");
    }
  }
  //declarar objetos en js
  const miEstudiante = {
    nombre: "Augusto",
    apellido: "Salazar",
    edad: 25,
    genero: "masculino",
    ciudadNacimiento: "Quito",
  };
  console.log(miEstudiante);
  console.log(miEstudiante.nombre);
  console.log(miEstudiante.edad);

  if (miEstudiante.edad === 25) {
    console.log("Tiene 25");
  } else {
    console.log("Ya no tiene 25");
  }

  miEstudiante.apellido = "Teran";
  console.log(miEstudiante);

  //declarar un objetos con atributos
  const miProfesor = {
    nombre: "Daniel",
    apellido: "Tobart",
    edad: null,
    direccion: {
      calle: "Av. America",
      casa: "120",
      barrio: "Rumipamba",
    },
  };
  console.log(miProfesor);
  console.log(miProfesor.nombre);
  console.log(miProfesor.direccion);
  console.log(miProfesor.direccion.calle);

  miProfesor.direccion.calle = "10 de agosto";

  console.log(miProfesor);
  //undefined no existe
  console.log(miProfesor.estatura);
  //null existe
  console.log(miProfesor.edad);

  if (miProfesor.edad == miProfesor.estatura) {
    console.log("son iguales");
  } else {
    console.log("Estos no son lo mismo");
  }

  //arreglos de objetos
  const est1 = {
    nombre: "Edison",
    apellido: "Cayambe",
    edad: 33,
  };
  const est2 = {
    nombre: "Augusto",
    apellido: "Salazar",
    edad: 25,
  };
  const est3 = {
    nombre: "Viviana",
    apellido: "Castillo",
    edad: 30,
  };

  const arregloEstudiantes = [est1, est2, est3];
  console.log(arregloEstudiantes);
  console.log(arregloEstudiantes[0]);
  console.log(arregloEstudiantes[1].nombre);

  const arregloEstudiantes2 = [
    { nombre: "Rony", apellido: "Salazar", edad: 30 },
    { nombre: "Steven", apellido: "Osorio", edad: 28 },
  ];

  console.log(arregloEstudiantes2);
  console.log(arregloEstudiantes2[0]);
  console.log(arregloEstudiantes2[1].nombre);
  //imprimir arreglos en una table
  console.table(arregloEstudiantes2);

  //usos del pop:ekimina el ultimo elemento del array
  console.log("uso del pop");
  const estudiante = arregloEstudiantes2.pop();
  console.log(estudiante);
  console.table(arregloEstudiantes2);

  //desestructuracion de arreglos
  //hay un arreglo sacar una parte y dando un alias
  //viene por el orden dek arrays
  const colores = ["Amarillo", "azul", "verde", "rojo", "rosado"];

  const [c1, c2, c3, c4, c5] = colores;
  console.log(c1);
  console.log(c5);
  console.log(c3);

  const [m1, m2, m3, m4, m5, m6, m7, m8] = [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
  ];
  console.log(m1);
  console.log(m2);
  console.log(m5);
  console.log(m8); //undefined

  //acceder por partes y ocupando los lugares con ,

  const [, mes2, , , mes5] = ["enero", "febrero", "marzo", "abril", "mayo"];
  console.log(mes2);
  console.log(mes5);

  //desestructuracion de objetos:viene dado por el nombre del atributo

  const automovil = {
    marca: "toyota",
    modelo: "pruis",
    anio: 2024,
    color: "plateado",
  };
  /*/desestructuracion con {}
const {marca,modelo,anio,color} = automovil;
console.log(marca);
console.log(modelo);
console.log(anio);
console.log(color);
*/

  desestructuracion(automovil);

  const {nombreP,raza,estatura} = {nombreP:"perro",raza:"pastor",estatura:"120"}
  console.log(nombreP);
  console.log(raza);
  console.log(estatura);
  //declaran un objeto  con un atributo complejo(con un atributo tipo objeto) 
  //objeto con atributos
  //y vamos a desestructurar  en especial el atributo de tipo objeto

//OBJETO
  const celular ={
    marcaC:"xiaomi",
    modeloC:"redmi13",
    hadware:{
        sensor: "proximidad",
        bateria:"12v"
    }

  }
//en dos pasoss desestructuracion objeto con atributos
 /* const {marcaC,hadware}=celular;
  const {sensor}= hadware;
  console.log(sensor);
 */
  
  //otra forma
  const {marcaC,hadware:{sensor}}=celular;
  console.log("mi ejemplo en clases celular");
  console.log(sensor);
  
  const universidad={
    nombreU: "uce",
    facultad:"Ing de ciencias",
    rector:{
        nombreR:"Juan",
        edadR:50
    }
  }
  const {facultad,rector:{nombreR},rector:{edadR}}=universidad;
  console.log("ejemplo de clases universidad");
  console.log(nombreR);
  console.log(edadR);

}
//const desestructuracion = (automovil)=>{
const desestructuracion = ({ marca, modelo, anio, color }) => {
  console.log(marca);
  console.log(modelo);
  console.log(anio);
  console.log(color);
};
