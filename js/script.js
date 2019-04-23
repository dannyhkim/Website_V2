$(document).ready(function(){

    $(window).scroll(function(){
        if($(this).scrollTop() > 40){
            $('#btnTop').fadeIn();
        } else {
            $('#btnTop').fadeOut();
        }
    });

    $("#btnTop").click(function(){
        $('html, body').animate({scrollTop : 0},800);
    });
});