import PropTypes from 'prop-types'; // ES6


const symbolsArr = ["e", "E", "+", "-", "."];

const InputField = (props) => {
	const { label, name, type, handleInputChange } = props;

	return (
		<div className='mb-5'>
			<label htmlFor={name} className='text-sm font-medium'>
				{label}
			</label>
			<div className='flex w-full border-2 rounded shadow border-metal-light'>
				<input
					type='number'
					onInput={(e) => (e.target.value = e.target.value.slice(0, 7))}
					name={name}
					className='focus:outline-none w-full font-medium text-lg px-2-5'
					placeholder='0'
					onKeyDown={(e) => symbolsArr.includes(e.key) && e.preventDefault()}
					onChange={(e) => {
						handleInputChange(parseFloat(e.target.value));
					}}
				/>
				<div className='m-2-5 font-bold text-lg'>{type}</div>
			</div>
		</div>
	);
};

InputField.propTypes = {
	label: PropTypes.string,
	name: PropTypes.string,
	type: PropTypes.string,
	handleInputChange: PropTypes.func,
};

export default InputField;
