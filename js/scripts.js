$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const userInput = $("input#to-shout").val();

    $(".shouter").text(userInput.toUpperCase().concat("!!!!!!!!"));

    $("#shout").show();
  });
});