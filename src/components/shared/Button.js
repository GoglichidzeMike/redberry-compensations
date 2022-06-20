import PropTypes from 'prop-types'; // ES6

const Button = (props) => {
	const { label } = props;
	return (
		<button className='px-10 py-5 font-bold text-white red-gradient rounded-4xl calculate-btn'>
			<span className=''>{label}</span>
		</button>
	);
};

Button.propTypes = {
	label: PropTypes.string,
};

export default Button;
