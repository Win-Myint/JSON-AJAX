log = console.log;

// make an instance of browser built in XMLHttpRequest object
var myRequest = new XMLHttpRequest();

// initialise a request using open() method
myRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-1.json');

// use onload() method to check the request 
// change successfully retrieved JSON data to an object and log it to the console
myRequest.onload = function() {
	var data = JSON.parse(myRequest.responseText);
	log(data[0]);
}

// send the request 
myRequest.send();
