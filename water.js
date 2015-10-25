//Calculor for water cost Fort Collins Rates
//input takes gallons
//need input for house style 
//mutliple fixed rates based on usage and units

var water = {

	baseCharge: [
		["singleFam", 16.33],
		["duplex", 17.29],
		["multiFam", 12.42, 4.13]
	],

	singleFamRate: [
		2.53,
		2.91,
		3.34
	],

	duplexRate: [
		2.20,
		2.52,
		2.90
	],

	multiFamRate: [
		2.26
	],

	residence: function(style) {

		if (style === "single") {
			return this.singleFamRate;
		} else 
			if (style === "duplex") {
				return this.duplexRate;
		} else {
			return this.multiFamRate;
		}
	},

	waterCal: function(galUsed, residence) {

		var tier2, tier3, billCost;

		if (residence === this.singleFamRate) {
			if (galUsed <= 7000) {
				billcost = galUsed * (this.singleFamRate[0] / 1000);
			} else
				if ((galUsed > 7000) && (galUsed >= 13000)) {

			} else {

			}
		} else
			if (residence === this.duplexRate) {

		} else {

		}
		return billCost

	},

};

console.log(water.waterCal(1543, water.residence("single")));


//function for costbased on time of year
