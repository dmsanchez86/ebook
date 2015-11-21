var antorcha = {};

antorcha.popUpIn = function(container,el,tipo) {

  if(tipo=="ilustraciones"){

  var $myreactContent = JSON.parse(el);
    var $mycontent_template = $(".template-img-ilustraciones").html();

    var $acumul = "";
    for (var i=0; i<$myreactContent.length; i++) {
        $acumul = $acumul + $mycontent_template.replace("#URL#",$myreactContent[i].url)
                                               .replace("#DESCRIPTION#",$myreactContent[i].texto);
    };

    $(container).css("display","block");
    $(container).removeClass("zoomOutDown");
    $(container).addClass("animated zoomInDown");
  
    $(".ilustraciones-list").html($acumul);   

    $(".detail-link").click(function(e){
      e.preventDefault();
      var $my_text = $(this).attr("title");
      var $my_url = $(this).find("img").attr("src");
      
      var template_detail = $(".template-detail-ilustraciones").html();

      var $inyected_content = template_detail.replace("#URL#",$my_url)
                                             .replace("#DESCRIPTION#",$my_text);

      $(".contenido").html($inyected_content);
    });
  
    $(".detail-link").eq(0).click();  

  }else if(tipo=="entrevistas"){


    var $myreactContent = JSON.parse(el);
    var $mycontent_template = $(".template-video-entrevistas").html();

    var $acumul = "";
    for (var i=0; i<$myreactContent.length; i++) {
        $acumul = $acumul + $mycontent_template.replace("#VIDEO#",$myreactContent[i].url)
                                               .replace("#VIDEO#",$myreactContent[i].url)
                                               .replace("#DESCRIPTION#",$myreactContent[i].texto);
    };

    $(container).css("display","block");
    $(container).removeClass("zoomOutDown");
    $(container).addClass("animated zoomInDown");
  
    $(".ilustraciones-list").html($acumul);   

    $(".detail-link-video").click(function(e){
      e.preventDefault();
      var $my_text = $(this).attr("title");
      var $my_url = $(this).attr("data-video-src");
      
      var template_detail = $(".template-detail-entrevistas").html();

      var $inyected_content = template_detail.replace("##VIDEO##",$my_url)
                                             .replace("#DESCRIPTION#",$my_text);

      $(".contenido").html($inyected_content);
    });
  
    $(".detail-link-video").eq(0).click();  

  }else if(tipo=="audios"){


    var $myreactContent = JSON.parse(el);
    var $mycontent_template = $(".template-audio-audio").html();

    var $acumul = "";
    for (var i=0; i<$myreactContent.length; i++) {
        $acumul = $acumul + $mycontent_template.replace("#AUDIO#",$myreactContent[i].url)
                                               .replace("#DESCRIPTION#",$myreactContent[i].texto);
    };

    $(container).css("display","block");
    $(container).removeClass("zoomOutDown");
    $(container).addClass("animated zoomInDown");
  
    $(".ilustraciones-list").html($acumul);   

    $(".detail-link-audio").click(function(e){
      e.preventDefault();
      var $my_text = $(this).attr("title");
      var $my_url = $(this).attr("data-audio-src");
      
      var template_detail = $(".template-detail-audio").html();

      var $inyected_content = template_detail.replace("##AUDIO##",$my_url)
                                             .replace("#DESCRIPTION#",$my_text);

      $(".contenido").html($inyected_content);
    });
  
    $(".detail-link-audio").eq(0).click();  

  }else if(tipo=="fotos"){

  var $myreactContent = JSON.parse(el);
    var $mycontent_template = $(".template-img-fotos").html();

    var $acumul = "";
    for (var i=0; i<$myreactContent.length; i++) {
        $acumul = $acumul + $mycontent_template.replace("#URL#",$myreactContent[i].url)
                                               .replace("#DESCRIPTION#",$myreactContent[i].texto);
    };

    $(container).css("display","block");
    $(container).removeClass("zoomOutDown");
    $(container).addClass("animated zoomInDown");
  
    $(".ilustraciones-list").html($acumul);   

    $(".detail-link-foto").click(function(e){
      e.preventDefault();
      var $my_text = $(this).attr("title");
      var $my_url = $(this).find("img").attr("src");
      
      var template_detail = $(".template-detail-fotos").html();

      var $inyected_content = template_detail.replace("#URL#",$my_url)
                                             .replace("#DESCRIPTION#",$my_text);

      $(".contenido").html($inyected_content);
    });
  
    $(".detail-link-foto").eq(0).click();  

  }else if(tipo=="videos"){


    var $myreactContent = JSON.parse(el);
    var $mycontent_template = $(".template-video-video").html();

    var $acumul = "";
    for (var i=0; i<$myreactContent.length; i++) {
        $acumul = $acumul + $mycontent_template.replace("#VIDEO#",$myreactContent[i].url)
                                               .replace("#DESCRIPTION#",$myreactContent[i].texto)
											   .replace("#VIDEO#",$myreactContent[i].url);
    };

    $(container).css("display","block");
    $(container).removeClass("zoomOutDown");
    $(container).addClass("animated zoomInDown");
  
    $(".ilustraciones-list").html($acumul);   

    $(".detail-video-video").click(function(e){
      e.preventDefault();
      var $my_text = $(this).attr("title");
      var $my_url = $(this).attr("data-video-src");
      
      var template_detail = $(".template-detail-video").html();

      var $inyected_content = template_detail.replace("##VIDEO##",$my_url)
	  									     .replace("#VIDEO#",$my_url)
                                             .replace("#DESCRIPTION#",$my_text);

      $(".contenido").html($inyected_content);
    });
  
    $(".detail-video-video").eq(0).click();  

  }else if(tipo=="storyboard"){

  var $myreactContent = JSON.parse(el);
    var $mycontent_template = $(".template-storyboard-fotos").html();

    var $acumul = "";
    for (var i=0; i<$myreactContent.length; i++) {
        $acumul = $acumul + $mycontent_template.replace("#URL#",$myreactContent[i].url)
                                               .replace("#DESCRIPTION#",$myreactContent[i].texto);
    };

    $(container).css("display","block");
    $(container).removeClass("zoomOutDown");
    $(container).addClass("animated zoomInDown");
  
    $(".ilustraciones-list").html($acumul);   

    $(".detail-link-storyboard").click(function(e){
      e.preventDefault();
      var $my_text = $(this).attr("title");
      var $my_url = $(this).find("img").attr("src");
      
      var template_detail = $(".template-detail-storyboard").html();

      var $inyected_content = template_detail.replace("#URL#",$my_url)
                                             .replace("#DESCRIPTION#",$my_text);

      $(".contenido").html($inyected_content);
    });
  
    $(".detail-link-storyboard").eq(0).click();  

  }
}

antorcha.popUpOut = function(container) {
    $(container).removeClass("zoomInDown");
    $(container).addClass("animated zoomOutDown");
    $(container).css("display","block");
	$(".contenido").html("<div style='width:100%;height:1px;'>&nbsp;</div>");
}

antorcha.initializeListeners = function() {
   jQuery(".pop-up-header img").click(function(){
       antorcha.popUpOut(".modal-pop-up");
   });
}


$(document).ready(function(){
   antorcha.initializeListeners();
});