//I would not have been able to make this game work without the help of Michał Sałaciński:
//https://stackoverflow.com/questions/44305879/why-don-t-my-array-values-reflect-what-i-see-on-the-screen

//I used this answer to add a direction variable and split up my moveSnake function. Now I have less code and
//a user can press a key multiple times without speeding the snake up.
//https://stackoverflow.com/questions/11154365/snake-game-on-jquery-javascript-when-pressing-key-snake-moving-faster

$(document).ready(function() {
  makebox();
  addSnake();
  moveSnake();
  addBorder();
  addFood();
  addToSnake();
  });

  var previousSnake = null;

  function makebox() {

    var size = 24;
    var boxSize = 12;
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

    if ($(this).attr('data') % 18 == 0) {
      $(this).addClass("right-border")
    }
    else if ($(this).attr('data') % 18 == 1) {
      $(this).addClass("left-border")
    }
    else if ($(this).attr('data') < 18) {
      $(this).addClass("top-border")
    }
    else if ($(this).attr('data') >= 559 ) {
      $(this).addClass("bottom-border") }
      })
}

function addSnake () {

var dir = "right"

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

moveSnake = function() {

move = setInterval(function(){

if (dir == "right"){
       $('*[data="' + (snake[0]+1) + '"]').addClass("hover")
       $('*[data="' + snake[snake.length-1] + '"]').removeClass("hover");
       previousSnake = snake[snake.length-1]
       updateSnakeNumbers(snake[0]+1) }

else if (dir == "left"){
  $('*[data="' + (snake[0]-1) + '"]').addClass("hover");
  $('*[data="' + snake[snake.length-1]  + '"]').removeClass("hover");
  previousSnake = snake[snake.length-1]
  updateSnakeNumbers(snake[0]-1)
}

else if (dir == "down") {
  $('*[data="' + (snake[0]+18) + '"]').addClass("hover");
  $('*[data="' + snake[snake.length-1] + '"]').removeClass("hover");
  previousSnake = snake[snake.length-1]
  updateSnakeNumbers(snake[0]+18)
}

else if (dir == "up") {
  $('*[data="' + (snake[0]-18) + '"]').addClass("hover");
  $('*[data="' + snake[snake.length-1]  + '"]').removeClass("hover");
  previousSnake = snake[snake.length-1]
  updateSnakeNumbers(snake[0]-18)
}

//The below code to find duplicate array values was taken from the following site:
//https://www.thepolyglotdeveloper.com/2015/02/calculate-duplicates-exist-array-using-javascript/

var counts = [];
    for(var i = 0; i <= snake.length; i++) {
        if(counts[snake[i]] === undefined) {
            counts[snake[i]] = 1;
        } else {
          dir = ""
          alert("Game over!")
          window.location.reload(false);
        }
    }

    if ( $(".hover").hasClass("right-border") == true || $(".hover").hasClass("left-border") == true
    || $(".hover").hasClass("top-border") == true || $(".hover").hasClass("bottom-border") == true) {
      dir = ""
      alert("Game over!")
      window.location.reload(false);
    }

}, 150);

    $(document).keydown(function(event){

   if(event.which == '39'){
        dir = "right"; }

  else if(event.which == '37'){
         dir = "left"; }

   else if(event.which == '40'){
          dir = "down"; }

    else if(event.which == '38'){
           dir = "up"; }


 });

 addToSnake = function(){

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

}

addFood = function(){
  var random = Math.floor(Math.random() * (500 - 1 + 1)) + 1;
  if (random % 18 == 0 || random % 18 == 1 || random < 17) {
    addFood();
  }
  else (  $('*[data="' + random + '"]').addClass("food") )
};

};
