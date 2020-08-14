// console.log("ghfvdsobytrfde");

$(document).ready(function () {
  var button = $("#recipeCard");
  var contentModal = $("#recipeIngredientCard");
  var closeModalBtn = $(".modal-close");
<<<<<<< HEAD

  button.on("click", function () {
    console.log("Open");

=======

  button.on("click", function () {
    console.log("button");

>>>>>>> b36452be092fecf3e31d8a2d8e82375c8c50d00a
    contentModal.css({ display: "block" });
  });

  closeModalBtn.on("click", function () {
    console.log("Close");
    contentModal.css({ display: "none" });
  });

<<<<<<< HEAD
  $(window).click(function (event) {
    var tar = $(event.target).attr("class");
    // var tar = $(event[(target = "div.modal-background")]);

    if (tar == "modal-background") {
      // console.log("Hi Im BG");
      contentModal.css({ display: "none" });
    }
=======
  $(window).on("click", function (event) {
    console.log(event);

    // if ((EventTarget.is = $("div.modal-background"))) {
    //   contentModal.css({ display: "none" });
    // }
>>>>>>> b36452be092fecf3e31d8a2d8e82375c8c50d00a
  });
});
