// Meet the Immediately-Invoked Function Expression (IIFE):
// - less risks of global scope pollution
// - useful in minification for 'use strict'
//
(function () {

	// Strict mode:
	// - prevent assignment to undeclared variables
	// - prevent property duplicate declarations
	// - block use of eval()
	// - prevent use of duplicate argument names in function calls
	// - block use of with()
	// - etc...
	//
	'use strict';

	angular.module('app', []);
}());
