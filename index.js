'use strict';
var fs = require('fs');

var args = process.argv.slice(2),
    dir = args.length >= 1 ? args[0] : "",
    fullPath = process.cwd()+'/'+dir+'/moduleName.js';

fs.readFile(__dirname+'/template.js', 'utf8', function(err, data) {
    if (err) return console.log(err);
    generate(data);
});

function generate(template) {
    fs.writeFile(fullPath, template, function (err) {
      if (err) return console.log(err);
      console.log(fullPath+' was generated.');
    });
}
