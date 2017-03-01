	var elements = document.getElementsByClassName('amount');
	var baseVal = [];

	var portion = document.getElementById('portions').addEventListener("change", checkCurrentPortion);
	var btn = document.getElementById('btn').addEventListener("click", newFunction);

	function newFunction(){
		var listValue = document.getElementById('portions').value;
		//this function prints the value of option in drop down list
		var numValues = parseInt(document.getElementsByClassName('amount'));
		document.getElementById('test').innerHTML = numValues;
	}

	function checkCurrentPortion() {
	
	
	}

