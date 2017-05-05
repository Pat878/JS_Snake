$(document).ready(function() {
  makebox();
  //makeNew();
  addSnake();
  moveSnake();
});


function makebox() {
  var size = 30;
  var boxSize = 20;
  for (i=1;i<=size*size;i++) {
    $("#container").append("<div class='box'></div>");
  };
  $("#container").width(size*boxSize + "px");
  $(".box").width(boxSize + "");
  $(".box").height(boxSize + "px");
  $(".box").each( function(i) {
    $(this).attr('position', (i+1));
  });
  };

function addBorder() {
  //find all of the border divs and add a border class to them
}

function addSnake () {

moveRight = function() {$('*[position="' + ves + '"]').addClass("hover");
$('*[position="' + (ves - 1) + '"]').removeClass("hover");
};

moveLeft = function() {$('*[position="' + ves + '"]').addClass("hover");
$('*[position="' + (ves + 1) + '"]').removeClass("hover");
};

moveDown = function() {$('*[position="' + ves + '"]').addClass("hover");
$('*[position="' + (ves - 25) + '"]').removeClass("hover");
};

moveUp = function() {$('*[position="' + ves + '"]').addClass("hover");
$('*[position="' + (ves + 25) + '"]').removeClass("hover");
};

var ves = 22;
$('*[position="' + ves + '"]').addClass("hover");
$(".box-262").addClass("hover");
$(".box-263").addClass("hover");

  moveSnake = function() {
  $(document).keydown(function(e) {

  if (e.keyCode == '39'){
            console.log("yes")
                ves += 1
                moveRight();
            }

            else if (e.keyCode == '37') {
              console.log("yes")
                ves -= 1
                moveLeft();
            }

            else if (e.keyCode == '40') {
              console.log("yes")
                ves += 25
                moveDown();
            }

            else if (e.keyCode == '38') {
              console.log("yes")
                ves -= 25
                moveUp();
            }

          })

            }



};


//function makeNew() {
  //$("#container").empty();
  //makebox();
//};

/* $(document).on("mouseenter", ".box", function() {
  $(this).addClass("hover");
}); */
