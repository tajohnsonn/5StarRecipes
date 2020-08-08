/* UCLA PROJECT 01 */
/* FiveStarRecipes */

/* Credentials */
var appId = "5cf2449c";
var appKey = "5cf1678b66b687897855b342ee20ede8";
var appUrl = "https://api.edamam.com/search?";
var appQuery = "chicken";

/* API CALL */
function recipePull () {
	var appCall = appUrl + "app_id=" + appId + "&app_key=" + appKey + "&q=" + appQuery;
	$.get(appCall, function( result ) {
		/* Pull values */
		
		/* Strings */
		var label = result.hits[0].recipe.label
		console.log(label)
		var image = result.hits[0].recipe.image
		console.log(image)

		var calories =result.hits[0].recipe.calories
		var totalWeight =result.hits[0].recipe.totalWeight 
		var totalTime = result.hits[0].recipe.totalTime    

		/* Arrays */
		var dietLabels = result.hits[0].recipe.dietLabels
		var healthLabels = result.hits[0].recipe.healthLabels
		var cautions = result.hits[0].recipe.cautions
		var ingredientLines = result.hits[0].recipe.ingredientLines
		var ingredients = result.hits[0].recipe.ingredients

		var recipeDiv = "<div class='recipeCard'><img src='" + image +"'><h2>" + label +"</h2><p class='dietLabels'>" + parseList(dietLabels, false) +"</p><p class='healthLabels'>" + parseList(healthLabels, false) +"</p><p class='cautions'>" + parseList(cautions, false) +"</p><p class='ingredientLines'>" +parseList(ingredientLines, false)  +"</p><p class='ingredients'>" + parseList(ingredients, true) +"</p></div>";

		
		function parseList(foodList,multi ){

			var holder = "<ul>" 
		if (multi === false){

		
			for (var index = 0; index < foodList.length; index++) {
				holder += "<li>" + foodList[index] + "</li>"

				
			}
		}else{
			for (var index = 0; index < foodList.length; index++) {
			holder += "<li>" + foodList[index].text + "</li>"

			
		}

		}
		holder += "</ul>"
			return holder
		}
		$("#result").append(recipeDiv)
	
		console.log("pulled");
	}).done(function() {
		/* Update page with results */
		console.log("updated");
	});

}

/* Event Listener */
$(document).ready(function() {
	$("#search").click(function(event) {
		event.preventDefault();
		console.log("search started");

		/* Run API Call */
		recipePull();


	});
});
