var size = 30;
var boxSize = 20;

$(document).ready(function() {
  makebox();
  makeNew();
});


function makebox() {
  for (i=1;i<=size*size;i++) {
    $("#container").append("<div class='box'></div>");
  };
  $("#container").width(size*boxSize + "px");
  $(".box").width(boxSize + "");
  $(".box").height(boxSize + "px");
  $(".box").each( function(i) {
    $(this).addClass('.box-' + (i+1));
  });
  };

function makeNew() {
  $("#container").empty();
  makebox();
};

/* $(document).on("mouseenter", ".box", function() {
  $(this).addClass("hover");
}); */
