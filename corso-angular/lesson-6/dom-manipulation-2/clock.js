(function () {
	'use strict';

	angular.module('app')
		.directive('clock', ['$interval', function ($interval) {

			function link (scope, element, attrs) {

				var timeoutId;

				element.attr('width', scope.width || 500);
				element.attr('height', scope.height || 500);

				function drawClock() {

					var canvas = element[0];
					var ctx = canvas.getContext('2d');
					var rad = canvas.height / 2;
					ctx.translate(rad, rad);
					var radius = rad * .9;

					ctx.rect(-rad, -rad, rad * 2, rad * 2);
			    ctx.fillStyle = 'white';
		  	  ctx.fill();

					drawFace(ctx, radius);
					drawTicks(ctx, radius);
					drawNumbers(ctx, radius);
					drawHands(ctx, radius);

					ctx.translate(-rad, -rad);
				}

				function drawFace(ctx, radius) {

					// Outer dial
					//
					ctx.beginPath();
			    ctx.arc(0, 0, radius, 0, 2*Math.PI);
		  	  ctx.strokeStyle = '#333';
					ctx.lineWidth = radius * .1;
					ctx.stroke();

					// Center
					//
					ctx.beginPath();
			    ctx.arc(0, 0, radius * .1, 0, 2 * Math.PI);
			    ctx.fillStyle = '#333';
			    ctx.fill();
				}

				function drawTicks(ctx, radius) {

					var ang, num;

					ctx.lineWidth = radius * .01;
					ctx.lineCap = 'round';

					for(num = 1; num <= 60; num += 1) {

						ang = num * Math.PI / 30;
							
						ctx.beginPath();
						ctx.rotate(ang);
						ctx.moveTo(0, -radius * .92);
						ctx.lineTo(0, -radius * .94);
						ctx.stroke();
						ctx.rotate(-ang);
					}
				}

				function drawNumbers(ctx, radius) {
					
					var ang, num;

					ctx.font = radius * 0.12 + 'px arial';
					ctx.textBaseline = 'middle';
					ctx.textAlign = 'center';


					for(num = 1; num <= 12; num += 1) {
						ang = num * Math.PI / 6;
						ctx.rotate(ang);
						ctx.translate(0, -radius * 0.85);
						ctx.fillText(num.toString(), 0, 0);
						ctx.translate(0, radius * 0.85);
						ctx.rotate(-ang);
					}
				}

				function drawHands (ctx, radius) {
					
					var now = new Date();
					var hour = now.getHours();
					var minute = now.getMinutes();
					var second = now.getSeconds();

					// Hour
					//
					hour = hour % 12;
					hour = (hour * Math.PI / 6) + (minute * Math.PI / (6 * 60)) + (second * Math.PI/(360 * 60));
					drawHand(ctx, hour, radius * 0.5, radius * 0.07);

					// Minute
					//
					minute = (minute * Math.PI / 30) + (second * Math.PI / (30 * 60));
					drawHand(ctx, minute, radius * 0.8, radius * 0.07);

					// Second
					//
					second = (second * Math.PI / 30);
					drawHand(ctx, second, radius * 0.9, radius * 0.02);
				}

				function drawHand (ctx, pos, length, width) {

					ctx.beginPath();
					ctx.lineWidth = width;
					ctx.lineCap = 'round';
					ctx.moveTo(0,0);
					ctx.rotate(pos);
					ctx.lineTo(0, -length);
					ctx.stroke();
					ctx.rotate(-pos);
				}

				element.on('$destroy', function() {
					$interval.cancel(timeoutId);
				});

				timeoutId = $interval(function() {
					drawClock();
				}, 1000);
			}

			return {
				link: link,
				replace: true,
				restrict: 'E',
				scope: {
					width: '=',
					height: '='
				},
				template: '<canvas></canvas>'
		  };

		}]);
}());
