import Calculations from '../components/shared/Calculations';
import { render, queryByAttribute } from '@testing-library/react';

test('should render calculations with correct values, being an employer', () => {
	const view = render(
		<Calculations isEmployer totalDays={100} totalCompensation={4949.4949424} />
	);
	const getById = queryByAttribute.bind(null, 'id');

	const totalDayselement = getById(view.container, 'calculations-totaldays');
	const totalCompensationElement = getById(
		view.container,
		'calculations-totalCompensation'
	);
	const titleElement = getById(view.container, 'calculations-title');
	const dailyElement = getById(view.container, 'calculations-daily');

	expect(totalDayselement).toBeInTheDocument();
	expect(totalDayselement).toHaveTextContent('100 days');

	expect(totalCompensationElement).toBeInTheDocument();
	expect(totalCompensationElement).toHaveTextContent('4949.49 €');

	expect(titleElement).toBeInTheDocument();
	expect(titleElement).toHaveTextContent('The employer compensates');

	expect(dailyElement).toBeInTheDocument();
	expect(dailyElement).toHaveTextContent('49.49€');
});

test('should render calculations with correct values, being an insurance company', () => {
	const view = render(
		<Calculations totalDays={240} totalCompensation={3000} />
	);
	const getById = queryByAttribute.bind(null, 'id');

	const totalDayselement = getById(view.container, 'calculations-totaldays');
	const totalCompensationElement = getById(
		view.container,
		'calculations-totalCompensation'
	);
	const titleElement = getById(view.container, 'calculations-title');
	const dailyElement = getById(view.container, 'calculations-daily');

	expect(totalDayselement).toBeInTheDocument();
	expect(totalDayselement).toHaveTextContent('240 days');

	expect(totalCompensationElement).toBeInTheDocument();
	expect(totalCompensationElement).toHaveTextContent('3000.00 €');

	expect(titleElement).toBeInTheDocument();
	expect(titleElement).toHaveTextContent('Health Insurance compensates');

	expect(dailyElement).toBeInTheDocument();
	expect(dailyElement).toHaveTextContent('12.50€');
});
