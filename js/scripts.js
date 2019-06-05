$(document).ready(function() {
  $("#nameForm").submit(function(event) {
      var userInput = $("input#userName").val();
    $(".userName").append(userInput);

    $("#postCard").show();
      event.preventDefault();
  });
});
