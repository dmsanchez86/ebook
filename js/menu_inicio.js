// Método para los clickc del menu del inicio
$(".menuinicio a div").click(function(e) {
   var link = e.target.id;
   var id = "."+link;
   $(id).css({"opacity":"1","z-index":"999999"});
});

// Método para cerrar los modales del menu del inicio
$(".close").click(function(e){
    var modales = $(".close");
    $(modales).parent().parent().css({"opacity":"0","z-index":"-1"});
});    

// Cuando se le da click en las equis de las secuencias y de los menus principales
$(".secuencia .cerrar").click(function(){
    $(this).parent().parent().find(".parte2").click();
});
$(".guion .cerrar").click(function(){
    $(this).parent().parent().find(".superior").click();
});
// Cuando se le da click en las imagenes animadas de las secuencias
$(".area_squareup").click(function(){
    $(this).parent().find(".parte1").click();
});
$(".area_squaredown").click(function(){
    $(this).parent().find(".parte2").click();
});
// Método para agregarle el efecto a las imagenes de material interactivo
$(".item").mouseenter(function(){
    $(this).find("div").addClass("return");
}).mouseleave(function(){
    $(this).find("div").removeClass("return");
});

// Metodos de los menu principal huellas de libertad y saudo
$(".inicio_menu").click(animar_menus_principales);

// Metodo para los clicks de la parte de los indices
$('.indice_derecha > div').click(animar_contenedor_derecha);

$('.indice_izquierda > div').click(animar_contenedor_izquierda);

// click en el icono de conoce atarraya
$(".atarraya").click(atarraya); 

$(".section-item").click(barra_derecha);

$(".section-item-entrevista").click(barra_derecha);

$(".section-item-audio").click(barra_derecha);

$(".section-item-foto").click(barra_derecha);

$(".section-item-video").click(barra_derecha);

$(".section-item-storyboard").click(barra_derecha);

$('.animacion_pluma').click(punto);

$('.closebtn').click(close);