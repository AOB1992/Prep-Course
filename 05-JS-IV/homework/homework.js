// No cambies los nombres de las funciones.

const { CONFIG_ERROR_MODE_REQUIRED } = require("simple-git/src/lib/tasks/clean")

function crearGato (nombre, edad) {
  // Crear un nuevo objeto con la propiedad "nombre" y el valor definido como el argumento "nombre".
  // Agrega una propiedad al objeto con el nombre "edad" y usa el valor definido en el argumento "edad"
  // Agrega un método (funcion) llamado "meow" que devuelva el string "Meow!"
  // Devuelve el objeto
  // Tu código:
  var novoobjeto = {
    nombre: nombre,
    edad: edad,
    meow: function() {
      return "Meow!"
    }
  }
  return novoobjeto
}

function agregarPropiedad (objeto, property) {
  // Agrega una propiedad al objeto (argumento "objeto") con el valor `null`
  // Devuelve el objeto
  // NOTA: El nombre de la propiedad no es "propiedad", el nombre es el valor del argumento llamado "property" (una cadena/string)
  // Tu código:
  var novoobjeto = objeto
  novoobjeto[property] = null
  return novoobjeto
}

function invocarMetodo (objeto, metodo) {
  // "metodo" es una cadena que contiene el nombre de un método (funcion) en el objeto
  // Invoca ese método
  // Nada necesita ser devuelto ("returned")
  // Tu código:
  var apalapa = ""
  var novoobjeto = objeto
  objeto[metodo]()
}

function multiplicarNumeroDesconocidoPorCinco (objetoMisterioso) {
  // "objetoMisterioso" tiene una propiedad llamada "numeroMisterioso"
  // Multiplica el numeroMisterioso por 5 y devuelve el producto
  // Tu código:
var drei = 3
var lala = objetoMisterioso

drei = lala.numeroMisterioso 
drei = drei * 5
return drei
}

function eliminarPropiedad (objeto, unaPropiedad) {
  // Elimina la propiedad de objeto cuyo nombre está pasado por el parametro unaPropiedad
  // tip: tenes que usar bracket notation
  // Devuelve el objeto
  // Tu código:
  var lala = objeto
  delete lala[unaPropiedad]
  return lala
}

function nuevoUsuario (nombre, email, password) {
  // Crea un nuevo objeto con las propiedades coincidiendo con los argumentos que se pasan a la función
  // Devuelve el objeto
  // Tu código:
  const novoboto = {
    nombre: nombre,
     email: email,
     password: password,
  }
return novoboto
}

function tieneEmail (usuario) {
  // Devuelve "true" si el usuario tiene un valor definido para la propiedad "email"
  // De lo contratio, devuelve "false"
  // Tu código:
  if (usuario["email"] === null) {return false}
  if (usuario["email"] == undefined) {return false}
  if (usuario["email"] !== null) {return true}
}

function tienePropiedad (objeto, propiedad) {
  // Devuelve "true" si el objeto (parámetro "objeto") tiene una propiedad (key) cuyo nombre es igual al valor del argumento "propiedad"
  // "propiedad" es un string
  // De lo contrario, devuelve "false"
  // Tu código:
  if (objeto[propiedad] == undefined) { return false}
  return true
}

function verificarPassword (usuario, password) {
  // Comprueba si la "password" enviada coincide con la propiedad "password" del objeto "usuario"
  // Devuelve "true" si coinciden
  // De lo contrario, devuelve "false"
  // Tu código:
  if ( usuario.password === password) {return true}
  return false
}

function actualizarPassword (usuario, nuevaPassword) {
  // Reemplaza la contraseña existente en el objeto "usuario" con el valor de "nuevagPassword"
  // Devuelve el objeto
  // Tu código:
  usuario.password = nuevaPassword
  return usuario
}

function agregarAmigo (usuario, nuevoAmigo) {
  // "usuario" tiene una propiedad llamada "amigos" que es un array
  // Agrega "nuevoAmigo" al final de ese array
  // Devuelve el objeto "usuario"
  // Tu código:
  usuario.amigos.push (nuevoAmigo)
  return usuario
}

function pasarUsuarioAPremium (usuarios) {
  // "usuarios" es un array de objetos "usuario"
  // Cada objeto "usuario" tiene la propiedad "esPremium"
  // Define cada propiedad "esPremium" de cada objeto como "true"
  // Devuelve el array de usuarios
  // Tu código:
  var errey = []
  
  errey = usuarios
  
    for ( i = 0 ; i < errey.length ; i++) {

        errey [i]["esPremium"] = true
       
      }
    
      return  errey
      
}

function sumarLikesDeUsuario (usuario) {
  // "usuario" tiene una propiedad llamada "posts" que es un array
  // "posts" es un array de objetos "post"
  // Cada objeto "post" tiene una propiedad llamada "likes" que es un entero (int/integer)
  // Suma todos los likes de todos los objetos "post"
  // Devuelve la suma
  // Tu código:
var sumatoria = 3
sumatoria = 0
var erreyposts = usuario.posts

for (i = 0; i < erreyposts.length; i++) {
  
sumatoria = sumatoria + erreyposts[i]["likes"]

}
  return sumatoria
  //return erreyposts[0]["likes"]
}

function agregarMetodoCalculoDescuento (producto) {
  // Agregar un método (función) al objeto "producto" llamado "calcularPrecioDescuento"
  // Este método debe multiplicar el "precio" del "producto" ("producto.precio" o "producto[precio]") y "porcentajeDeDescuento" para obtener el descuento
  // El método resta el descuento del precio y devuelve el precio con descuento
  // Devuelve el objeto "producto" al final de la función
  // Ejemplo:
  // producto.precio -> 20
  // producto.porcentajeDeDescuento -> 0.2 (o simplemente ".2")
  // producto.calcularPrecioDescuento() -> 20 - (20 * 0.2)
  // Tu código:

// como agregar una funcion a un objeto

  //la funcion
 producto.calcularPrecioDescuento = function calcularPrecioDescuento() {
    var precioso = 0
    var descontoso = 1 -  this.porcentajeDeDescuento
    precioso = this.precio * descontoso
    return precioso
  }
  return producto
 } 
 

 
 //function calcularPrecioDescuento (producto) {
//var precioso = 0
//var descontoso = 1 -  producto.porcentajeDeDescuento
//precioso = producto.precio * descontoso
///return precioso
//return producto
  
//

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  crearGato,
  agregarPropiedad,
  invocarMetodo,
  multiplicarNumeroDesconocidoPorCinco,
  eliminarPropiedad,
  nuevoUsuario,
  tieneEmail,
  tienePropiedad,
  verificarPassword,
  actualizarPassword,
  agregarAmigo,
  pasarUsuarioAPremium,
  sumarLikesDeUsuario,
  agregarMetodoCalculoDescuento
}
