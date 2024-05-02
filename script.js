$(document).ready(function(){
  // $(".Bars").click(function(){
  //     console.log("click")
  // $(".dropdown-content").show()
  // });

  // $(".time").click(function(){
  //     console.log("click")
  // $(".dropdown-content").hide()
  // });

     $(".Bars").click(function(){
      console.log("click")
  $(".drop-menu-content").addClass("drop-menu-content-show")
  $("body").css("overflow", "hidden");
  $(".overlay").fadeIn();

  });

    $(".time").click(function(){
      console.log("click")
  $(".drop-menu-content").removeClass("drop-menu-content-show");
  $("body").css("overflow", "auto");
  $(".overlay").fadeOut();

  });

  // $(".container").click(function(){
  //     console.log("click")
  // $(".dropdown-content").removeClass("dropdown-content-show")
  // });
  $(".Bars").click(function(){
    console.log("click")
       $(".dropdown-content").addClass("dropdown-content-show")
       $("body").css("overflow", "hidden");
       $("body").addClass("drawer-open");
   
       });
       $(".time").click(function(){
        console.log("click")
    $(".dropdown-content").removeClass("dropdown-content-show");
    $("body").css("overflow", "auto");
    $("body").removeClass("drawer-open");

    });   

});