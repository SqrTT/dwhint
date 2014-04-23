var a=1234;
console.log("init");
JSHINT(
		"require(dw.customer);\n" + "function checkPOBoxAvailability(fieldName : str) : Boolean {}\n",
		{ext_file: "ds", name_file: "/sdff/lib/libProduct.ds",
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
			"unused": "strict",
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

