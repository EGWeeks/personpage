function userInput() {
	var userValue = document.getElementById('kwh').value
	electric(userValue);
};

function electric(kwhUsed){
	// fixed charge per month
	var fixedChargePerMonth = 5.37;
	// current month getMonth is from 0 - 11

	var timeOfYearCosts = costForTimeOfYear();
	var billCost = kwhCal(kwhUsed, timeOfYearCosts)

	billCost += fixedChargePerMonth;
	
	var roundedCost = Math.round(billCost*100)/100;

	var getter = document.getElementsByClassName("kilo");
	
	var lastChild = (getter).lastElementChild;
	console.log(lastChild);

	document.write("$"+ roundedCost);

};

function timeOfYear() {
	var currentDate = new Date()
	return currentDate.getMonth();
};

function costForTimeOfYear(){

	var returnObject = {};

	if ((timeOfYear() === 5) || (timeOfYear() === 6) || (timeOfYear() === 7)) {
		returnObject.firstFiveCost = 0.0894;
		returnObject.secondFiveCost = 0.10674;
		returnObject.additionalKWH = 0.14151;
	} else {
		returnObject.firstFiveCost = 0.08300;
		returnObject.secondFiveCost = 0.08724;
		returnObject.additionalKWH = 0.09657;
	}

	return returnObject;
};

function kwhCal(kwhUsed, timeOfYearCosts) {

		var overOne, billCost, overFive;
		if (kwhUsed > 1000) {
			overOne = kwhUsed - 1000;
			billCost = (500 * timeOfYearCosts.firstFiveCost) + (500 * timeOfYearCosts.secondFiveCost);
			billCost += overOne * timeOfYearCosts.additionalKWH;
		} else if ((kwhUsed > 500) && (kwhUsed <= 1000)){
			overFive = kwhUsed - 500;
			billCost = 500 * timeOfYearCosts.firstFiveCost;
			billCost += overFive * timeOfYearCosts.secondFiveCost;
		} else {
			billCost = kwhUsed * timeOfYearCosts.firstFiveCost;
		}
		return billCost;
	};
