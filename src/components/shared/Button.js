import PropTypes from 'prop-types'; // ES6

const Button = (props) => {
	const { label, handleCalculations } = props;
	return (
		<button
			className='px-10 py-5 font-bold text-white red-gradient rounded-4xl calculate-btn'
			onClick={handleCalculations}
		>
			<span className='leading-5'>{label}</span>
		</button>
	);
};

Button.propTypes = {
	label: PropTypes.string,
	handleCalculations: PropTypes.func,
};

export default Button;
