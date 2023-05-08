
    $('.feat-btn').click(function(){
      $('nav ul .feat-show').toggleClass("show");
    });
    $('.prod-btn').click(function(){
      $('nav ul .prod-show').toggleClass("show1");
    });
    $('nav ul li').click(function(){
      $(this).addClass("active").siblings().removeClass("active");
    });