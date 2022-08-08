// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  casa =  Object.keys(objeto)
borrado = new Array
respuesta = new Array
agregado = new Array

for (i = 0; i<= casa.length - 1 ;i++) {

  //agregado = borrado //borro data anterior
  agregado.push(casa[i])
  agregado.push(objeto[casa[i]])
respuesta.push(agregado)
agregado = borrado
}

 //return objeto[casa[0]]// + " yyy  c" + casa [1]  + " yyy  c" + casa [2]  + " yyy  c" + casa [3]  + "lenght es  " + casa.length
 //agregado.push("x")
  ///agregado.push(1)
//respuesta.push(agregado)
return respuesta
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el string y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
var obj = {}

//asignar valores numéricos primero

for (i= 0; i<= string.length - 1; i++){

  obj[string[i]] = 0

}
  for (i= 0; i<= string.length - 1; i++){

    obj[string[i]] = obj[string[i]] + 1

  }



//obj["casa"] = 1
// obj["casa"] =  obj["casa"] + 1
//funciona esto

return obj
}
function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí

  var mayusculas = ""
  var minusculas = ""
  var respuesta = ""

  for (i = 0; i <= s.length - 1; i++) {

     if ( s[i] === s[i].toUpperCase() )    {mayusculas = mayusculas + s[i]}            //SI ES MAYUSCULA AGREGAR A MATRIZ/STRING "MAYUSCULAS"
     if ( s[i] === s[i].toLowerCase() )    {minusculas = minusculas + s[i]}          //SI ES MINUSCULA AGREGAR EN STRING "MINUSCULAS"
  }

respuesta = mayusculas + minusculas
  return respuesta
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí

  //PRIMERO HACER CON UN FOR PASANDO LETRA POR LETRA
//UNA MATRIZ DE MATRICES DE DOS VALORES QUE SIGNIFICAN INICIO 
//Y FIN DE CADA PALABRA

erreycor = new Array

erreyagregado = new Array
borrado = new Array
lastindex = 0

for (i = 0; i <= str.length - 1; i++) {

if ( str[i] === " ") { // SI ES UN ESPACIO MARCAR LAS COORDENADAS DE LA PALABRA ANTERIOR
//erreyagregado.push(lastindex + 1)
//erreyagregado.push(i)
//erreycor.push(erreyagregado)
erreycor.push(i)
//erreycor.push(str[i])
lastindex = i
//erreyagregado = borrado
}
}

//erreycor.push(erreycor.length) //AGREGAR UNA MAS PARA QUE AGARRE LA ULTIMA PALABRA
//GENERAR MATRIZ DE PALABRAS
erreypalabras = new Array
var indexstart = 0
var indexfinish = 1
var cantidadpalabras = 0
var palabra = ""
cantidadpalabras = erreycor.length 

for ( z = 0; z <= cantidadpalabras; z++) { //BUCLE PARA ITERAR TODAS LAS PALABRAS

  indexfinish = erreycor[z]
  if (z === cantidadpalabras ) { indexfinish = str.length }    //SI ES LA PALABRA FINAL PONER INDEXFINISH STR.LENGHT
  for ( i= indexstart; i < indexfinish ; i++) {// BUCLE QUE CREA UNA PALABRA

    palabra = palabra + str[i]
    
    
    
    }//TERMINA BUCLE QUE CREA PALABRA
    erreypalabras.push(palabra)
    indexstart = indexfinish + 1
    palabra = ""
  }//TERMINA BUCLE PALABRAS

  //AHORA DAR VUELTA LAS PALABRAS DE LA MATRIZ ERREYPALABRAS
    erreypalabrasback = new Array
  //FUNCIÓN DAR VUELTA PALABRA
  wordbackable = "casa"
  cuenta = wordbackable.length - 1
  wordresultado = ""

  for (z  = 0; z <= erreypalabras.length - 1; z++) { //BUCLE ITERA MATRIZ
    wordbackable = erreypalabras[z]

    cuenta = wordbackable.length - 1

    for (i= 0; i<= wordbackable.length - 1; i++) { //BUCLE DA VUELTA PALABRA
      wordresultado = wordresultado + wordbackable[cuenta]
      cuenta = cuenta - 1
      
      } // FIN BUCLE DA VUELTA PALABRA
      erreypalabrasback.push(wordresultado)
      wordresultado = ""
  }//FIN BUCLE ITERA MATRIZ
  
  resposta = ""

  //PASAR DE MATRIZ erreypalabrasback A STRING resposta

  for (i = 0; i<= erreypalabrasback.length - 1; i++) {

    if ( i === 0) {
      resposta = resposta  + erreypalabrasback[i]
    } else  {
      resposta = resposta + " " + erreypalabrasback[i]
    }
    
  }

    return resposta
}





function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí

  //primero darlo vuelta

  var numerostr = ""
  var numeroreves = "casa"
  numeroreves = ""
  var cuenta = 0

  numerostr = numero.toString()

  cuenta = numerostr.length - 1

  for (i= 0; i<= numerostr.length - 1; i++) {
numeroreves = numeroreves + numerostr[cuenta]
cuenta = cuenta - 1
  }

if (numerostr == numeroreves) {
  return "Es capicua" 

} else {
return "No es capicua"
  }

}
  



function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí

  var novastr = ""
  var sumar = "si"
  
    for (i = 0; i <= cadena.length - 1; i++) {

      //sumar = "si"

      //if (cadena[i] == "a") { sumar = "no"}
     // if (cadena[i] == "b") { sumar = "no"}
      //if (cadena[i] == "c") { sumar = "no"}

      if (cadena[i] === "a") {

      }else if (cadena[i] === "b") {

        } else if (cadena[i] === "c"){

        }
        else {
          novastr = novastr + cadena[i]
        }
      }

    //  if (sumar = "si") { novastr = novastr + cadena[i]}

     
    // novastr = novastr + cadena[i]
    return novastr
    }
  
    




function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
var nuevoarreglo = new Array
var prueba = new Array
var ar1 = new Array
var ar2 = new Array
ar1 = arreglo1
ar2 = arreglo2

for (let i = 0; i <= ar1.length - 1; i++) { //Bucle que itera primera matriz)

    for (let z = 0; z <=ar2.length - 1; z++) { //Bucle que itera segunda matriz)
        prueba.push ("arreglo1 es " + ar1[i])
        prueba.push("arreglo2 es " +ar2[z])
       if (ar1[i] === ar2[z])    { nuevoarreglo.push (ar1[i]) } //Comparar valores
         
                                             
    }
    
}
 

return nuevoarreglo
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

