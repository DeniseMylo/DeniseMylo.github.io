// By Denise Mylonakis

$(window).scroll(function() {
   var value = $(this).scrollTop();
   if (value > 6100){
      $(".artwork").attr("src", "./image/wrapper-3.png");
      $(".roll").attr("src", "./image/empty.png");
   }
   else if (value > 5700){
      $(".artwork").attr("src", "./image/wrapper-3.png");
      $(".roll").attr("src", "./image/roll3.png");
   }
   else if (value > 5300){
      $(".artwork").attr("src", "./image/wrapper-3.png");
      $(".roll").attr("src", "./image/roll2.png");
   }
   else if (value > 4900){
      $(".artwork").attr("src", "./image/wrapper-3.png");
      $(".roll").attr("src", "./image/roll1.png");
   }
   else if (value > 4500) {
    $(".artwork").attr("src", "./image/wrapper-3.png");
    $(".roll").attr("src", "./image/roll.png");
   } 
   else if (value > 4000){
    $(".artwork").attr("src", "./image/wrapper-2.png");
    $(".roll").attr("src", "./image/roll.png");
   } 
   else if (value > 3500){
    $(".artwork").attr("src", "./image/wrapper-1.png");
    $(".roll").attr("src", "./image/roll.png");
   } 
   else if (value > 3000){
    $(".artwork").attr("src", "./image/Artwork-7.png");
    $(".roll").attr("src", "./image/empty.png");
   } 
   else if (value > 2500){
    $(".artwork").attr("src", "./image/Artwork-6.png");
    $(".roll").attr("src", "./image/empty.png");
   } 
   else if (value > 2000){
    $(".artwork").attr("src", "./image/Artwork-5.png");
    $(".roll").attr("src", "./image/empty.png");
   } 
   else if (value > 1500){
    $(".artwork").attr("src", "./image/Artwork-4.png");
    $(".roll").attr("src", "./image/empty.png");
   } 
   else if (value > 1000){
    $(".artwork").attr("src", "./image/Artwork-3.png");
    $(".roll").attr("src", "./image/empty.png");
   } 
   else if (value > 500){
    $(".artwork").attr("src", "./image/Artwork-2.png");
    $(".roll").attr("src", "./image/empty.png");
   }   
   else{
      $(".artwork").attr("src", "./image/Artwork-1.png");
      $(".roll").attr("src", "./image/empty.png");
   }
});

