// console.log("ghfvdsobytrfde");

$(document).ready(function () {
  // var button = $(".recipeCard");
  var contentModal = $("#recipeIngredientCard");
  var closeModalBtn = $(".modal-close");
  $("body").on("click", ".recipeCard", function () {
    // do something
    console.log("Yo");

    recipeID = $(this).attr("id");
    console.log("recipeID " + recipeID);
    recID = recipeID.replace("recipe", "");
    $("#placeholderRecipe").val(recipeID);
    populateModal(recID);


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


  function populateModal (id) {
      var label = $("#recipe" + id + " h2").text();
      var image = $("#recipe" + id + " img").attr("src");

      /* Arrays */
      var dietLabels = $("#recipe" + id + " .dietLabels").html();
      var healthLabels = $("#recipe" + id + " .healthLabels").html();
      var cautions = $("#recipe" + id + " .cautions").html();
      var ingredientLines = $("#recipe" + id + " .ingredientLines").html();
      // var ingredients = $("#recipe" + id + " .ingredients").html();

      $("#recipeTitle").text(label);
      $(".modal-card-body img").attr("src", image);
      $("#modal-recipe-content .dietLabels").html(dietLabels);
      $("#modal-recipe-content .healthLabels").html(healthLabels);
      $("#modal-recipe-content .cautions").html(cautions);
      $("#modal-recipe-content .ingredientLines").html(ingredientLines);
  }
});
