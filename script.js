$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('header').addClass("sticky");
            // $('li > a').addClass("nav-font-color");
            // $('.logo > a').addClass("logo-font-color");
            // $('li> a').addClass("col");
        }else{
            $('header').removeClass("sticky");
            // $('li > a').removeClass("nav-font-color");
            // $('.logo > a').removeClass("logo-font-color");
        }
        
    });


});



       // toggle menu/navbar script
       $('.bx-menu').click(function(){
        $('.menu ul').toggleClass("active");
        // $('.menu-btn i').toggleClass("active");
    });


    //media quries
    $(document).ready(function(){
     if(window.outerWidth<= 410){
         $('.home-btn ').addClass('btn-sm')
         $('.menu-contact-btn button ').addClass('me-2')

       
     }else{
        $('.home-btn ').removeClass('btn-sm')
     }

    });
    

    // $(document).ready(function(){
    //     if(window.outerWidth<=786){
    //         $('#Services-grid').removeClass('row-cols-3')
    //         $('#Services-grid').addClass('row-cols-2')
      
    //     }else{
    //         $('$Services-grid').removeClass('row-cols-2')
    //         $('$Services-grid').addClass('row-cols-3')
    //     }


    // });

