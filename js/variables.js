var id;
var control = true; // controla cuando una sección se abre y se cierra de la parte derecha
var rutas_imagenes = []; //  Arreglo que me va almacenar el numero de imagenes de las secciones
var rutas_permanentes = []; // Arreglo que va a guardar las imagenes permanentemente
var anterior = "";
var estado = false;
var control_ = true; // controla cuando una sección se abre y se cierra de la parte izquierda
var primera = true;

var contenedor_izquierda = document.querySelector(".contenedor_izquierda"); // contenedor del menu principal
var contenedor_derecha = document.querySelector(".contenedor_derecha"); // contenedor de las secciones de la derecha

var bloque = $(".secuencia");
var skip = $('.skip');

var fondos = $(".secuencia[orden]"); // Variable que sirve para ponerles el fondo a los menus principales
console.log(fondos.length);
var $mycontador = 0; // variable que contara los fondos de los menus
var control_links = true;