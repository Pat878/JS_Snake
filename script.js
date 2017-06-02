//In the moveSnake function I had to use code from the below link in order to ignore multiple keydown events.
//https://stackoverflow.com/questions/9098901/how-to-disable-repetitive-keydown-in-jquery

$(document).ready(function() {
  makebox();
  addSnake();
  moveSnake();
  //addBorder();
  addFood();
  killSnake();
  addToSnake();
  });

  var previousSnake = null;

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

    $('*[data="' + (snake[0]+1) + '"]').addClass("hover")
    $('*[data="' + snake[snake.length-1] + '"]').removeClass("hover");
    previousSnake = snake[snake.length-1]
    updateSnakeNumbers(snake[0]+1)
     }, 150)

};

moveLeft = function() {
  right = false;
  left= true;
  up = false;
  lildown = false;
  down = {}
  leftTime = setInterval(function(){ //snake -= 1
    $('*[data="' + (snake[0]-1) + '"]').addClass("hover");
    $('*[data="' + snake[snake.length-1]  + '"]').removeClass("hover");
    previousSnake = snake[snake.length-1]
    updateSnakeNumbers(snake[0]-1)
   }, 150)

};

moveDown = function() {
  right = false;
  left= false;
  up = false;
  lildown = true;
  down = {}
  downTime = setInterval(function(){ //snake += 25
    $('*[data="' + (snake[0]+18) + '"]').addClass("hover");
    $('*[data="' + snake[snake.length-1] + '"]').removeClass("hover");
    previousSnake = snake[snake.length-1]
    updateSnakeNumbers(snake[0]+18)

    }, 150)

};

moveUp = function() {
  right = false;
  left= false;
  up = true;
  lildown = false;
  down = {}
  upTime = setInterval(function(){ //snake -= 25
    $('*[data="' + (snake[0]-18) + '"]').addClass("hover");
      $('*[data="' + snake[snake.length-1]  + '"]').removeClass("hover");
      previousSnake = snake[snake.length-1]
      updateSnakeNumbers(snake[0]-18)
     }, 150)

};

addTail = function() {
  snake.push(previousSnake)
  }

var snake = [42]

function updateSnakeNumbers(head){
  var prevNum = head
  snake = snake.map(n=>{
    var tmpPrev = prevNum;
    prevNum = n;
    return tmpPrev
  })
}

$('*[data="' + snake[0] + '"]').addClass("hover");

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
          ();
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
  var random = Math.floor(Math.random() * (500 - 1 + 1)) + 1;
  $('*[data="' + random + '"]').addClass("food")
};

};
