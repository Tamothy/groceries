$(document).ready(function() {
  $("#blanks form").submit(function(event) {

  var blanks = [$("input#item_one").val(), $("input#item_two").val(), $("input#item_three").val(), $("input#item_four").val(), $("input#item_five").val()];

  var alpha = blanks.sort();

  var a_u = alpha.map(function(a){
    return a.toUpperCase();
  });

  $("ol").append("<li>" + a_u[0] + "</li>");
  $("ol").append("<li>" + a_u[1] + "</li>");
  $("ol").append("<li>" + a_u[2] + "</li>");
  $("ol").append("<li>" + a_u[3] + "</li>");
  $("ol").append("<li>" + a_u[4] + "</li>");


  $("#groceries").show();

  event.preventDefault();
  });
});
