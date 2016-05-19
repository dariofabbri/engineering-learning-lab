(function () {
	'use strict';

	angular.module('app')
		.filter('scramble', function () {
		
			function randomInt(max) {
				return Math.floor(Math.random() * max);
			}

			function swapAtIndices(word, first, second) {
					
					if(first === second) {
						return word;
					}

					if(first > second) {
						var tmp = first;
						first = second;
						second = tmp;
					} 

					return word.substr(0, first) + 
						word.charAt(second) + 
						word.substr(first + 1, second - first - 1) + 
						word.charAt(first) +
						word.substr(second + 1, word.length - second - 1);
			}

			return function (input, howmany) {
				
				if (!howmany) {
					howmany = randomInt(10);
				}

				var result = input;

				for (var i = 0; i < howmany; i += 1) {
					
					var first = randomInt(input.length);
					var second = randomInt(input.length);

					return swapAtIndices(result, first, second);
				}

				return result;
			}

		}); 
}());
