


// code resource: https://stackoverflow.com/questions/53295911/scroll-indicator-javascript

window.onload = function () {
    if (document.documentElement.scrollHeight === document.documentElement.clientHeight){
        document.getElementById("myBar").style.width = "100%";
    }
};

// When the user scrolls the page, execute myFunction
window.onscroll = function () {
   myFunction()
};

function myFunction() {
   var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
   var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
   var scrolled = (winScroll / height) * 100;
   document.getElementById("myBar").style.width = scrolled + "%";
}
// _________________________________
//  resource: https://redstapler.co/typed-js-tutorial/



$(document).ready(function(){



$(document).ready(function(){
    $(".proj1cont").mouseover(function(){
      $(".proj1").css("right", "400px");
    });
    $(".proj1cont").mouseout(function(){
      $(".proj1").css("right", "0");
    });
  });

// --------------------------------------
  $(document).ready(function(){
    $(".proj2cont").mouseover(function(){
      $(".proj2").css("left", "300px");
    });
    $(".proj2cont").mouseout(function(){
      $(".proj2").css("left", "0");
    });
  });
// --------------------------------------
  $(document).ready(function(){
    $(".proj3cont").mouseover(function(){
      $(".proj3").css("right", "300px");
    });
    $(".proj3cont").mouseout(function(){
      $(".proj3").css("right", "0");
    });
  });
// --------------------------------------
  $(document).ready(function(){
    $(".proj4cont").mouseover(function(){
      $(".proj4").css("left", "400px");
    });
    $(".proj4cont").mouseout(function(){
      $(".proj4").css("left", "0");
    });
  });
// --------------------------------------
$(document).ready(function(){
    $(".proj5cont").mouseover(function(){
      $(".proj5").css("right", "400px");
    });
    $(".proj5cont").mouseout(function(){
      $(".proj5").css("right", "0");
    });
  });

  // --------------------------------------
$(document).ready(function(){
    $(".proj6cont").mouseover(function(){
      $(".proj6").css("left", "300px");
    });
    $(".proj6cont").mouseout(function(){
      $(".proj6").css("left", "0");
    });
  });

    // --------------------------------------
$(document).ready(function(){
    $(".proj7cont").mouseover(function(){
      $(".proj7").css("right", "400px");
    });
    $(".proj7cont").mouseout(function(){
      $(".proj7").css("right", "0");
    });
  });

      // --------------------------------------
$(document).ready(function(){
    $(".proj8cont").mouseover(function(){
      $(".proj8").css("left", "400px");
    });
    $(".proj8cont").mouseout(function(){
      $(".proj8").css("left", "0");
    });
  });

      // --------------------------------------
$(document).ready(function(){
    $(".proj9cont").mouseover(function(){
      $(".proj9").css("right", "400px");
    });
    $(".proj9cont").mouseout(function(){
      $(".proj9").css("right", "0");
    });
  });

        // --------------------------------------
$(document).ready(function(){
    $(".proj10cont").mouseover(function(){
      $(".proj10").css("left", "300px");
    });
    $(".proj10cont").mouseout(function(){
      $(".proj10").css("left", "0");
    });
  });


  var typed = new Typed('#typed',{
    stringsElement: '#typed-strings',
    typeSpeed: 100,
    backSpeed: 300,
    fadeOut: true,
    loop: true
  });
 
  
})