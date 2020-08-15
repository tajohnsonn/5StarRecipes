// console.log("ghfvdsobytrfde");

$(document).ready(function () {
  var button = $("#recipeCard");
  var contentModal = $("#recipeIngredientCard");
  var closeModalBtn = $(".modal-close");
  // history
  button.on("click", function () {
    console.log("Open");

    contentModal.css({ display: "block" });
  });

  closeModalBtn.on("click", function () {
    console.log("Close");
    contentModal.css({ display: "none" });
  });

  $(window).click(function (event) {
    var tar = $(event.target).attr("class");
    // var tar = $(event[(target = "div.modal-background")]);
    if (tar == "modal-background") {
      // console.log("Hi Im BG");
      contentModal.css({ display: "none" });
    }
  });
});
