//In the moveSnake function I had to use code from the below link in order to ignore multiple keydown events.
//https://stackoverflow.com/questions/9098901/how-to-disable-repetitive-keydown-in-jquery

$(document).ready(function() {
  makebox();
  addSnake();
  moveSnake();
  addBorder();
  addFood();
  killSnake();
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

var time, leftTime;

moveRight = function() {
  down = {}
  right = true;
  time = setInterval(function(){ value += 1
  $('*[data="' + value + '"]').addClass("hover");
  $('*[data="' + (value - 1) + '"]').removeClass("hover"); }, 250);
  killSnake();
};

moveLeft = function() {
  down = {}
  leftTime = setInterval(function(){ value -= 1
  $('*[data="' + value + '"]').addClass("hover");
  $('*[data="' + (value + 1) + '"]').removeClass("hover"); }, 250)
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

var down = {};

  moveSnake = function() {

    $(document).keydown(function(event){
   var keycode = (event.keyCode ? event.keyCode : event.which);
   if(keycode == '39'){
        if (down['39'] == null) { // first press
          window.clearInterval(leftTime);
          moveRight();
          down['39'] = true;
        }
   }

  else if(keycode == '37'){
        if (down['37'] == null) {
          window.clearInterval(time);
          moveLeft();
          down['37'] = true;
                    }
   }

 });

          killSnake = function() {
            if ($(".left-border").hasClass("hover") == true && right == true ) {
                 alert("You lose!")}
                 else if ($(".right-border").hasClass("hover") == true && left == true ) {
                      alert("You lose!")}
                      else if ($("div").hasClass("hover") == false && (down == true || left == true) ) {
                           alert("You lose!")}
                           else if ($("div").hasClass("hover") == false && up == true ) {
                                alert("You lose!")}
          }
}

addFood = function(){
  var random = Math.floor(Math.random() * (900 - 1 + 1)) + 1;
  $('*[data="' + random + '"]').addClass("food")
};

addToSnake = function(){};

};
