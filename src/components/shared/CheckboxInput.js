import PropTypes from 'prop-types'; // ES6

const CheckboxInput = (props) => {
	const { label, name, handleInputChange, value } = props;
	return (
		<div className='flex items-center checkbox-input mb-5'>
			<input
				type='checkbox'
				name={name}
				id={name}
				value='true'
				onChange={(e) => {
					handleInputChange(!value);
				}}
			/>
			<label htmlFor={name} className='mb-px ml-2 text-sm'>
				{label}
			</label>
		</div>
	);
};

CheckboxInput.propTypes = {
	label: PropTypes.string,
	handleInputChange: PropTypes.func,
};

export default CheckboxInput;
