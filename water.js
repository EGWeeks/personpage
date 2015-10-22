//Calculor for water cost Fort Collins Rates
//input takes gallons
//need input for house style 
//mutliple fixed rates based on usage and units

var water = {

	basecharge: [
		["singleFam", "16.33"],
		["duplex", "17.29"],
		["multiFam", "12.42", "4.13"]
	],

	singleFamRate: [
		"2.53",
		"2.91",
		"3.34"
	],

	duplexRate: [
		"2.20",
		"2.52",
		"2.90"
	],

	multiFamRate: [
		"2.26"
	]

	residentStyle: function(style) {
		if (style === "single") {
			return singleFamRate;
		} else 
			if (style === "duplex") {
				return duplexRate;
		} else {
			return multiFam;
		}
	},

	waterCal: function(galUsed) {

		var tier2, tier3, billCost;

		if (residentStyle === singleFamRate) {
		
		} else
			if (residentStyle === duplex) {

		} else {

		}

	},


};


//function for costbased on time of year
