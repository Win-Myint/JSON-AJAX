log = console.log;

var urlNum = 1;

// target animal-info div for easy use
var animalInfo = document.getElementById('animal-info');

function onBtnClick() {
	// make an instance of browser built in XMLHttpRequest object
	var myRequest = new XMLHttpRequest();

	// initialise a request using open() method
	myRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-' + urlNum + '.json');

	// use onload() method to specify what to do with the retrieved data
	// change successfully retrieved JSON data to an object and log it to the console
	myRequest.onload = function() {
		var retrievedData = JSON.parse(myRequest.responseText);
		renderHTML(retrievedData);
	};

	// send the request 
	myRequest.send();

	// increase urlNum by 1
	urlNum++;

	if (urlNum > 3) {
		var btn = document.getElementById('btn');
		btn.classList.add('hide-me');
	}
};

function renderHTML(data) {
	var htmlData = '';

	for (var i = 0; i < data.length; i++) {
		htmlData += "<p>" + data[i].name + " is a " + data[i].species + ".</p>";
	}

	animalInfo.insertAdjacentHTML('beforeend', htmlData);
}


