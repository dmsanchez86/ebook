var antorcha = {};

antorcha.popUpIn = function(container) {
    $(container).css("display","block");
    $(container).removeClass("zoomOutDown");
    $(container).addClass("animated zoomInDown");
    
    var $mycurrent_video = jQuery(".video-current").get(0);
    
   jQuery(".default-play").click(function() {
        $mycurrent_video.play();
   });
   
   jQuery(".control-stop").click(function() {
        $mycurrent_video.pause();
   });
   jQuery(".control-play").click(function() {
        $mycurrent_video.play();
   });
   jQuery(".control-pause").click(function() {
        $mycurrent_video.pause();
   });
   jQuery(".item-list-video").click(function() {
       
        var $mysrc_now = $(this).attr("data-src");
        var $mysrc_poster = $(this).attr("data-poster");
        console.log($mysrc_poster);
        $(".vjs-poster").css("background-image","url("+ $mysrc_poster + ")")
                        .css("background-size","cover");
        
        videojs('#my_video_1', {}, function(){
            this.src({ type: "video/mp4", src: $mysrc_now, poster : $mysrc_poster });
        });
        

   });
   
}

antorcha.popUpOut = function(container) {
    $(container).removeClass("zoomInDown");
    $(container).addClass("animated zoomOutDown");
    $(container).css("display","block");
}

antorcha.initializeListeners = function() {
   jQuery(".pop-up-header img").click(function(){
       antorcha.popUpOut(".modal-pop-up");
   });
}


$(document).ready(function(){
   antorcha.initializeListeners();
});