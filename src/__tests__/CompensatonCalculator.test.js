import compensatonCalculator from '../utils/CompensatonCalculator';

describe('check types with correct input', () => {
	it('should return all numbers', () => {
		expect(compensatonCalculator(500, 15, false)).toEqual(
			expect.objectContaining({
				companyCompensatedDays: expect.any(Number),
				companyCompensation: expect.any(Number),
				compensatedDays: expect.any(Number),
				compensation: expect.any(Number),
				insuranceCompensatedDays: expect.any(Number),
				insuranceCompensation: expect.any(Number),
			})
		);
	});
});

test('7 days, 15000 average, no tuber', () => {
	expect(compensatonCalculator(1500, 7, false)).toMatchObject({
		companyCompensatedDays: 4,
		companyCompensation: 190.9090909090909,
		compensatedDays: 4,
		compensation: 190.9090909090909,
		insuranceCompensatedDays: 0,
		insuranceCompensation: 0,
	});
});

test('2 days, 15000 average, no tuber', () => {
	expect(compensatonCalculator(1500, 2, false)).toMatchObject({
		errorMessage: 'You need to have more then 3 sick-days to be compensated',
	});
});

test('28 days, 15000 average, tuber is string', () => {
	expect(compensatonCalculator(1500, 6, 'false')).toMatchObject({
		errorMessage: 'isTubercolosis has to be a boolean',
	});
});

test('sickdays is not a number', () => {
	expect(compensatonCalculator(1500, '6', false)).toMatchObject({
		errorMessage: 'Both sick days and monthly income have to be numbers',
	});
});

test('average income is not a number', () => {
	expect(compensatonCalculator('1500', 6, false)).toMatchObject({
		errorMessage: 'Both sick days and monthly income have to be numbers',
	});
});

test('7 days, 0 average, no tuber', () => {
	expect(compensatonCalculator(0, 7, false)).toMatchObject({
		companyCompensatedDays: 4,
		companyCompensation: 0,
		compensatedDays: 4,
		compensation: 0,
		insuranceCompensatedDays: 0,
		insuranceCompensation: 0,
	});
});

test('190 days, 400 average, no tuber', () => {
	expect(compensatonCalculator(400, 190, false)).toMatchObject({
		companyCompensatedDays: 5,
		companyCompensation: 63.63636363636364,
		compensatedDays: 180,
		compensation: 2290.909090909091,
		insuranceCompensatedDays: 175,
		insuranceCompensation: 2227.2727272727275,
	});
});

test('190 days, 400 average, tuber', () => {
	expect(compensatonCalculator(400, 190, true)).toMatchObject({
		companyCompensatedDays: 5,
		companyCompensation: 63.63636363636364,
		compensatedDays: 187,
		compensation: 2380,
		insuranceCompensatedDays: 182,
		insuranceCompensation: 2316.3636363636365,
	});
});

test('250 days, 400 average, no tuber', () => {
	expect(compensatonCalculator(400, 250, false)).toMatchObject({
		companyCompensatedDays: 5,
		companyCompensation: 63.63636363636364,
		compensatedDays: 180,
		compensation: 2290.909090909091,
		insuranceCompensatedDays: 175,
		insuranceCompensation: 2227.2727272727275,
	});
});

test('250 days, 400 average, tuber', () => {
	expect(compensatonCalculator(400, 250, true)).toMatchObject({
		companyCompensatedDays: 5,
		companyCompensation: 63.63636363636364,
		compensatedDays: 240,
		compensation: 3054.545454545455,
		insuranceCompensatedDays: 235,
		insuranceCompensation: 2990.909090909091,
	});
});
