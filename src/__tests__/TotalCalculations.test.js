import TotalCalculations from '../components/shared/TotalCalculations';
import { render, queryByAttribute } from '@testing-library/react';

test('Should render totalCalculations with correct values', () => {
	const view = render(
		<TotalCalculations totalDays={100} totalCompensation={4949.4949424} />
	);

	const getById = queryByAttribute.bind(null, 'id');

	const totalDayselement = getById(view.container, 'compensation-total-days');
	const totalCompensationElement = getById(
		view.container,
		'compensation-total'
	);

	expect(totalDayselement).toBeInTheDocument();
	expect(totalDayselement).toHaveTextContent(
		'Compensation total for 100 days (net)'
	);

	expect(totalCompensationElement).toBeInTheDocument();
	expect(totalCompensationElement).toHaveTextContent('4949.49€');
});
