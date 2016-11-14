// Export a named object.
//
function Hello () {
}

Hello.prototype.sayHello = function (who) {
	console.log('Hello, ' + who + '!');
}

exports.hello = new Hello();
