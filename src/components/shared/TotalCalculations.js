import PropTypes from 'prop-types'; // ES6

const TotalCalculations = (props) => {
	const { totalDays, totalCompensation } = props;

	return (
		<div className='compensation text-center'>
			<p className='text-sm'>Compensation total for {totalDays} days (net)</p>
			<p className='text-2xl font-bold'>{totalCompensation}</p>
		</div>
	);
};

TotalCalculations.propTypes = {
	totalDays: PropTypes.number,
	totalCompensation: PropTypes.number,
};

export default TotalCalculations;
