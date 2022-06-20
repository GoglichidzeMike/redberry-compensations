/**
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

/**
 * @return {number} of sick days based on tubercolosis.
 */

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
	const companyCompensatedDays = compensatedDays > 5 ? 5 : compensatedDays;
	const insuranceCompensatedDays = compensatedDays - companyCompensatedDays;
	console.log({ companyCompensatedDays, insuranceCompensatedDays });

	if (sickDays < 4) {
		return {
			errorMessage: 'You need to have more then 3 sick-days to be compensated',
		};
	}
	if (sickDays >= 4) {
		const compensation = dailyCompenation * compensatedDays;
		const companyCompensation = dailyCompenation * companyCompensatedDays;
		const insuranceCompensation = dailyCompenation * insuranceCompensatedDays;
		return {
			compensation,
			compensatedDays,
			companyCompensation,
			insuranceCompensation,
			insuranceCompensatedDays,
			companyCompensatedDays,
		};
	}
};

// compensatonCalculator(1500, 183, false);

export default compensatonCalculator;
