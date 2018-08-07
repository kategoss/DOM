$(document).ready(function(){
  $("button#hello)").click(function() {
    $("ul#user").prepend("<li>Meow</li>");
    $("ul#webpage").prepend("<li>Meow Meow!</li>");
  });

  $("button#goodbye)").click(function() {
    $("ul#user").prepend("<li>Bark</li>");
    $("ul#webpage").prepend("<li>Bark Bark!</li>");
  });
});
