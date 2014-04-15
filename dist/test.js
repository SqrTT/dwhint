var a=1234;
console.log("init");
JSHINT(
		"var test : = [],\n" +
		"sd : kaka;",
		{ext_file: "ds", white: true},
		"");
console.log(JSHINT.errors);

