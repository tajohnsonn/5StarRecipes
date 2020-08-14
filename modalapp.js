// console.log("ghfvdsobytrfde");

$(document).ready(function () {
  var button = $("#recipeCard");
  var contentModal = $("#recipeIngredientCard");
  var closeModalBtn = $(".modal-close");

  button.on("click", function () {
    console.log("button");

    contentModal.css({ display: "block" });
  });

  closeModalBtn.on("click", function () {
    console.log("Close");
    contentModal.css({ display: "none" });
  });

  $(window).on("click", function (event) {
    console.log(event);

    // if ((EventTarget.is = $("div.modal-background"))) {
    //   contentModal.css({ display: "none" });
    // }
  });
});
