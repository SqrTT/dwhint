var a=1234;
console.log("init");
JSHINT(
		"var productLineItem = 12;",
		{ext_file: "ds", 
			"nonbsp": true,
			"freeze":true,
			"bitwise": true,
			"camelcase": true,
			"curly": true,
			"eqeqeq": true,
			"forin": true,
			"indent": 4,
			"latedef": true,
			"newcap": true,
			"noarg": true,
			"noempty": true,
			"nonew": true,
			"undef": true,
			"unused": true,
			"trailing": true,
			"maxlen": 120,
			"maxcomplexity": 15,
			"browser": true,
			"jquery": true,
			"onevar": true,
			"white": true,
			"quotmark": "double",
			"maxerr": 60},
		"");
console.log(JSHINT.errors);

