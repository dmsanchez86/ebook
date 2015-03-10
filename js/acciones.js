
window.onload = cargar_documento; // Funcion al momento que el documento este listo

var id;
var control = true; // controla cuando una sección se abre y se cierra
var rutas_imagenes = []; //  Arreglo que me va almacenar el numero de imagenes de las secciones
var rutas_permanentes = []; // Arreglo que va a guardar las imagenes permanentemente
var anterior = "";
var estado = false;
var control_ = true;

function cargar_documento(){
    
    var links_menu_principal = $(".barra_izquierda a");
    
    links_menu_principal.click(function(e){
        e.preventDefault();
        var top = $(this).attr("top");
        var id = $(this).attr("href");
        
        if(id==anterior){
            menu_principal(id);
            links();
        }else{
            if(control_){
                $(".contenedor_izquierda").animate({scrollTop:top}, '500',function() {
                   menu_principal(id);
                   estado=true;
                   
                   anterior=id;
                   links();
                });
            }
        }
    });
    
    var fondos = $(".secuencia[orden]");
    var $mycontador = 0;
    
    // Metodo para ponerle a cada secuencia su respectivo fondo
    fondos.each(function(ix,el){
        var partes = $(this).find("div[paginas]");
        partes.each(function(olx,oel){
            $mycontador++;
            $(this).css("background-image","url(/img/menu/secuencia/"+ $mycontador +".png)");
        });
    });
    
    
    // variables
    var inicio = document.querySelector(".inicio"); // cuadro a la hora de dar inicio a la aplicación
    
    var contenedor_izquierda = document.querySelector(".contenedor_izquierda"); // contenedor del menu principal
    var contenedor_derecha = document.querySelector(".contenedor_derecha"); // contenedor de las secciones de la derecha
    
    var tira_izquierda = document.querySelector(".tira_izquierda"); // tiras de los contenedores
    var tira_derecha = document.querySelector(".tira_derecha");
    
    var intro_izquierda1 = document.querySelector(".intro_izquierda_1"); // imagenes de la introducción
    var intro_izquierda2 = document.querySelector(".intro_izquierda_2");
    var intro_izquierda3 = document.querySelector(".intro_izquierda_3");
    var intro_izquierda4 = document.querySelector(".intro_izquierda_4");
    var intro_izquierda5 = document.querySelector(".intro_izquierda_5");
    var intro_derecha1 = document.querySelector(".intro_derecha_1");
    var intro_derecha2 = document.querySelector(".intro_derecha_2");
    var intro_derecha3 = document.querySelector(".intro_derecha_3");
    var intro_derecha4 = document.querySelector(".intro_derecha_4");
    var intro_derecha5 = document.querySelector(".intro_derecha_5"); // Fin imagenes de la introdución
    
    var barra_izquierda = document.querySelectorAll(".barra_izquierda"); // Variables que seleciona todas los menus laterales de las secciones
    var barra_derecha = document.querySelectorAll(".barra_derecha");
    
    var texto = document.querySelector(".texto"); // variable que hace cambiar el fondo de los guiones de cada sección
    
    var parte1 = document.querySelectorAll(".parte1"); // Selecciono todas las partes 1 y 2 de las secuencias
    var parte2 = document.querySelectorAll(".parte2");
    
    var paginacion = document.querySelector(".paginacion");
    
    var activo;
    
    /* Declaraciones de los eventos de cada parte de las secuencias */
    for(var i = 0; i < parte1.length && i < parte2.length; i++){
        parte1[i].onclick = function(){ // Cuando se le da click en las partes superiores de una secuencia o en la parte 1
        
            var that = this;
            var $myparent = that.parentNode; // me retorna el numero de la sección
            
            var $elparent = that.parentNode.getAttribute("orden");
            var carpeta = that.getAttribute("carpeta");
            /*var $menu = that.getAttribute("palabras-claves");
            console.log($menu);
            debugger;*/
            rutas_imagenes = that.getAttribute("paginas").split(","); // se le asigna el numero de paginas que traiga del atributo html
            
            var paginacion =  $($myparent).find(".paginacion"); // objeto que me obtiene el cuadro de paginacion de cada secuencia
            var izquierda = paginacion.find(".izquierda");
            var derecha = paginacion.find(".derecha");
            
            paginacion.attr("activo",0); // le agrego el atributo a la paginacion
            activo = 0;
            
            if(control){
                
                if(rutas_imagenes.length > 1){ // si contiene mas de una imagen la secuencia
                    
                    paginacion.css("display","block");
                    izquierda.css("display","none"); // simpre la izquierda del navegador va a iniciar oculto
                    derecha.css("display","block");
                    
                    // Asignamos los valores a nuestro arreglo permanente
                    for(var j = 0; j < rutas_imagenes.length; j++){
                        rutas_permanentes[j] = rutas_imagenes[j];
                    }
                    
                    izquierda.css("display","none"); // simpre la izquierda del navegador va a iniciar oculto
                    
                    // Click de la navegacion izquierda
                    $(izquierda).unbind("click").click(function(){
                        
                        activo = parseInt(paginacion.attr("activo")); //  se captura el texto activo
                        derecha.css("display","block");
                        
                        if (activo>0) { // Si la variable activa no llega a 0 se cambia el texto
                            $($myparent).find(".texto").css("background-image","url(/img/secuencias/"+carpeta+"/"+rutas_imagenes[activo-1]+".png)"); // cambio el fondo del texto por el anterior
                            paginacion.attr("activo",(activo-1)); // se cambia el atributo de la paginacion
                            activo = parseInt(paginacion.attr("activo")); //  se le asigna el valor a la variable activo
                        }
                        if (activo==0) { // ciando llega a 0 se oculta la navegación izquierda
                            izquierda.css("display","none");
                        }
                    });
                    
                    // Click de la navegacion derecha
                    $(derecha).unbind("click").click(function(){
                        activo = parseInt(paginacion.attr("activo"));
                        izquierda.css("display","block");
                        
                        if (activo < (rutas_imagenes.length-1)) { // si la variable activa no llega al tope del arreglo
                            $($myparent).find(".texto").css("background-image","url(/img/secuencias/"+carpeta+"/"+rutas_imagenes[activo+1]+".png)"); // cambio el fondo del texto por el siguiente
                            paginacion.attr("activo",(activo+1)); // se cambia el atributo de la paginacion
                            activo = parseInt(paginacion.attr("activo")); //  se le asigna el valor a la variable activo
                        }
                        
                        if (activo == (rutas_imagenes.length-1)) { // cuando la variable activa llega al tope
                           derecha.css("display","none"); // se oculta
                        }
                    });
                    
                }
                else{ // si solo tiene una pagina el texto no se muestra la barra de navegacion
                    paginacion.css("display","none");
                }
                
                // Animación para ajustar la seccion al contenedor
                $(contenedor_derecha).animate({scrollTop:parseInt($elparent)*600}, '1000',function(){
                    
                    that.style.top = "-265px"; //animación de abertura de las partes
                    $($myparent).find(".parte2").css("bottom","-265px");
                    $($myparent).find(".barra_derecha").css("z-index","5"); // se muestran los dos menus laterales
                    $($myparent).find(".barra_izquierda").css("z-index","5");
                    $($myparent).find(".texto").css("background-image","url(/img/secuencias/"+carpeta+"/"+rutas_imagenes[0]+".png)");
                    $($myparent).find(".texto").css("z-index","3");
                    contenedor_derecha.style.overflowY  = "hidden"; // se oculta el scroll para que la sección quede fija
                });
                control = false;
            }else{
                that.style.top = "0px"; // animacion de cierre de las imagenes
                $($myparent).find(".parte2").css("bottom","0px");
                $($myparent).find(".barra_derecha").css("z-index","-1"); // se ocultan los menus laterales
                $($myparent).find(".barra_izquierda").css("z-index","-1");
                $($myparent).find(".texto").css("z-index","1");
                contenedor_derecha.style.overflowY  = "scroll"; // se vuelve a dar el scroll al contenedor para seguir navegando en la aplucion
                activo = 0;
                control = true;
            }
        };
        parte2[i].onclick = function(){ // Cuando se le da click en las partes inferiores de una secuencia o en la parte 2
            var that = this;
            var $myparent = that.parentNode; // me retorna el numero de la sección
            
            var $elparent = that.parentNode.getAttribute("orden");
            var carpeta = that.getAttribute("carpeta");
            
            rutas_imagenes = that.getAttribute("paginas").split(","); // se le asigna el numero de paginas que traiga del atributo html
            
            var paginacion =  $($myparent).find(".paginacion"); // objeto que me obtiene el cuadro de paginacion de cada secuencia
            var izquierda = paginacion.find(".izquierda");
            var derecha = paginacion.find(".derecha");
            
            paginacion.attr("activo",0); // le agrego el atributo a la paginacion
            activo = 0;
            
            if(control){
                
                if(rutas_imagenes.length > 1){
                    
                    paginacion.css("display","block");
                    izquierda.css("display","none"); // simpre la izquierda del navegador va a iniciar oculto
                    derecha.css("display","block");
                    
                    for(var j = 0; j < rutas_imagenes.length; j++){
                        rutas_permanentes[j] = rutas_imagenes[j];
                    }
                    
                    // Click de la navegacion izquierda
                    $(izquierda).unbind("click").click(function(){
                        activo = parseInt(paginacion.attr("activo"));
                        derecha.css("display","block");
                        
                        if (activo>0) {
                            $($myparent).find(".texto").css("background-image","url(/img/secuencias/"+carpeta+"/"+rutas_imagenes[activo-1]+".png)");
                            paginacion.attr("activo",(activo-1));
                             activo = parseInt(paginacion.attr("activo"));
                        }
                        if (activo==0) {
                            izquierda.css("display","none");
                        }
                    });
                    
                    // Click de la navegacion derecha
                    $(derecha).unbind("click").click(function(){
                        activo = parseInt(paginacion.attr("activo"));
                        izquierda.css("display","block");
                        
                        if (activo < (rutas_imagenes.length-1)) {
                            console.log(typeof mirutaactual);
                            $($myparent).find(".texto").css("background-image","url(/img/secuencias/"+carpeta+"/"+rutas_imagenes[activo+1]+".png)");
                            paginacion.attr("activo",(activo+1));
                             activo = parseInt(paginacion.attr("activo"));
                        }
                        
                        if (activo == (rutas_imagenes.length-1)) {
                           derecha.css("display","none");
                        }
                    });
                    
                }
                else{
                    paginacion.css("display","none");
                }
                
                // Animación para ajustar la seccion al contenedor
                $(contenedor_derecha).animate({scrollTop:parseInt($elparent)*600}, '1000',function(){
                    
                    that.style.bottom = "-265px"; //animación de abertura de las partes
                    $($myparent).find(".parte1").css("top","-265px");
                    $($myparent).find(".barra_derecha").css("z-index","5"); // se muestran los dos menus laterales
                    $($myparent).find(".barra_izquierda").css("z-index","5");
                    $($myparent).find(".texto").css("background-image","url(/img/secuencias/"+carpeta+"/"+rutas_imagenes[0]+".png)");
                    $($myparent).find(".texto").css("z-index","3");
                    contenedor_derecha.style.overflowY  = "hidden"; // se oculta el scroll para que la sección quede fija
                });
                control = false;
            }else{
                that.style.bottom = "0px"; // animacion de cierre de las imagenes 
                var $myparent = that.parentNode;
                $($myparent).find(".parte1").css("top","0px");
                $($myparent).find(".barra_derecha").css("z-index","-1"); // se ocultan los menus laterales
                $($myparent).find(".barra_izquierda").css("z-index","-1");
                $($myparent).find(".texto").css("z-index","1");
                contenedor_derecha.style.overflowY  = "scroll"; // se vuelve a dar el scroll al contenedor para seguir navegando en la aplucion
                activo = 0;
                control = true;
            }
        };
    }
    
    // Variables que controlan el desplazamineto del inicio
    var top = 0;
    var topn = -3000;
    
    inicio.onclick = iniciar; // cuando se le da en el cuadro del inicio
    
    // Eventos para los menus laterales
    for(var j = 0; j < barra_izquierda.length; j++){
        barra_izquierda[j].onmouseover = mostrar_barra_izquierda;
        barra_izquierda[j].onmouseout = ocultar_barra_izquierda;
        barra_derecha[j].onmouseover = mostrar_barra_derecha;
        barra_derecha[j].onmouseout = ocultar_barra_derecha;
    }
    
    // Funciones
    function iniciar(event){
        // Se le da scroll a los contenedores para poder que funcione la aplicación
        contenedor_derecha.style.overflowY  = "scroll";
        contenedor_izquierda.style.overflowY = "scroll";
       
        id =  setInterval(function(){
            // Se le va restando al top y al bottom de las tiras de los contenedores
            tira_izquierda.style.top = "-"+top+"px";
            tira_derecha.style.top = topn+"px";
            
            if(top === 3000){
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
                clearInterval(id); // se para la animación
                return;
            }else{
                // Velocidad de la animacion
                if(top < 2920){
                    top = top + 300;
                    topn = topn + 300;
                }
                else{
                    console.log(top);
                    top = top + 2;
                    topn = topn + 2;
                }
            }
        },20);
        
        this.style.zIndex = -1;
        this.style.display = "none";
       
    }
    
    // Métodos de los menus laterales
    function mostrar_barra_izquierda(event){
        this.style.left = "-27px";
    }
    
    function mostrar_barra_derecha(event){
        this.style.right = "-15px";
    }
    
    function ocultar_barra_izquierda(event){
        this.style.left = "-90px";
    }
    
    function ocultar_barra_derecha(event){
        this.style.right = "-60px";
    }
}

// Método para hacer la animacion de las secciones del menu principal
function menu_principal(id){
    
    var superior = $(id).find(".superior");
    var inferior = $(id).find(".inferior");
    
    superior.unbind("click").click(function(){
        var top = $(this).parent().attr("top");
        $(".contenedor_izquierda").animate({scrollTop:top}, '1000');
        if(!control_){control_=true;}
        else{control_=false;}
        condicion();
        links();
    });
    
    condicion();
    
    function condicion(){
        if(control_){
            superior.css({"top":"-530px","cursor":"pointer"});
            inferior.css({"bottom":"-20px"});
            $(".material").css("z-index","2");
            $(".contenedor_izquierda").css("overflow-y","hidden"); 
            
            control_ = false;
        }
        else{
            superior.css({"top":"0px","cursor":"initial"});
            inferior.css({"bottom":"0px"});
            $(".material").css("z-index","-1");
            $(".contenedor_izquierda").css("overflow-y","scroll");
            
            control_ = true;
        }
    }
}

// Método para animar la seccion del menu principal
function alloc(id){
  var id_ = "#" + $(id).attr("id");
  var $top = $(id).attr("top");
   $(".contenedor_izquierda").animate({scrollTop:$top}, '800',function(){
        menu_principal(id_);
        anterior="#"+$(id).attr("id");
        links();
   });
  
}

// Método para colorear los links de la barra izquerda de cada secuencia
function links(){
    var links_barra_izquierda = $(".barra_izquierda a");
    var imagen = "";
    var l = "";
    if(!control_){
        for (var i = 0; i < links_barra_izquierda.length; i++) {
            l = links_barra_izquierda[i].hash;
            imagen =  links_barra_izquierda[i].lastChild.className;
            $(links_barra_izquierda[i]).children().css("cursor","no-drop");
            if(anterior == l){
                $(links_barra_izquierda[i]).children().css("background-image","url(/img/menu/secuencia/"+imagen+"h.png)");
                $(links_barra_izquierda[i]).children().css("cursor","pointer");
                $(links_barra_izquierda[i]).children().attr("title","Mostrar");
            }
        }
    }else{
        for (var i = 0; i < links_barra_izquierda.length; i++) {
            l = links_barra_izquierda[i].hash;
            imagen =  links_barra_izquierda[i].lastChild.className;
            console.log("imagen: "+imagen);
            $(links_barra_izquierda[i]).children().css("cursor","pointer");
            $(links_barra_izquierda[i]).children().css("background-image","url(/img/menu/secuencia/"+imagen+".png)");
            $(links_barra_izquierda[i]).children().attr("title","Cerrar");
        }
    }
  
}

