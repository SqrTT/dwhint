"use strict";
//demandware variables defined in other file, it will not be added because this is private data
var vars = require("./demandwarevars.js").vars;
exports.vars = vars;

function countLines(s, last) {
	var str = s.substring(0, last);
	return str.split(/\r\n|\r|\n/).length;
}

exports.predefineImports = function(s, combine, predefined, warningAt) {
	var reg = /(require|importPackage)\(\s*\"?(dw\.[\w\.]+?)\"?\s*\)/ig;
	var m = '';
	while (m = reg.exec(s)) {
		if (m && m[1] === "importPackage") {
			var pack = m[2].replace('.', '/'),
				varr = m[2].replace('.', '');
			
			warningAt("W708", countLines(m.input, m.index), 0, m[1], "var "+ varr +" = require('"
					+ pack + "');");
		}
		if (m && m[2] && vars[m[2]]) {
			combine(predefined, vars[m[2]]);
		}
	}
	reg = /(importScript)\(\s*\"([\w\:\/\.]+?)\"\s*\)/ig;
	while (m = reg.exec(s)) {
		warningAt("W708", countLines(m.input, m.index), 0, m[1],
				"var lib = require(\"" + m[2] + "\")");
	}
	reg = /(require|importClass)\(\s*\"?([\w\.]+?)\"?\s*\)/ig;
	while (m = reg.exec(s)) {
		var nm;
		if (m && m[1] === "importClass") {
			var pack = m[2].replace(/\.(\w+)$/, '').replace('.', '/');
			if (m && m[2]) {
				nm = m[2].match(/\.(\w+)$/);
				var obj = {};
				if (nm && nm[1]) {
					obj['' + nm[1]] = false;
					combine(predefined, obj);
				}
			}
			warningAt("W708", countLines(m.input, m.index), 0, m[1], "var " + nm[1] + " = require('"
					+ pack + "')." + nm[1] + ';');
		}
	}
};

exports.defineOptions = function(options) {
	var reg = /(lib\w+?|Utils)\..{1,4}$/igm;
	if (reg.test(options.name_file)) {
		options.dwlib = true;
	};
	options.esnext = true;
	options.moz = true;
	options.browser = false;
	options.jquery = false;
};
