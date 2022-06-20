import PropTypes from 'prop-types'; // ES6

const Calculations = (props) => {
	const { isEmployer, totalDays = 0, totalCompensation } = props;

	const handleCompensator = () => {
		if (isEmployer) return 'The employer compensates';
		else return 'Health Insurance compensates';
	};

	return (
		<div className='employer text-center'>
			<p className='text-sm' id='calculations-title'>
				{handleCompensator()}
			</p>
			<p className='font-bold text-sm' id='calculations-totaldays'>
				{totalDays} days
			</p>
			<p
				className='mt-2-5 font-bold text-lg leading-5'
				id='calculations-totalCompensation'
			>
				{totalCompensation
					? (Math.round(100 * totalCompensation) / 100).toFixed(2)
					: 0}{' '}
				&euro;
			</p>
			<p className='text-metal-middle text-xs'>Daily allowance</p>
			<p className='text-metal-middle text-xs' id='calculations-daily'>
				{totalDays
					? (Math.round(100 * (totalCompensation / totalDays)) / 100).toFixed(2)
					: 0}
				&euro;
			</p>
		</div>
	);
};

Calculations.propTypes = {
	isEmployer: PropTypes.bool,
	totalDays: PropTypes.number,
	totalCompensation: PropTypes.number,
};

export default Calculations;
