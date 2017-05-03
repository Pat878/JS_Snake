$(document).ready(function() {
  makebox();
  makeNew();
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
    $(this).addClass('box-' + (i+1));
  });
  };

function addSnake () {
  $(".box-261").addClass("hover");
    $(".box-262").addClass("hover");
        $(".box-263").addClass("hover");
};

function moveSnake() {
  $(document).keydown(function(e) {
    if (e.keyCode == '39'){
      console.log("39")
    }
  })
};

function makeNew() {
  $("#container").empty();
  makebox();
};

/* $(document).on("mouseenter", ".box", function() {
  $(this).addClass("hover");
}); */
