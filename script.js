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

var rightTime, leftTime, downTime, upTime, right;

moveRight = function() {
  down = {}
  rightTime = setInterval(function(){ value += 1
  $('*[data="' + value + '"]').addClass("hover");
  $('*[data="' + (value - 1) + '"]').removeClass("hover"); }, 250);
  right = true;
  console.log(right)
  killSnake();
};

moveLeft = function() {
  down = {}
  leftTime = setInterval(function(){ value -= 1
  $('*[data="' + value + '"]').addClass("hover");
  $('*[data="' + (value + 1) + '"]').removeClass("hover"); }, 250)
  killSnake();
};

moveDown = function() {
  down = {}
  downTime = setInterval(function(){ value += 25
  $('*[data="' + value + '"]').addClass("hover");
  $('*[data="' + (value - 25) + '"]').removeClass("hover");}, 250)
  killSnake();
};

moveUp = function() {
  down = {}
  upTime = setInterval(function(){ value -= 25
  $('*[data="' + value + '"]').addClass("hover");
  $('*[data="' + (value + 25) + '"]').removeClass("hover");}, 250)
  killSnake();
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
        if (down['39'] == null) {
          window.clearInterval(leftTime);
          window.clearInterval(downTime);
          window.clearInterval(upTime);
          moveRight();
          down['39'] = true;
        }
   }

  else if(keycode == '37'){
        if (down['37'] == null) {
          window.clearInterval(rightTime);
          window.clearInterval(downTime);
          window.clearInterval(upTime);
          moveLeft();
          down['37'] = true;
                    }
   }

   else if(keycode == '40'){
         if (down['40'] == null) {
           window.clearInterval(leftTime);
           window.clearInterval(rightTime);
           window.clearInterval(upTime);
           moveDown();
           down['40'] = true;
                     }
    }

    else if(keycode == '38'){
          if (down['38'] == null) {
            window.clearInterval(leftTime);
            window.clearInterval(rightTime);
            window.clearInterval(downTime);
            moveUp();
            down['38'] = true;
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
