const slidebar  = () =>{
    $('.navbar-collapse').click(function(){
        $('.menu_responsive').addClass('menu-active');
        $('.back').addClass('background');
    });
    $('.close').click(function(){
        $('.menu_responsive').removeClass('menu-active');
        $('.back').removeClass('background');
    });
   $('.current').click(function(){
       $('.first').toggleClass('show');
       $('.current .dropdown').toggleClass('rotate');
      
   });
   $('.ido-ieo').click(function(){
        $('.secornd').toggleClass('show');
        $('.ido-ieo .dropdown').toggleClass('rotate');
    });
    $('.menu_item').click(function(){
        $(this).addClass('active-item').parent().siblings().removeClass('active-item');
        // console.log($('.menu_item').parent().nextElementSibling());
    });
    
}
slidebar();

