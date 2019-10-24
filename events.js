jQuery(document).ready(function($) 
{
    
    $("#menu-item-2").click(function() {
    	$('html,body').animate({
        scrollTop: $(".aboutme-container-top").offset().top},
        'slow');
    });

    $("#menu-item-3").click(function() {
    	$('html,body').animate({
        scrollTop: $(".projects-container").offset().top},
        'slow');
    });
    //window animations
    $(".not-animated").on("click",function()
    {           
    $(this).attr('class', 'animated');           
    });
    $(".animated").on("click",function()
    {           
    $(this).attr('class', 'not-animated');           
    });  
    $(".fotka").on("click",function()
    {           
    $(this).attr('class', 'otwarta');           
    }); 
});

