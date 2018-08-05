$( document ).ready(function() {
        /*------start-hide & show imge ---*/

$('.a-a') .on("click", function(){
        $('.a-1').toggleClass('remove').siblings().addClass('remove');
});
    
$('.a-b') .on("click", function(){
        $('.a-2').toggleClass('remove').siblings().addClass('remove');
});
    
$('.a-c') .on("click", function(){
        $('.a-3').toggleClass('remove').siblings().addClass('remove');
});
    
$('.a-d') .on("click", function(){
        $('.a-4').toggleClass('remove').siblings().addClass('remove');
});
    
$('.a-e') .on("click", function(){
        $('.a-5').toggleClass('remove').siblings().addClass('remove');
});
            /*------end-hide & show imge ---*/

      /*-----start slide div blog---*/

 $('.i-1, .blog .a').click(function(){
     $('.blog-a').slideToggle(1000).next();
 });
    
  $('.i-2, .blog .b').click(function(){
     $('.blog-b').slideToggle();
 });
    
  $('.i-3, .blog .c').click(function(){
     $('.blog-c').slideToggle(2000).addClass('move');
 });
           /*-----end slide div blog---*/
/*---start option fadeout div */

$('.option h1').click(function(){
        
        $('.option-a').fadeToggle(500, function(){
            
            
            $('.option-b').fadeToggle(500);
            
            $('.option h2').animate({
                position:'relative',
                top: '-20px'
            });
             $('.option i').animate({
                position:'relative',
                top: '20px'
            });
            
            
            $('.option h2').animate({
                position:'relative',
                top: '-44px'
            });
             $('.option i').animate({
                position:'relative',
                top: '44px'
            });
            
            
        });
    
    
    });
    
  /*---end option fadeout div */

    
    /*-------start option fadeout div*/

    $(window).scroll(function(){
        
     if($(this).scrollTop() > 320){
         $("#scrolltop").fadeIn();
     }else{
         $("#scrolltop, .navbar-b").fadeOut();

     }
     
 });
    
   $("#scrolltop").on('click', function(){
       
       $('.nav-b').fadeIn();
       
       $('.nav-b li').animate({
         'height': '36px',
          'font-size':'25px',
       },500);
       
       $('.navbar-b').slideToggle();
       
       $('#scrolltop').animate({
           'left':'25px',
       },2000);
       
   });
    /*-------end option fadeout div---------*/
$('.inf-1 .icon').click(function(){
        $('.inf-part-1').slideToggle(1000);
    $('.oof').toggleClass('of');
    });
    
  $('.inf-2 .icon').click(function(){
        $('.inf-part-2').slideToggle(1000);
        $('.oof').toggleClass('off');
    });
    
     
    
    
    
    $('.info-1 .all').click(function(){
        $('.skils .info-part-1').slideToggle(1500);
    });
    
    $('.info-2 .all').click(function(){
        $('.skils .info-part-2').slideToggle(1500);
    });
    
    $('.info-3 .all').click(function(){
        $('.skils .info-part-3').slideToggle(1500);
    });
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
       /* scroll to id section*/
    
    $('.navbar-b .nav-b li, .navbar .navbar-nav li a').click(function(){
        $('html , body').animate({
            scrollTop : $('#' + $(this).data('value')).offset().top
        },1500);
    });

       /* scroll to id section*/
    
    /*---scroll gooooo--*/
$(window).scroll(function(){
     if($(this).scrollTop() > 900){
         $(".far-away p").addClass('animat-p-history');
     }
 });
    
    
 $(window).scroll(function(){
     if($(this).scrollTop() > 900){
         $(".far-away h2").addClass('animat-h2-history');
     }
 });
    
    
$(window).scroll(function(){
     if($(this).scrollTop() > 1520){
         $(".option-a p, .option-b p").addClass('animat-p-option');
     }
 });
    
   
    /*---scroll gooooo--*/
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    /*----print scrollTop in consol */
$(window).on("scroll", function(){
    var sc = $(window).scrollTop();
    console.log(sc);
});
    /*----print scrollTop in consol */
       

  
});




