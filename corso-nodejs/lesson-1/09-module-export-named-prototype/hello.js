// Export a named object prototype.
//
var Hello = function () {
}

Hello.prototype.sayHello = function (who) {
	console.log('Hello, ' + who + '!');
}

exports.Hello = Hello;
