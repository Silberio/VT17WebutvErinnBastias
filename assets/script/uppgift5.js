
/* CHECK PERSONAL ID NUMBER */

var personNumInput = document.getElementById('personNumInput');
var personNumOutput = document.getElementById('outputField');
var personNum;

function performValidityCheck(){

	takeInput();
	personNum = checkNumLength(personNum);
	luhnCheck(personNum);
	if(luhnCheck(personNum)== true) {
		outputValid();
	} else
		outputInvalid();
}

/* This takes input from field on HTML file */
function takeInput() {
	personNum = personNumInput.value;

	}

/* this checks if the number is of 10 or 12 digits */
function checkNumLength(num) {

	if(num.length == 12) {
	num = shortenNumber(num);
		}
	else if(num.length == 10){
		num = num;
	}
	/* This is an exception handler */
	else if(num.length !== 10 || num.length !== 12){
		num = null
		personNumOutput.innerHTML = "Invalid Number";
	}

	return num;
}

function shortenNumber(num) {
	return num.substring(2, 12);
}

/* Entire freakin Luhn check */
function luhnCheck(num) {
	var sum = (""+num).split("");
	var controlNum = parseInt(sum[9]);
	var value;
	var idNumSum = 0;

	for(var i=0; i<9; i++){
	 	if (i % 2 == 0) {
	 		value = 2 * parseInt(sum[i]);
	 		if (value >= 10) {
	 			value = (Math.floor(value / 10) + value %10);
	 		}
	 	} else {
	 		value = +sum[i];
	 	}
	 	idNumSum += value;
	}

	var luhnCheckDivide =  idNumSum + controlNum;
	if(luhnCheckDivide%10==0){
		return true;
	} else
		return false;
}

function outputValid(){
	personNumOutput.innerHTML = "Valid ID Number!";
	personNumOutput.style.backgroundColor = "#72e847";
}

function outputInvalid(){
	personNumOutput.innerHTML = "Invalid ID Number!";
	personNumOutput.style.backgroundColor = "#f20909";
}

/* CHECK IF SHOOT YEAR */



/* CHECK SUM OF NUMBER */