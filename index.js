'use strict';
var fs = require('fs');

var args = process.argv.slice(2);
var dir = (function() {
        if (args.length < 1) return "";
        if (args[0].indexOf('--') < 0) return args[0];
        return "";
    }());
var fullPath = process.cwd()+'/'+dir+'/moduleName.js';

function getTemplate() {
    var tmpl = 'tmpl_module.js';
    args.forEach(function(argument) {
        if (argument === '--simple' || argument === '--s' || argument === '--class') {
            tmpl = 'tmpl_class.js';
            return false;
        }
    });
    return tmpl;
}

fs.readFile(__dirname+'/'+getTemplate(), 'utf8', function(err, data) {
    if (err) return console.log(err);
    generate(data);
});

function generate(template) {
    fs.writeFile(fullPath, template, function (err) {
      if (err) return console.log(err);
      console.log(fullPath+' was generated.');
    });
}
