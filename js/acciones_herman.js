var ANTORCHA = {}


ANTORCHA.debug = function($ob){
    console.log($ob);
}

ANTORCHA.play=function(){
       var audio = document.getElementById("selvaAudio");
       audio.play();
};  
    
ANTORCHA.stop = function(){
       var audio = document.getElementById("selvaAudio");
       audio.pause();
};

ANTORCHA.reset = function(){
    
    try{
        
        var imagenObject = $(".sprite_item");
        var iterable_count=1;
        setInterval(function(){ 
            iterable_count++;
            
            if(iterable_count==84){
                iterable_count=1;
            }
                 imagenObject.attr("style","background:url(http://e-book-dmsanchez86.c9.io/img/animacion_secuencias/"+iterable_count+".png?v=9999);");
                 console.log("background:url(http://e-book-dmsanchez86.c9.io/img/animacion_secuencias/"+iterable_count+".png?v=9999);");
                
        }, 200);
        
    }catch(e){
        throw(e)
    }
   
};


ANTORCHA.hideAll = function(this_object){
    
    try{
        var $el = $(this_object);
        var $before = $el.parent();
        var $allAnimationsUP = $before.find(".area_squareup");
        var $allAnimationsBOTTOM = $before.find(".area_squaredown");
        var $otherElements = $before.find(".fix_background");
        
        $allAnimationsUP.hide();
        $allAnimationsBOTTOM.hide();
        $otherElements.hide();
        
    }catch(e){
        throw(e)
    }
    
};
ANTORCHA.showAll = function(this_object){
    
    try{
        var $el = $(this_object);
        var $before = $el.parent();
        var $allAnimationsUP = $before.find(".area_squareup");
        var $allAnimationsBOTTOM = $before.find(".area_squaredown");
        var $otherElements = $before.find(".fix_background");
        
        $allAnimationsUP.show();
        $allAnimationsBOTTOM.show();
        $otherElements.show();
        
    }catch(e){
        throw(e)
    }
    
};

ANTORCHA.animate11 = function(){

    try{
        var Interval11_UP=0;
            setInterval(function(){
           $(".block.secuencia[orden='12'] .area_squareup .preview").css("visibility","hidden");
           $(".block.secuencia[orden='12'] .area_squareup .preview").eq(Interval11_UP).css("visibility","visible"); 
           
           if (Interval11_UP==28){
              Interval11_UP=0;
           }else{
              Interval11_UP++;
           }
           
        }, 100);

    }catch(e){
        throw(e)
    }
}

ANTORCHA.animate9 = function(){
    
    try{
    
    var Interval9_UP=0;
        setInterval(function(){
           $(".block.secuencia[orden='9'] .area_squareup .preview").css("visibility","hidden");
           $(".block.secuencia[orden='9'] .area_squareup .preview").eq(Interval9_UP).css("visibility","visible"); 
           
           if (Interval9_UP==12){
              Interval9_UP=0;
           }else{
              Interval9_UP++;
           }
           
        }, 100);

    }catch(e){
        throw(e)
    }
}

ANTORCHA.animate10 = function(){
    
    try{
    
    var Interval10_UP=0;
        setInterval(function(){
           $(".block.secuencia[orden='9'] .area_squaredown .preview").css("visibility","hidden");
           $(".block.secuencia[orden='9'] .area_squaredown .preview").eq(Interval10_UP).css("visibility","visible"); 
           
           if (Interval10_UP==55){
              Interval10_UP=0;
           }else{
              Interval10_UP++;
           }
           
        }, 100);
    }catch(e){
        throw(e)
    }
}