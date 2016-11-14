// Export an anonymous object.
//
function Hello () {
}

Hello.prototype.sayHello = function (who) {
	console.log('Hello, ' + who + '!');
}

module.exports = new Hello();
