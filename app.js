// initialise url page number
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

		// invoke renderHTML function and pass down data recived from AJAX request
		renderHTML(retrievedData);
	};

	// send the request 
	myRequest.send();

	// increase urlNum by 1
	urlNum++;

	// set button when it is clicked more than 3 times
	if (urlNum > 3) {
		var btn = document.getElementById('btn');
		btn.classList.add('hide-me');
	}
};

// renderHTML function is used to loop through the 'retrievedData' passed down from myRequest.onload function
// data is then populated to 'animal-info' div by using 'insertAdjacentHTML()' method
function renderHTML(data) {
	var htmlData = '';

	for (var i = 0; i < data.length; i++) {
		htmlData += "<p>" + data[i].name + " is a " + data[i].species + " that likes ";

		for (var ii = 0; ii < data[i].foods.likes.length; ii++) {

			if(ii === 0) {
				htmlData += data[i].foods.likes[ii];
			} else {
				htmlData += ' and ' + data[i].foods.likes[ii];
			}
		}

		htmlData += '.</p>';
	}

	animalInfo.insertAdjacentHTML('beforeend', htmlData);
}