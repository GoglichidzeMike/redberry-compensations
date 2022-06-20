import InputField from '../shared/InputField';
import Button from '../shared/Button';
import CheckboxInput from '../shared/CheckboxInput';
import Calculations from '../shared/Calculations';
import TotalCalculations from '../shared/TotalCalculations';

const Calculator = () => {
	return (
		<div className='max-w-xs py-20 bg-white main-section-right calculator text-metal-dark my-10 lg:my-0'>
			<div className='px-5'>
				<h3 className='mb-5 text-2xl font-bold leading-6'>
					Compensation Calculator
				</h3>
				<InputField name='income' type='€' label='Average Income' />
				<InputField name='days' type='days' label='Days on sick-leave' />
				<CheckboxInput name='tuber' label='I have tubercolosis' />
				<Button label='Calculate' />
			</div>
			<div className='flex p-5 my-5 info border-y border-y-metal-light leading-3-5'>
				<Calculations isEmployer totalDays='100' totalCompensation='8700' />
				<Calculations totalDays='100' totalCompensation='8700' />
			</div>
			<TotalCalculations totalDays='100' totalCompensation='0' />
		</div>
	);
};

export default Calculator;
