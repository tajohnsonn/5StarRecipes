/* UCLA PROJECT 01 */
/* FiveStarRecipes */

/* Credentials */
var appId = "5cf2449c";
var appKey = "5cf1678b66b687897855b342ee20ede8";
var appUrl = "https://api.edamam.com/search?";
var appQuery = "chicken";

/* API CALL */
function recipePull (parameters) {
	var appCall = appUrl + "app_id=" + appId + "&app_key=" + appKey + "&q=" + appQuery;
	$.get(appCall, function( result ) {
		/* Pull values */
		
		/* Strings */
		var label = 
		var image = 
		var calories = 
		var totalWeight = 
		var totalTime = 

		/* Arrays */
		var dietLabels = 
		var healthLabels = 
		var cautions = 
		var ingredientLines = 
		var ingredients = 

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
