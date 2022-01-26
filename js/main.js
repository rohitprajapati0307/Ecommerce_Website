$(document).ready(function(){
    

//    $('body').on('click','.ham-meu,#close-drop',function(){
//       $('.dropheader-full').toggleClass('open-drop');
//   });


  $('.ham-meu,#close-drop').on('click',function(){
   $('.dropheader-full').toggleClass('open-drop');
  });
    
    var lastScrollTop = 0, delta = 15;
    $(window).scroll(function(event){
       var st = $(this).scrollTop();
       
       if(Math.abs(lastScrollTop - st) <= delta)
          return;
if ((st > lastScrollTop) && (lastScrollTop>0)) {
       // downscroll code
      $(".header-full ").css("top","-100px");
  
   } else {
      // upscroll code
      $(".header-full ").css("top","0px");
   }
       lastScrollTop = st;
    });


});