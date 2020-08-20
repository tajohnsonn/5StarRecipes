/* UCLA PROJECT 01 */
/* FiveStarRecipes */

/* Event Listener */
var alcholFreeSelected = false;
var lowFatSelected = false;
var peanutFreeSelected = false;
var veganSelected = false;

var lovalVarArray = [];

$(document).ready(function () {
  $("#emailBtn").on("click", function (event) {
    event.preventDefault();
    var item = 0;
    console.log("ITEM" + item);
    var email = $("#emailInp").val();
    var recipeID = $("#placeholderRecipe").val();
    var recipeNumber = recipeID.replace("recipe", "");
    console.log("ID:" + recipeNumber);
    sendEmail(recipeNumber, email);
  });

  $(".imageSearch").click(function (event) {
    var imageSearchVal = $(this).text();
    console.log(imageSearchVal);
    recipePull(imageSearchVal);
    localStor(imageSearchVal);
  });
  var queryString = window.location.search;
  console.log(queryString);
  var urlParams = new URLSearchParams(queryString);
  var searchUrl = urlParams.get("search");
  console.log(searchUrl);
  if (searchUrl !== null) {
    localStor(searchUrl);
    recipePull(searchUrl);
  }
  $("#search").click(function (event) {
    event.preventDefault();

    var appQuery = $("#searchbar").val();

    /* Run API Call */
    localStor(appQuery);
    recipePull(appQuery);
  });

  $("body").on("click", ".localItem", function () {
    var appQuery = $(this).text();
    /* Run API Call */
    localStor(appQuery);
    recipePull(appQuery);
  });

  $("#alcoholFree").change(function () {
    alcholFreeSelected = $(this).prop("checked");
  });
  $("#lowFat").change(function () {
    lowFatSelected = $(this).prop("checked");
  });
  $("#peanutFree").change(function () {
    peanutFreeSelected = $(this).prop("checked");
  });
  $("#vegan").change(function () {
    veganSelected = $(this).prop("checked");
  });

function sendEmail(recipeId, emailAddress) {
  var labelEl = $("#recipe" + recipeId + "  h2").html();
  var msgEl = $("#emailMessage" + recipeId);
  msgEl.text("");

  var htmlBody =
    "<div><img src='https://tajohnsonn.github.io/5StarRecipes/Assets/Images/email-header.png'><br><hr><br>" +
    $("#recipe" + recipeId).html() +
    "</div>";

  // Generate HTML content
  var to_email = emailAddress;
  var reply_to_value = "alexblakela@gmail.com";
  var from_name_value = "5 Star Recipes";
  var to_name_value = "Guest";
  var message_html_value = htmlBody;
  var subject_line = "Your " + labelEl + " Recipe Inside";

  // Run API call
  // code fragment
  var data = {
    service_id: "default_service",
    template_id: "template_6Ahnf58T",
    user_id: "user_0NQz8zbO39UFwf59ot2tg",
    template_params: {
      to_email: to_email,
      subject_line: subject_line,
      reply_to: reply_to_value,
      from_name: from_name_value,
      to_name: to_name_value,
      message_html: message_html_value,
    },
  };

  $.ajax("https://api.emailjs.com/api/v1.0/email/send", {
    type: "POST",
    data: JSON.stringify(data),
    contentType: "application/json",
  })
    .done(function () {
      // alert('Your mail is sent!');
      msgEl.text("Your mail is sent!");
    })
    .fail(function (error) {
      // alert('Oops... ' + JSON.stringify(error));
      msgEl.text("Oops... " + JSON.stringify(error));
    });

  // Display confirmation on page
}  
});



function localStor(searchTerm) {
  /* Local Storage */

  var localVar = localStorage.getItem("recipeSearches");

  if (localVar === null) {
    var lovalVarArray = [];
  } else {
    var lovalVarArray = JSON.parse(localVar);
  }
  console.log(lovalVarArray);
  lovalVarArray.push(searchTerm);
  finalList = JSON.stringify(lovalVarArray);
  localStorage.setItem("recipeSearches", finalList);
  var localVar2 = localStorage.getItem("recipeSearches");
  var localArray = JSON.parse(localVar2);

  console.log("localVar length is " + localArray.length);

  $("#localStorage").html("");
  for (var index = 0; index < localArray.length; index++) {
    var localItem = "<p class = 'localItem'>" + localArray[index] + "</p>";
    $("#localStorage").prepend(localItem);
  }
}

/* Credentials */
var appId = "5cf2449c";
var appKey = "5cf1678b66b687897855b342ee20ede8";
var appUrl = "https://api.edamam.com/search?";

/* API CALL */
function recipePull(q) {
  var appCall = appUrl + "app_id=" + appId + "&app_key=" + appKey + "&q=" + q;
  if (alcholFreeSelected) {
    appCall = appCall + "&health=alcohol-free";
  }
  if (lowFatSelected) {
    appCall = appCall + "&diet=low-fat";
  }
  if (peanutFreeSelected) {
    appCall = appCall + "&health=peanut-free";
  }
  if (veganSelected) {
    appCall = appCall + "&health=vegan";
  }

  console.log(appCall);
  $.get(appCall, function (result) {
    /* Pull values */
    $("#result").empty();
    for (var i = 0; i < result.hits.length; i++) {
      console.log("result.hits.length -- " + result.hits.length);

      /* Strings */
      var label = result.hits[i].recipe.label;
      var image = result.hits[i].recipe.image;

      var calories = result.hits[i].recipe.calories;
      var totalWeight = result.hits[i].recipe.totalWeight;
      var totalTime = result.hits[i].recipe.totalTime;

      /* Arrays */
      var dietLabels = result.hits[i].recipe.dietLabels;
      var healthLabels = result.hits[i].recipe.healthLabels;
      var cautions = result.hits[i].recipe.cautions;
      var ingredientLines = result.hits[i].recipe.ingredientLines;
      var ingredients = result.hits[i].recipe.ingredients;

      var recipeDiv =
        "<div class='recipeCard' id = 'recipe" +
        i +
        "'>" +
        "<img src='" +
        image +
        "'/>" +
        "<h2>" +
        label +
        "</h2>" +
        parseList(dietLabels, false, "dietLabels") +
        parseList(healthLabels, false, "healthLabels") +
        parseList(cautions, false, "cautions") +
        parseList(ingredientLines, false, "ingredientLines") +
        "</div>";

      var form =
        "<div id='emailMessage" +
        i +
        "'></div>" +
        "<input class='hideme' id='emailInp" +
        i +
        "' type='email' class='myEmail'>" +
        "<button id='emailBtn" +
        i +
        "' type='submit' class='hideme sendMe' value='" +
        i +
        "'>Send</button><br>";

      // $("#result").append(recipeDiv + form);
      $("#result").append(recipeDiv);

    
    }

    function parseList(foodList, multi, className) {
      var holder = "<ul class='hideme " + className + "'>";
      for (var index = 0; index < foodList.length; index++) {
        if (multi === false) {
          holder += "<li>" + foodList[index] + "</li>";
        } else {
          holder += "<li>" + foodList[index].text + "</li>";
        }
      }
      holder += "</ul>";
      return holder;
    }
  });
}
