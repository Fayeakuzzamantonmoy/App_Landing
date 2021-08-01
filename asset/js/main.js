(function ($){
    "use  strict";


    // data - background
    
    $("[data-background]").each(function (){
        $(this).css("background-image","url(" + $(this).attr("data-background") + ")")
    })
    
    $('.counter').counterUp({
        delay: 10,
        time: 10000
    });

})(jQuery);