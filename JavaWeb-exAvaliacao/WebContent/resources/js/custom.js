$(document).ready(function(){
    $window = $(window);
    //Captura cada elemento section com o data-type "background"
    $('section[data-type="background"]').each(function(){
        var $scroll = $(this);   
            //Captura o evento scroll do navegador e modifica o backgroundPosition de acordo com seu deslocamento.            
            $(window).scroll(function() {
                var yPos = -($window.scrollTop() / $scroll.data('speed')); 
                var coords = '50% '+ yPos + 'px';
                $scroll.css({ backgroundPosition: coords });    
            });
   });  
    

    $("#parallaxBar2").css('min-height', ($(window).height()/2));
    $("#parallaxBar").css('min-height', $(window).height());
    
    
    
    $("#wow").removeClass("ui-datatable");
    $("table").addClass("table table-bordered table-hover table-condensed");

}); 