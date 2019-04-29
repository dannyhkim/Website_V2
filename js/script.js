$(document).ready(function(){
    
    // Back to top button
    $(window).scroll(function(){
        if($(this).scrollTop() > 500){
            $('#btnTop').fadeIn();
        } else {
            $('#btnTop').fadeOut();
        }
    });

    $("#btnTop").click(function(){
        $('html, body').animate({scrollTop : 0},600);
    });

    //Scrolling effect
    $(window).on("scroll", function(){
        if($(window).scrollTop()){
            $('nav').addClass('black');
        }else{
            $('nav').removeClass('black');
        }
    })

    // Hamburger Menu Button
    $(document).ready(function() {
        $(".menu-icon").on("click", function() {
            $("nav ul").toggleClass("showing");
        });
    });

});