// The module pollutes the global namespace by defining
// a function, that will be available in the requiring module.
//
sayHello = function (who) {
	console.log('Hello, ' + who + '!');
}
