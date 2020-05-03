const loadJsonFile = require('load-json-file');
(async () => {
	console.log(await loadJsonFile('jsonFile.json'));
	//=> {foo: true}
})();