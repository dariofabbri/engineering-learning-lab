var fs = require('fs');

var parser = {

	parse: function (filename) {

		return new Promise(function (resolve, reject) {

			fs.readFile(filename, function (err, data) {

				if (err) {
				
					reject(err);

				} else {

					var text = data.toString();

					var lines = text.split('\n');

					var result = [];
					lines.forEach(function (line) {
						var parts = line.split(',');

						result.push({
							name: parts[0],
							surname: parts[1],
							city: parts[2]
						});
					});

					resolve(result);
				}
			});
		
		});
	}
};

module.exports = parser;
