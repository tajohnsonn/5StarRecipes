/* UCLA PROJECT 01 */
/* FiveStarRecipes */

/* Event Listener */
$(document).ready(function() {

	$(".imageSearch").click(function(event) {
		var imageSearchVal = $(this).text();
		console.log(imageSearchVal);
		recipePull(imageSearchVal);
		localStor(imageSearchVal);
	});

	$("#search").click(function(event) {
		event.preventDefault();

		var appQuery = $("#searchbar").val();

		/* Run API Call */
		localStor(appQuery);
		recipePull(appQuery);
	});
});

function localStor(searchTerm) {
	/* Local Storage */
	
	localVar = localStorage.getItem("recipeSearches");
	
	if (localVar === null) {
		var lovalVarArray = [];
	} else {
		var lovalVarArray = JSON.parse(localVar);
	}
	
	console.log(lovalVarArray);
	lovalVarArray.push(searchTerm);
	finalList = JSON.stringify(lovalVarArray);
	localStorage.setItem("recipeSearches", finalList);
}


/* Credentials */
var appId = "5cf2449c";
var appKey = "5cf1678b66b687897855b342ee20ede8";
var appUrl = "https://api.edamam.com/search?";

/* API CALL */
function recipePull (q) {
	
	var appCall = appUrl + "app_id=" + appId + "&app_key=" + appKey + "&q=" + q;

	console.log(appCall);
	$.get(appCall, function( result ) {
		/* Pull values */
		
		for (var i = 0; i < result.hits.length; i++) {

			console.log ("result.hits.length -- " + result.hits.length);

			/* Strings */
			var label = result.hits[i].recipe.label
			var image = result.hits[i].recipe.image

			var calories =result.hits[i].recipe.calories
			var totalWeight =result.hits[i].recipe.totalWeight 
			var totalTime = result.hits[i].recipe.totalTime    

			/* Arrays */
			var dietLabels = result.hits[i].recipe.dietLabels
			var healthLabels = result.hits[i].recipe.healthLabels
			var cautions = result.hits[i].recipe.cautions
			var ingredientLines = result.hits[i].recipe.ingredientLines
			var ingredients = result.hits[i].recipe.ingredients

			var recipeDiv = "<div class='recipeCard'><img src='" + image +"'><h2>" + label +"</h2><p class='dietLabels'>" + parseList(dietLabels, false) +"</p><p class='healthLabels'>" + parseList(healthLabels, false) +"</p><p class='cautions'>" + parseList(cautions, false) +"</p><p class='ingredientLines'>" +parseList(ingredientLines, false)  +"</p><p class='ingredients'>" + parseList(ingredients, true) +"</p></div>";

			$("#result").append(recipeDiv);
		}
		
		function parseList(foodList,multi ){

			var holder = "<ul>" 

			for (var index = 0; index < foodList.length; index++) {
				if (multi === false){
					holder += "<li>" + foodList[index] + "</li>"
				} else {
					holder += "<li>" + foodList[index].text + "</li>"
				}
			}

			holder += "</ul>"
			return holder
		}
	});
}
