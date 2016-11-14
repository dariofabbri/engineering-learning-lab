// Export an anonymous object prototype.
//
var Hello = function () {
}

Hello.prototype.sayHello = function (who) {
	console.log('Hello, ' + who + '!');
}

module.exports = Hello;
