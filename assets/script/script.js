	var elements = document.getElementsByClassName('amount');

	document.getElementById('portion').addEventListener("click", checkCurrentPortion)

	function checkCurrentPortion() {
		var x = document.getElementById('portion').value;


			for(i = 0; i < elements.length; i++){
			elements[i].innerHTML *= x;
		}
	}

