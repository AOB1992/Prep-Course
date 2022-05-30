// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array [0]
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
var arrable = []
arrable = array
var devolvetion = arrable [arrable.length - 1]
  return devolvetion
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:

  return array.length
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:

  var devolvetion = []

  for ( i = 0 ; i < array.length ; i++) {

devolvetion [i] = array [i] + 1

  }

  return devolvetion
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  var devolvetion = []
  devolvetion = array
  devolvetion.push (elemento)
  return devolvetion
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:

  var errey = []
  errey = array
  errey.unshift (elemento)

  return errey
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  //if (i = 0) {
   // devolvetion = devolvetion +  palabras[i] + " "
  //}else if (i = palabras.length) {
   // devolvetion = devolvetion + palabras[i]
  //}else {
   // devolvetion = devolvetion + palabras[i] + " "
  //}


 //if ( i = palabras.length) {
   // devolvetion = devolvetion + palabras[i]  
    //return devolvetion
   //}
  var devolvetion = "hola"
devolvetion = ""
var retornation = "casa"
retornation = ""

  for (i = 0 ; i < palabras.length; i++){

    
    devolvetion = devolvetion + palabras[i] + " "

  }

  for (i = 0 ; i < devolvetion.length - 1; i++) {

retornation = retornation + devolvetion[i]

  }

  return retornation
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:

  var contenido = []
  contenido = array

  for (i = 0 ; i <= contenido.length - 1; i++) {

if (contenido [i] === elemento) {
  return true
}

  }

  return false
}
  


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var sumation = []
  var sumatta = 2
  sumatta = 0
  sumation = numeros

  for (i = 0; i<= sumation.length - 1 ; i++) {

sumatta = sumatta + sumation[i]


  }
  return sumatta
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:

  var sumation = []
  var sumatta = 2
  sumatta = 0
  sumation = resultadosTest

  for (i = 0; i<= sumation.length - 1 ; i++) {

sumatta = sumatta + sumation[i]


  }
  return sumatta / sumation.length
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
var ipi = []
ipi = numeros
var altius = true

//probar ahora con false 

//if ( ipi [i] < ipi [i] ) {
  //altius = false
  //return "se puso false en i" + i + " y en z " + z 
//}

  for (let i = 0; i <= ipi.length - 1; i++) { // bucle que va a tomar cada numero para comparar
    altius = true
   for (let z = 0; z < ipi.length - 1; z++) {
    if ( ipi [i] < ipi [z] ) {
      altius = false
      //return "hayn un mayor el  ipi [i] es /" + ipi [i] + "/" + "    ipi [z] es /" +  ipi [z] + " i es " + i + " z es " + z
    }
    
   } //fin for z
   if ( altius === true) {return ipi [i]}
} //fin for i

return "final"

} // fin función


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  var sumatoria = []
  sumatoria = arguments
var sumation = 3
sumation = 1

if (sumatoria.length === 0 ) { return 0}
if (sumatoria.length === 1 ) { return sumatoria[0]}

for (i = 0; i<= sumatoria.length - 1 ; i++) {

sumation = sumation * sumatoria [i]
}
return sumation
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí

var sumatoria = []
sumatoria = arreglo
var cuenta18 = 0

for (i= 0; i<= sumatoria.length - 1; i++) {

if (sumatoria[i] > 18) {cuenta18 = cuenta18 + 1}

}

return cuenta18
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  switch (numeroDeDia) {
    case 1:
      return "Es fin de semana"
      case 2:
        return "Es dia Laboral"
        case 3:
        return "Es dia Laboral"
        case 4:
        return "Es dia Laboral"
        case 5:
        return "Es dia Laboral"
        case 6:
        return "Es dia Laboral"
      case 7:
        return "Es fin de semana"
  }
  
      
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  
let parrey = ["ab", "cd"]

var lala = "hola"
lala = ""
lala = "h" + n


lala = parrey.unshift(lala)

if (parrey[0][1] == 9) { return true}

return false
}

function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  
  var ipi = []
  ipi = arreglo
  var altius = true
  
 
  
    for (let i = 0; i <= ipi.length - 1; i++) { // bucle que va a tomar cada numero para comparar
     for (let z = 0; z < ipi.length - 1; z++) {
      if ( ipi [i] == ipi [z] ) {
        
        //return "hayn un mayor el  ipi [i] es /" + ipi [i] + "/" + "    ipi [z] es /" +  ipi [z] + " i es " + i + " z es " + z
      }else {
        altius = false
      }
      
     } //fin for z
     if ( altius === true) {return true}
  } //fin for i
  
  return false

} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:

  var paladin = []
  var estamarzo = false
  var estanoviembre = false
  var estaenero = false
  
paladin = array
  
//for ( i = 0; i < paladin.length - 1; i++ ) {
  //papa = paladin.push(i)
//}


  return paladin.length
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:

var ipi = []
var neuipi = []
var usheo = 0
usheo = ""
ipi = array

for ( i = 0; i < ipi.length - 1 ; i++) {

  if ( ipi[i] > 100) {
    usheo = neuipi.push(ipi[i])
  }
}
return neuipi

}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:

  var pilin = numero
var airray = []
var igualdad = ""

  for (i = 1 ; i < 11 ; i++) {
pilin = pilin + 2
if ( pilin === i) {

  return "Se interrumpió la ejecución"
}
igualdad = airray.push(pilin)
  }


  return airray
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:

  var pilin = numero
  var airray = []
  var igualdad = ""
  
    for (i = 1 ; i < 11 ; i++) {
      if ( i === 5) {
        continue
      }
  pilin = pilin + 2
  
  igualdad = airray.push(pilin)
    }
  
  
    return airray
  }




// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
