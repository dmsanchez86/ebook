// Método de los enlaces en la barra derecha decada secuencia
function barra_derecha(e){
    var clase = e.target.className;
    var $this_element = "";
    var $seccion = "";
    var $estadomenu = "";
    
    if(clase == "return"){
        $this_element = $(this).attr("data-content");
        $seccion = "ilustraciones";
    }else if(clase == "videos section-item-video"){
        $estadomenu = $(this).parent().parent().attr("activo-menu");
        $this_element = $(this).attr("data-content"+$estadomenu);
        $seccion = "videos";
    }
    else if(clase == "audios section-item-audio"){
        $estadomenu = $(this).parent().parent().attr("activo-menu");
        $this_element = $(this).attr("data-content"+$estadomenu);
        $seccion = "audios";
    }
    else if(clase == "materiales section-item-storyboard"){
        $estadomenu = $(this).parent().parent().attr("activo-menu");
    	$this_element = $(this).attr("data-content"+$estadomenu);
    	$seccion = "storyboard";
    }
    else if(clase == "mensajes section-item-entrevista"){
        $estadomenu = $(this).parent().parent().attr("activo-menu");
        $this_element = $(this).attr("data-content"+$estadomenu);
        $seccion = "entrevistas";
    }
    else if (clase == "imagenes section-item-foto"){
        $estadomenu = $(this).parent().parent().attr("activo-menu");
        $this_element = $(this).attr("data-content"+$estadomenu);
        $seccion = "fotos";
    }
    
    antorcha.popUpIn(".modal-pop-up",$this_element,$seccion);
    setTimeout(function(){
        $('.contenedor').css({
            'position':'relative'
        });
    },500);
}

// Método que me oculta el cargador cuando el documento esta listo
function ocultar_cargador(){
    $(".bgLoader").fadeOut(); // Se oculta el cargador cuando el documento este listo
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
            superior.css({"top":"-518px","cursor":"pointer"});
            $('.indice_izquierda').fadeOut('3000');
            inferior.css({"bottom":"-20px"});
            $(".material").css("z-index","2");
            $(".contenedor_izquierda").css("overflow-y","hidden"); 
            
            control_ = false;
        }
        else{
            superior.css({"top":"0px"});
            $('.indice_izquierda').fadeIn('3000');
            inferior.css({"bottom":"0px"});
            $(".material").css("z-index","-1");
            $(".contenedor_izquierda").css("overflow-y","scroll");
            
            control_ = true;
        }
    }
}

// Método para modificar el estado de los links cuando se cargan por ajax 
function links_menu_izquierda(){
        var links_menu_principal = document.querySelectorAll(".barra_izquierda a");

        for(var i = 0; i < links_menu_principal.length;i++){
            // cuando se le da click a los links de los menus principales
            links_menu_principal[i].onclick = function(e){
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
                    }else{
                        if(!control_){
                            e.preventDefault();
            				var allparents = $(this).parent().parent();
            				var activo = allparents.find("a[activo=true]");
                            
                            activo.attr('activo','false');
                            activo.click();
                            
                            $(this).attr('activo','true');
                            top = $(this).attr('top');
                            $(".contenedor_izquierda").animate({scrollTop:top}, '1500',function(){
                                menu_principal(id);
                                estado=true;
                                $(this).attr('activo','true');
                                anterior=id;
                                control_ = false;
                            });
                             return;
                        }else{
                            return;
                        }
                    }
                }
                return;
            }
        }
    
}

// Método para colorear los links de la barra izquerda de cada secuencia
function links(){
    var links_barra_izquierda = $(".barra_izquierda a"); // se obtinene todos los links
    var imagen = ""; // variable que me pondra el background correspondiente
    var l = ""; 
    if(!control_){ // cuando ya se le ha dado click en alguna se colorea el link
        for (var i = 0; i < links_barra_izquierda.length; i++) {
            l = links_barra_izquierda[i].hash;
            imagen =  links_barra_izquierda[i].lastChild.className;
            $(links_barra_izquierda[i]).attr("activo","false");
            if(anterior == l){
                $(links_barra_izquierda[i]).children().css("background-image","url(/ebookapp/img/menu/secuencia/"+imagen+"h.png)");
                $(links_barra_izquierda[i]).children().css("cursor","pointer");
				$(links_barra_izquierda[i]).attr("activo","true");
                $(links_barra_izquierda[i]).children().attr("title","Cerrar Palabra Clave");
				
            }
        }
    }else{ // no se a clickeado ningun link
        for (var i = 0; i < links_barra_izquierda.length; i++) {
            l = links_barra_izquierda[i].hash;
            imagen =  links_barra_izquierda[i].lastChild.className;
            $(links_barra_izquierda[i]).children().css("cursor","pointer");
            $(links_barra_izquierda[i]).children().css("background-image","url(/ebookapp/img/menu/secuencia/"+imagen+".png)");
            $(links_barra_izquierda[i]).children().attr("title","Ir a Palabra Clave");
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

// Método de la paginacion del menu Huellas de libertad
function paginacion_menu(e){
    try{
            
        var secuencia = e.path[2].id;
        
        var titulo = e.path[2].children[2].children[0]; // obtiene el titulo actual
        var texto = e.path[2].children[2].children[1];
    
        var padre = e.target.parentNode.parentNode;
        var activotitulo = padre.getAttribute("activotitulo");
        //obtengo el activo    
        var activosub = padre.getAttribute("activosub");
        var activotexto = padre.getAttribute("activotexto");
        
        //obtengo todos los elementos
        var titulos = padre.getAttribute("titulos");
        var textos = padre.getAttribute("textos");

        
        //cojo el obteto acual de los titulos
        var obj_titulos = titulos.split(",");
        //*****************/
        var posicionactivo = -1;
        for(var i =0; i<obj_titulos.length; i++){
            if(obj_titulos[i].indexOf(activosub)!=-1){
                posicionactivo=i;
                break;
            }
        };
        
        var tmp = null;
        var obj_textos = textos.split("-");
        var tmp = obj_textos[posicionactivo];
        var $alltextosasociados = tmp.split(",");
        
        var direccion =  e.target.className;

        switch (direccion) {
            case 'right':
                e.path[1].children[0].style.display = "block";
                
                activotexto++;
                padre.setAttribute("activotexto",activotexto);
                if(activotexto>$alltextosasociados.length){
                    if(activotitulo<obj_titulos.length){
                     activotitulo++;
                     
                     if(activotitulo==obj_titulos.length-1){
                         e.path[1].children[1].style.display = "none";
                     }
                     
                    }else{
                     var n = obj_textos[posicionactivo];
                         n = n.split(",");
                        e.path[1].children[1].style.display = "none";
                    }
                     
                activotexto=1;
                titulo.style.backgroundImage = "url(img/menu/principal/"+secuencia+"/"+obj_titulos[activotitulo]+"/title.png)";
                padre.setAttribute("activosub",obj_titulos[activotitulo]);
                padre.setAttribute("activotitulo",activotitulo);
                padre.setAttribute("activotexto",activotexto);
                }
                texto.style.backgroundImage = "url(img/menu/principal/"+secuencia+"/"+obj_titulos[activotitulo]+"/t"+(activotexto)+".png)";
                          
                break;
        default:
            e.path[1].children[1].style.display = "block";
            
            if($alltextosasociados.length==1){
                activotitulo--;
                activotexto=1;
            
                if(activotexto==1 && activotitulo==0){
                    e.path[1].children[0].style.display = "none";
                }
            }
            else if(activotexto>0){
                
                if(activotexto==1 && activotitulo==0){
                    e.path[1].children[0].style.display = "none";
                }else if(activotexto==1){
                    activotexto--;
                    activotitulo--;
                }else{
                    activotexto--;
                    if(activotexto==1 && activotitulo==0){
                        e.path[1].children[0].style.display = "none";
                    }
                }
                 
            }
            
            if(activotexto == 0){
                activotexto = 1;
            }
            
            padre.setAttribute("activosub",obj_titulos[activotitulo]);
            padre.setAttribute("activotitulo",activotitulo);
            padre.setAttribute("activotexto",activotexto);
            
            titulo.style.backgroundImage = "url(img/menu/principal/"+secuencia+"/"+obj_titulos[activotitulo]+"/title.png)";
            texto.style.backgroundImage = "url(img/menu/principal/"+secuencia+"/"+obj_titulos[activotitulo]+"/t"+(activotexto)+".png)";
        }
    }
    catch(e){}
}

// Metodo para ponerle a cada secuencia su respectivo fondo
function fondos_menu_principal(){
    console.log(fondos.length);
    fondos.each(function(ix,el){
        var partes = $(this).find("div[paginas]");
        partes.each(function(olx,oel){
            $mycontador++;
            //console.log($mycontador);
            $(this).css("background-image","url(/ebookapp/img/menu/secuencia/"+ $mycontador +".png)");
        });
    });
}

// Método para mostrar los contenidos de la derecha
function mostrar_contenido_derecha(e){
    var that = this; // obtengo el la parte que le dio click para ser manipulado en el metodo
    var $myparent = that.parentNode; // padre de cada secuencia
    
    $($myparent).find(".texto").find(".loading").css("opacity","1"); // cargador de a imagen
    $($myparent).find(".texto").css("opacity",".6"); // Se vuelve opaco el texto mientras se muestra el cargador
    
    // links(); // LLamo la funcion para 
    
    var parte = e.target.className; // me obtiene de cual clase se le dio click
    
    var $elparent = that.parentNode.getAttribute("orden"); // obtiene el numero de la secuencia para hacer la animación
    var carpeta = that.getAttribute("carpeta");
    
    rutas_imagenes = that.getAttribute("paginas").split(","); // se le asigna el numero de paginas que traiga del atributo html
    
    var paginacion =  $($myparent).find(".paginacion"); // objeto que me obtiene el cuadro de paginacion de cada secuencia
    var izquierda = paginacion.find(".izquierda");
    var derecha = paginacion.find(".derecha");
    
    paginacion.attr("activo",0); // le agrego el atributo a la paginacion
    activo = 0;
    
    if(control){ // cuando es verdadero se abren las secuencias
        setTimeout(function(){
            $($myparent).find(".texto").find(".loading").css("opacity","0"); // cargador de la imagen
            $($myparent).find(".texto").css("opacity","1");
        },2300);
        
        $('.animacion_pluma').fadeOut();
        
        ANTORCHA.hideAll(that);
        
        if(rutas_imagenes.length > 1){ // si contiene mas de una imagen la secuencia
            paginacion.css("display","block");
            izquierda.css("display","none"); // simpre la izquierda del navegador va a iniciar oculto
            derecha.css("display","block");
            
            // Asignamos los valores a nuestro arreglo permanente
            for(var j = 0; j < rutas_imagenes.length; j++){
                rutas_permanentes[j] = rutas_imagenes[j];
            }
            
            // Click de la navegacion izquierda
            $(izquierda).unbind("click").click(function(){
                $($myparent).find(".texto").find(".loading").css("opacity","1"); // cargador de a imagen
                $($myparent).find(".texto").css("opacity",".6");
                
                activo = parseInt(paginacion.attr("activo")); // miramos en que posicion esta la variable activo del texto
                derecha.css("display","block"); // se activa la navegacion derecha porque tiene mas de una pagina para mostrar
                
                if (activo>0) { // Si la variable activa no llega a 0 se cambia el texto
                    $($myparent).find(".texto").css("background-image","url(/ebookapp/img/secuencias/"+carpeta+"/"+rutas_imagenes[activo-1]+".png)"); // cambio el fondo del texto por el anterior
                    paginacion.attr("activo",(activo-1)); // se cambia el atributo de la paginacion
                    activo = parseInt(paginacion.attr("activo")); //  se le asigna el valor a la variable activo
                }
                if (activo==0) { // cuando llega a 0 se oculta la navegación izquierda
                    izquierda.css("display","none");
                }
                
                setTimeout(function(){
                    
                    $($myparent).find(".texto").find(".loading").css("opacity","0"); // cargador de a imagen
                    $($myparent).find(".texto").css("opacity","1");
                
                },300);
            });
            
            // Click de la navegacion derecha
            $(derecha).unbind("click").click(function(){
                $($myparent).find(".texto").find(".loading").css("opacity","1"); // cargador de a imagen
                $($myparent).find(".texto").css("opacity",".6");
                
                activo = parseInt(paginacion.attr("activo")); // miramos en que posicion esta la variable activo del texto
                izquierda.css("display","block"); // cuando se la click siempre tendra que aparecer la navegación izquierda
                
                if (activo < (rutas_imagenes.length-1)) { // si la variable activa no llega al tope del arreglo
                    $($myparent).find(".texto").css("background-image","url(/ebookapp/img/secuencias/"+carpeta+"/"+rutas_imagenes[activo+1]+".png)"); // cambio el fondo del texto por el siguiente
                    paginacion.attr("activo",(activo+1)); // se cambia el atributo de la paginacion
                    activo = parseInt(paginacion.attr("activo")); //  se le asigna el valor a la variable activo
                    
                    setTimeout(function(){
                        $($myparent).find(".texto").find(".loading").css("opacity","0"); // cargador de a imagen
                        $($myparent).find(".texto").css("opacity","1");
                    },2000);
                }
                
                if (activo == (rutas_imagenes.length-1)) { // cuando la variable activa llega al tope se oculta la navegacion de la derecha
                   derecha.css("display","none"); 
                }
            });
        }
        else{ // si solo tiene una pagina el texto no se muestra la barra de navegacion
            paginacion.css("display","none");
        }
        
        // Animación para ajustar la seccion al contenedor
        $(contenedor_derecha).animate({scrollTop:parseInt($elparent)*600}, '1000',function(){
            $($myparent).find(".parte2").css("bottom","-265px").parent().find(".parte1").css("top","-265px");// Aca es donde se abren las compuertas
            $($myparent).find(".barra_derecha").css("z-index","5").parent().find(".barra_izquierda").css("z-index","5"); // se muestran los dos menus laterales
            $($myparent).find(".texto").css("background-image","url(/ebookapp/img/secuencias/"+carpeta+"/"+rutas_imagenes[0]+".png)"); // siempre se muestra la primera imagen se cada secuencia
            $($myparent).find(".texto").css("z-index","3");
            contenedor_derecha.style.overflowY  = "hidden"; // se oculta el scroll para que la sección quede fija
            $(bloque).css('overflow','hidden');
            $('.indice_derecha').fadeOut('3000');
        });
        activo = 0;
        control = false;
    }else{ // Se cierran las secuencias
        $('.animacion_pluma').fadeIn();
        $($myparent).find(".parte2").css("bottom","0px").parent().find(".parte1").css("top","0px");
        $($myparent).find(".barra_derecha").css("z-index","-1").parent().find(".barra_izquierda").css("z-index","-1");
        $($myparent).find(".texto").css("z-index","1");
        contenedor_derecha.style.overflowY  = "scroll"; // se vuelve a dar el scroll al contenedor para seguir navegando en la aplucion
        $(bloque).css('overflow','inherit');
        activo = 0;
        control = true;
        $('.indice_derecha').fadeIn('3000');
        
        //retrazo 500 milisegundos por el transition que le coloco en las parte1 y parte2
        setTimeout(function(){ 
            ANTORCHA.showAll(that);
        }, 500);
        
    }
    datos(that); // Llamo la funcion que me trae los contenidos de la barra izquierda a la vista del usuario
}

// función que me permite que cambien los contenidos de las secuencias
function datos(that){
    if(!control){
        // debugger;
        var t = $(that);
        var numero_parte = t.attr("carpeta");
        var menu_izquierda = t.parent().find(".barra_izquierda");
        
        //@TODO
        var parteNombreseccion = $(that).attr("class").split("parte")[1];
        that.parentNode.setAttribute("activo-menu",parteNombreseccion);

        var thatNombreSeccion2 = "data-content" + parteNombreseccion;

        $(that).parent().find(".mensajes").removeClass("grayscale");
        if ($(that).parent().find(".mensajes").attr(thatNombreSeccion2)=="null"){
            $(that).parent().find(".mensajes").addClass("grayscale");
        };
        
        $(that).parent().find(".audios").removeClass("grayscale");
        if ($(that).parent().find(".audios").attr(thatNombreSeccion2)=="null"){
            $(that).parent().find(".audios").addClass("grayscale");
        };
        
        $(that).parent().find(".imagenes").removeClass("grayscale");
        if ($(that).parent().find(".imagenes").attr(thatNombreSeccion2)=="null"){
            $(that).parent().find(".imagenes").addClass("grayscale");
        };
		
		$(that).parent().find(".materiales").removeClass("grayscale");
		if ($(that).parent().find(".materiales").attr(thatNombreSeccion2)=="null"){
			$(that).parent().find(".materiales").addClass("grayscale");
		};

		$(that).parent().find(".videos").removeClass("grayscale");
		if ($(that).parent().find(".videos").attr(thatNombreSeccion2)=="null"){
			$(that).parent().find(".videos").addClass("grayscale");
		};

        
        $.ajax({
            url:"/ebookapp/php/index.php",
            type:"POST",
            data:{
                id:numero_parte
            },
            success:function(data){
                var datos = JSON.parse(data);
                $(that).attr({
                    "palabras-claves": datos.menu_izquierda
                });
                var palabras_claves = datos.menu_izquierda.split(",");
                var output = "";
                var altura = 51;
                var top = 0;
                for (var i = 0; i < palabras_claves.length; i++) {
                    if(palabras_claves[i] === 'selva')
                        top = 600;
                    else if(palabras_claves[i] === 'pasado')
                        top = 1200;
                    else if(palabras_claves[i] === 'huida')
                        top = 1800;
                    else if(palabras_claves[i] === 'sabiduria')
                        top = 2400;
                    else if(palabras_claves[i] === 'riqueza')
                        top = 3000;
                    output +=  '<a href="#'+palabras_claves[i]+'" top="'+top+'"><div class="'+palabras_claves[i]+'"></div></a>';
                }
                $(menu_izquierda).css("height",(altura * palabras_claves.length));
                $(menu_izquierda).html(output);
                links_menu_izquierda();
            }
        });
    }
}

// Método que me redirige a la página de atarra
function atarraya(){
    window.open("http://www.atarrayaitinerante.org","_blank"); // redireccion cuando se le da click en el icono de conoce atarraya
}

// Métodos de los indices 
function animar_contenedor_izquierda(e){
    var top = $(this).attr('top');
    $(".contenedor_izquierda").animate({scrollTop:top}, '2000');
}

function animar_contenedor_derecha(e){
    var top = $(this).attr('top');
    $(".contenedor_derecha").animate({scrollTop:top}, '2000');
}

// Métodos de los menus principales
function animar_menus_principales(){
    var padre = $(this).parent().attr("data-scroll");
    if(padre == "l"){
        $(".contenedor_izquierda").animate({scrollTop:600}, '30000');
    }else{
        $(".contenedor_derecha").animate({scrollTop:600}, '30000');
    }
}

// Método para la animacion de pluma
function punto(e){
    var punto = e.pageY;
    if(punto > 400)
        $(this).parent().find('.parte2').click();
    else
        $(this).parent().find('.parte1').click();
}

// Método cuando cierre el popup de videos
function close(){
    $('.contenedor').css('position','absolute');
}