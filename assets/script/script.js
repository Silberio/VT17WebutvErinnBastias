 var amountOfIngr = document.getElementsByClassName("amount");
// empty array to store values from HTML later
 var baseVal = [];
 var newVal = [];
// the class "amount" are spans with a number; amountOfIngr is supposed
//to be each of these amounts


//the button which is used in the HTML
 document.getElementById("portions").addEventListener("change", updateIngredients);

 function initBaseValues(){

 	for (var i = 0; i < amountOfIngr.length; i++) {
 	 	var value = parseFloat(amountOfIngr[i].innerHTML);
	 	baseVal.push(value);
 	}

 	return baseVal;
 }


function selectValue() {
	//this is the number by which I want to multiply the array elements
	var portionModifier = parseInt(document.getElementById('portions').value);
	return portionModifier;
}


function multiplyPortions() {
	for (var i = 0; i < baseVal.length; i++) {
		var firstVal = parseFloat(baseVal[i]);
		var secondVal = parseFloat(selectValue());
		var sumVal = firstVal * secondVal;
		var numToString = sumVal.toString();
		newVal.push(numToString);
	}

	return newVal;
}

function setHTMLValues(newValues) {

		for(var i = 0; i < amountOfIngr.length; i++) {
		amountOfIngr[i].innerHTML = newValues[i];
	}
}

function clearValues() {
	newVal = [];
}

function updateIngredients() {
	initBaseValues();
	multiplyPortions();
	setHTMLValues(newVal);
	clearValues();
}

/*
		*** RATING SCRIPT ***
*/
//Possible api key because I think i screwed up something: 4dfb406a7b686c95

// API Key c272c7562dc7fda8
"use strict"

var stars = document.getElementsByClassName('star');
var averageRating = document.getElementById('averageRating');
var xmlHttp = new XMLHttpRequest();

//listener
function voteOnClick(starVal){
		changeStarColor(starVal);
        userVote(starVal);
        getAverageRatings();
		resetStarColor(starVal);
	}

//this makes the rest of the non-clicked stars white
function resetStarColor(starVal){
	for(i = starVal; i < 5; i++) {
        stars[i].style.color = "white";
        //line 83 throws typeError: stars[i] is undefined.
	}
}

//changes colors ofselected star and the ones behind
function changeStarColor(starVal){
    for(i = 0; i < starVal; i++){
        stars[i].addEventListener('click', function(e){                  
        });
        stars[i].style.color = "#ffcc00";
   	}
}


//This takes the numerial value of a star and sends it to API I think
function userVote(starVal){

    xmlHttp.open("GET", " https://edu.oscarb.se/sjk15/api/recipe/?api_key=4dfb406a7b686c95&recipe=muggkladdkaka&rating=" + starVal, true);
    xmlHttp.send();
}

//AJAX - returns votes n rating n all that
function getAverageRatings(){

	xmlHttp.onreadystatechange  = function() {
		if(xmlHttp.readyState==4 && xmlHttp.status==200){
		var data = JSON.parse(xmlHttp.responseText);
		averageRating.innerHTML = "Rating: " + data.rating.toFixed(1) + " Votes: " + data.votes;
		}
	};

	xmlHttp.open("GET", "https://edu.oscarb.se/sjk15/api/recipe/?api_key=4dfb406a7b686c95&recipe=muggkladdkaka", true);
	xmlHttp.send();
}

//run rating scrip on page loading
// window.onload = getAverageRatings();
window.onload = getAverageRatings();