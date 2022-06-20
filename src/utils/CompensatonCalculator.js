/**
 * Returns number of working days in current month.
 *
 * @return {number} of working days in current month.
 */
const getCurrentMonthWorkingDays = () => {
	const date = new Date();
	const startDate = new Date(date.getFullYear(), date.getMonth(), 1);
	const endDate = new Date(date.getFullYear(), date.getMonth() + 1, 0);
	//
	let result = 0;
	const currentDate = startDate;
	while (currentDate <= endDate) {
		var weekDay = currentDate.getDay();
		if (weekDay !== 0 && weekDay !== 6) result++;

		currentDate.setDate(currentDate.getDate() + 1);
	}
	return result;
};

const calculateCompensatedDays = (sickDays, isTubercolosis) => {
	if (isTubercolosis) {
		if (sickDays - 3 > 240) return 240;
	} else {
		if (sickDays - 3 > 180) return 180;
	}
	return sickDays - 3;
};

const compensatonCalculator = (
	monthlyIncome = 0,
	sickDays = 0,
	isTubercolosis = false
) => {
	const averageDailYIncome = monthlyIncome / getCurrentMonthWorkingDays();
	const dailyCompenation = averageDailYIncome * 0.7;
	const compensatedDays = calculateCompensatedDays(sickDays, isTubercolosis);
	console.log(compensatedDays, 'cp');

	if (sickDays < 4) {
		console.log('You need tohave more then 4 days to be compensated');
		return;
	}
	if (sickDays >= 4 && sickDays <= 8) {
		const compensation = dailyCompenation * compensatedDays;
		console.log(`your compensation is ${compensation.toFixed(2)}`);
		console.log(`you are compensated for ${compensatedDays} days`);
		return { compensation, compensatedDays };
	}
	if (sickDays > 8) {
		const compensation = dailyCompenation * compensatedDays;
		console.log(`your compensation is ${compensation.toFixed(2)}`);
		console.log(`you are compensated for ${compensatedDays} days`);
		return { compensation, compensatedDays };
	}
};

// compensatonCalculator(1500, 183, false);

export default compensatonCalculator;
