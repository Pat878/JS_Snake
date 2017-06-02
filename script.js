//In the moveSnake function I had to use code from the below link in order to ignore multiple keydown events.
//https://stackoverflow.com/questions/9098901/how-to-disable-repetitive-keydown-in-jquery

$(document).ready(function() {
  makebox();
  addSnake();
  moveSnake();
  addBorder();
  addFood();
  killSnake();
  addToSnake();
  });

  function makebox() {

    var size = 24;  //24
    var boxSize = 12; //12
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

/*function addBorder() {
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
} */

function addSnake () {

var rightTime, leftTime, downTime, upTime, right, left, up, lildown;

moveRight = function() {
  right = true;
  left= false;
  up = false;
  lildown = false;
  down = {}
  rightTime = setInterval(function(){
  for (var i=0;i<snake.length;i++) {
    snake[i]++
$('*[data="' + snake[i] + '"]').addClass("hover")
$('*[data="' + (snake[snake.length-1]-snake.length) + '"]').removeClass("hover");
console.log(snake)
} }, 150)

};

moveLeft = function() {
  right = false;
  left= true;
  up = false;
  lildown = false;
  down = {}
  leftTime = setInterval(function(){ //snake -= 1
    for (var i = 0; i <snake.length;i++){
        snake[i] -= 1
  $('*[data="' + snake[i] + '"]').addClass("hover");
  $('*[data="' + (snake[snake.length-1]+snake.length ) + '"]').removeClass("hover");

} }, 150)

};

moveDown = function() {
  right = false;
  left= false;
  up = false;
  lildown = true;
  down = {}
  downTime = setInterval(function(){ //snake += 25
    for (var i = 0; i <snake.length;i++){
        snake[i] += 25
  $('*[data="' + snake[i] + '"]').addClass("hover");
  $('*[data="' + (snake[snake.length-1] - 25 * snake.length) + '"]').removeClass("hover");


} }, 150)

};

moveUp = function() {
  right = false;
  left= false;
  up = true;
  lildown = false;
  down = {}
  upTime = setInterval(function(){ //snake -= 25
for (var i = 0; i <snake.length;i++){
        snake[i] -= 25
  $('*[data="' + snake[i] + '"]').addClass("hover");
  $('*[data="' + (snake[snake.length-1] + 25 * snake.length) + '"]').removeClass("hover");
} }, 150)

};

addTail = function() {
    snake.push(snake[snake.length - 1])
console.log(snake)
  }

var snake = [42]

$('*[data="' + snake[0] + '"]').addClass("hover");

var down = {};

removeExtra = function(){

var array = [];

  $(".hover").each(function() {
      array.push($(this).attr("data"));
  });

var len = array.length
var len2 = snake.length - 1
var combo = len-len2

  //for (var i=0;i<len2;i++){
    //array.splice(0,i)
    //$('*[data="' + (array[i]) + '"]').removeClass("hover");}

 }

  moveSnake = function() {

    $(document).keydown(function(event){

   var keycode = (event.keyCode ? event.keyCode : event.which);


   if(keycode == '39'){
        if (down['39'] == null) {
          window.clearInterval(leftTime);
          window.clearInterval(downTime);
          window.clearInterval(upTime);
          moveRight();
          removeExtra();
          down['39'] = true;

                             }
   }

  else if(keycode == '37'){
        if (down['37'] == null) {
          window.clearInterval(rightTime);
          window.clearInterval(downTime);
          window.clearInterval(upTime);
          moveLeft();
        removeExtra();
          down['37'] = true;
                    }
   }

   else if(keycode == '40'){
         if (down['40'] == null) {
           window.clearInterval(leftTime);
           window.clearInterval(rightTime);
           window.clearInterval(upTime);
           moveDown();
        removeExtra();
           down['40'] = true;
                     }
    }

    else if(keycode == '38'){
          if (down['38'] == null) {
            window.clearInterval(leftTime);
            window.clearInterval(rightTime);
            window.clearInterval(downTime);
            moveUp();
        removeExtra();
            down['38'] = true;
                      }
     }

 });

 addToSnake = function(){
   var count = 0;

     var config = { attributes: true, childList: true, characterData: true };

     $(".box, .food").each(function () {
       var target = this;
       var observer = new MutationObserver(function(mutations) {
         mutations.forEach(function(mutation) {
          if ($(".food").hasClass("hover") == true){
            $(".box").removeClass("food")
            addTail();
            addFood();
                      }
                    });
                  });

      observer.observe(target, config);

   });

           }

  killSnake = function() {
    var config = { attributes: true, childList: true, characterData: true, subtree:true };

    $(".right-border, .left-border, .top-border, .bottom-border").each(function () {
      var target = this;
      var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
          console.log("Game over!")
        });
      });

    observer.observe(target, config);
  });
          }
}

addFood = function(){
  var random = Math.floor(Math.random() * (900 - 1 + 1)) + 1;
  $('*[data="' + random + '"]').addClass("food")

};

};
