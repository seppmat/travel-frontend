// Dropdown

$(document).ready(function(){
    $(".sub-menu>a").click(function(){
        if(!$(this).next('.sub-menu-content').is(':visible'))
       {   
         $('.sub-menu .sub-menu-content').slideUp();
         $(this).next('.sub-menu-content').slideDown();
       }else{
          $(this).next('.sub-menu-content').slideUp();
       }
   });
});
