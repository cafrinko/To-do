//business logic
function Todo(item, descript, due) {
  this.item = item;
  this.descript = descript;
  this.due = due;
}

//user interface logic
$(document).ready(function() {
  $("#list").submit(function(event) {
    event.preventDefault();
    $(".output").show();

    var inputtedItem = $("#item").val();
    var inputtedDescription = $("#description").val();
    var inputtedDue = $("#due").val();

    var newItem = new Todo(inputtedItem, inputtedDescription, inputtedDue);

    $(".list-output").append("<li><span id='do-list'>" + newItem.item + "</span></li>");
    $(".due").append("<li><span id='due-output'>" + newItem.due + "</span></li><p><span class='done'>Click here when done</span></p>");

    $("#do-list").last().click(function() {
      $("#show-descript").toggle();
      $(".description").text(newItem.descript);
    });



    $(".done").last().click(function() {
    $(".listy").toggleClass("strikethrough");
    });

    $("#item").val("");
    $("#description").val("");
    $("#due").val("");

  });

});
