$(function() {
    $('#sidebarCollapse').on('click', function() {
      $('#sidebar').toggleClass('activeMiniSideNav');
    });
  });


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

$(document).ready(function(){
  $(".sub-menu-sub>a").click(function(){
      if(!$(this).next('.sub-menu-sub-content').is(':visible'))
     {   
       $('.sub-menu-sub .sub-menu-sub-content').slideUp();
       $(this).next('.sub-menu-sub-content').slideDown();
     }else{
        $(this).next('.sub-menu-sub-content').slideUp();
     }
 });
})