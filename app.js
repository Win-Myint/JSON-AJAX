log = console.log;

// target animal-info div for easy use
var animalInfo = document.getElementById('animal-info');

function onBtnClick() {
	// make an instance of browser built in XMLHttpRequest object
	var myRequest = new XMLHttpRequest();

	// initialise a request using open() method
	myRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-1.json');

	// use onload() method to specify what to do with the retrieved data
	// change successfully retrieved JSON data to an object and log it to the console
	myRequest.onload = function() {
		var retrievedData = JSON.parse(myRequest.responseText);
		renderHTML(retrievedData);
	};

	// send the request 
	myRequest.send();
};

function renderHTML(data) {
	// log(data);
	animalInfo.insertAdjacentHTML('afterbegin', 'Testing Testing');
}


