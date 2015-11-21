
window.onload = cargar_documento; // Funcion al momento que el documento este listo

function cargar_documento(){
    // variables
    var tira_izquierda = document.querySelector(".tira_izquierda"), // tiras de los contenedores
        tira_derecha = document.querySelector(".tira_derecha"),
        intro_izquierda1 = document.querySelector(".intro_izquierda_1"), // imagenes de la introducción
        intro_izquierda2 = document.querySelector(".intro_izquierda_2"),
        intro_izquierda3 = document.querySelector(".intro_izquierda_3"),
        intro_izquierda4 = document.querySelector(".intro_izquierda_4"),
        intro_izquierda5 = document.querySelector(".intro_izquierda_5"),
        intro_derecha1 = document.querySelector(".intro_derecha_1"),
        intro_derecha2 = document.querySelector(".intro_derecha_2"),
        intro_derecha3 = document.querySelector(".intro_derecha_3"),
        intro_derecha4 = document.querySelector(".intro_derecha_4"),
        intro_derecha5 = document.querySelector(".intro_derecha_5"), // Fin imagenes de la introdución
        texto = document.querySelector(".texto"), // variable que hace cambiar el fondo de los guiones de cada sección
        parte1 = document.querySelectorAll(".parte1"), // Selecciono todas las partes 1 y 2 de las secuencias
        parte2 = document.querySelectorAll(".parte2"),
        paginacion = document.querySelector(".paginacion"),
        activo,
        menu_left = document.querySelectorAll(".menu .paginacion .left"),
        menu_right = document.querySelectorAll(".menu .paginacion .right"),
        top = 0, // Variables que controlan el desplazamiento del inicio
        topn = -3000;
    
    // Llamada a los métodos
    ocultar_cargador();
    links_menu_izquierda();
    fondos_menu_principal();
    
    //animacion de sprites de la 11 secuencias
    ANTORCHA.animate11();
    ANTORCHA.animate9();
    ANTORCHA.animate10();
    
    for(var k = 0; k < menu_left.length ; k++){
        menu_left[k].onclick = paginacion_menu;
        menu_right[k].onclick = paginacion_menu;
    }
    
    /* Declaraciones de los eventos de cada parte de las secuencias */
    for(var i = 0; i < parte1.length && i < parte2.length; i++){
        parte1[i].onclick = mostrar_contenido_derecha;
        parte2[i].onclick = mostrar_contenido_derecha;
    }
    
    // cuadro a la hora de dar inicio a la aplicación
    $(".inicio").click(iniciar);
    
    // Método para saltarse el intro de la aplicacion
    $('.skip').click(fin_intervalo);
    
    // Método que anima los contenedores
    function iniciar(){
        $(".menuinicio").hide(); // Se oculta el menu del unicio
        
        // Se le da scroll a los contenedores para poder que funcione la aplicación
        contenedor_derecha.style.overflowY  = "scroll";
        contenedor_izquierda.style.overflowY = "scroll";
    
        ANTORCHA.play(); // Se reproduce el sonido de fondo
       
        var audio = document.getElementById("selvaAudio");
        id =  setInterval(function(){
            // Se le va restando al top y al bottom de las tiras de los contenedores
            tira_izquierda.style.top = "-"+top+"px";
            tira_derecha.style.top = topn+"px";
            
            if(top === 3000){
                fin_intervalo();
                return;
            }else{
                // Velocidad de la animacion - default = 10px !!!
                if(top < 2880){
                    top = top + 10;
                    topn = topn + 10 ;
                }
                else{ // Efecto de frenado al final de la animacion de las tiras
                    top = top + 5;
                    topn = topn + 5;
    				try{audio.volume -= 0.1;}catch(e){}
                }
                skip.fadeIn('1000');
            }
        },60);
        this.style.zIndex = -1;
        this.style.display = "none";
    }
    
    // Método Que me salta la animación del inicio
    function fin_intervalo(){
        // se ocultan todas las imagenes de la introduccion para que no se de scroll hacia arriba
        tira_izquierda.style.top ="0px";
        intro_derecha1.style.display = "none";
        intro_derecha2.style.display = "none";
        intro_derecha3.style.display = "none";
        intro_derecha4.style.display = "none";
        intro_derecha5.style.display = "none";
        intro_izquierda1.style.display = "none";
        intro_izquierda2.style.display = "none";
        intro_izquierda3.style.display = "none";
        intro_izquierda4.style.display = "none";
        intro_izquierda5.style.display = "none";
        $('.indice_derecha').fadeIn('3000'); // Se hacen visibles los menus de los indices
        $('.indice_izquierda').fadeIn('3000');
        skip.fadeOut('1000');
        clearInterval(id); // se para la animación
        ANTORCHA.stop(); // se para el audio
        tira_izquierda.style.top = "0px";
        tira_derecha.style.top = "0px";
    }
}

// carga los contenidos de los menus principales
function cargar_menus(){
    $.ajax({
        url: "/ebookapp/php/index.php",
        type: "POST",
        data: {
            menu: "1"
        },
        success : function(data){
            var array = JSON.parse(data);
            var menu = $(".menu");
            var datos = {};
            for(var i = 0; i < array.length; i++){
                datos = array[i].data;
                var obj = JSON.parse(datos);
            }
        }
    });
}