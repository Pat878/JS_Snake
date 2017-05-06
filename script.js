$(document).ready(function() {
  makebox();
  //makeNew();
  addSnake();
  movaluenake();
  addBorder();
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
    $(this).attr('data', (i+1));
  });
  };

function addBorder() {
  //find all of the border divs and add a border class to them
  $(".box").each(function(){

    if ($(this).attr('data') % 25 == 0) {
      $(this).addClass("right-border")
    }
    else if ($(this).attr('data') % 25 == 1) {
      $(this).addClass("left-border")
    }
    else if ($(this).attr('data') < 25) {
      $(this).addClass("top-border")
    }
    else if ($(this).attr('data') >= 877 ) {
      $(this).addClass("bottom-border") }
      })
}

function addSnake () {

moveRight = function() {$('*[data="' + value + '"]').addClass("hover");
$('*[data="' + (value - 1) + '"]').removeClass("hover");
};

moveLeft = function() {$('*[data="' + value + '"]').addClass("hover");
$('*[data="' + (value + 1) + '"]').removeClass("hover");
};

moveDown = function() {$('*[data="' + value + '"]').addClass("hover");
$('*[data="' + (value - 25) + '"]').removeClass("hover");
};

moveUp = function() {$('*[data="' + value + '"]').addClass("hover");
$('*[data="' + (value + 25) + '"]').removeClass("hover");
};

var value = 22;
$('*[data="' + value + '"]').addClass("hover");
$(".box-262").addClass("hover");
$(".box-263").addClass("hover");

  movaluenake = function() {
  $(document).keydown(function(e) {

  if (e.keyCode == '39'){
                value += 1
                moveRight();
            }

            else if (e.keyCode == '37') {
                value -= 1
                moveLeft();
            }

            else if (e.keyCode == '40') {
                value += 25
                moveDown();
            }

            else if (e.keyCode == '38') {
                value -= 25
                moveUp();
            }

          })

            }
};
