// console.log("ghfvdsobytrfde");
var button = $("#recipeCard");
var contentModal = $("#recipeIngredientCard");
var closeModalBtn = $(".delete")[0];

$(document).ready(function () {
  $("#recipeCard").on("click", function () {
    console.log("button");

    $("#recipeIngredientCard").css({ display: "block" });
  });

  //   button.addEventListener("click", function () {
  //     closeModalBtn.style.display = "none";
  //   });

  //   window.addEventListener("click", function (event) {
  //     console.log(event);

  //     if (event.target.className == "modal-background") {
  //       closeModalBtn.style.display = "none";
  //     }
  //   });
});
