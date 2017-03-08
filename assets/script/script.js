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