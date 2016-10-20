var methods = {};

var output = 1337;

methods.sumNumbers = function(a, b){
	return a + b;
}

methods.circleCircunference = function(radius){
	output = 2 * Math.PI * radius;
	return output;
}

methods.areaOfRectangle = function(a, b){
	output = a*b;
	return output;
}

exports.data = methods;
exports.output = output;

// methods.updateService = function(){
// 	console.log('Important function');
// };

// methods.eatCookies = function(){
// 	console.log("Chocolate cookies");
// };

// methods.node = function(){
// 	console.log("NodeJS, is AWESOME");

// };