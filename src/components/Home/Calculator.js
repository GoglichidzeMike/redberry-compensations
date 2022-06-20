import { useState } from 'react';

import InputField from '../shared/InputField';
import Button from '../shared/Button';
import CheckboxInput from '../shared/CheckboxInput';
import Calculations from '../shared/Calculations';
import TotalCalculations from '../shared/TotalCalculations';
import compensatonCalculator from '../../utils/CompensatonCalculator';

const Calculator = () => {
	const [averageIncome, setAverageIncome] = useState(0);
	const [sickLeaveDays, setSickLeaveDays] = useState(0);
	const [isTuberColosis, setIsTuberColosis] = useState(false);
	//
	const [compensatedDays, setCompensatedDays] = useState(0);
	const [totalCompensation, setTotalCompensation] = useState(0);

	const handleCalculations = (e) => {
		console.log(isTuberColosis);
		const result = compensatonCalculator(
			averageIncome,
			sickLeaveDays,
			isTuberColosis
		);

		setTotalCompensation(result.compensation);
		setCompensatedDays(result.compensatedDays);
	};
	return (
		<div className='max-w-xs py-20 bg-white main-section-right calculator text-metal-dark my-10 lg:my-0'>
			<div className='px-5'>
				<h3 className='mb-5 text-2xl font-bold leading-6'>
					Compensation Calculator
				</h3>
				<InputField
					name='income'
					type='€'
					label='Average Income'
					handleInputChange={(e) => setAverageIncome(e)}
				/>
				<InputField
					name='days'
					type='days'
					label='Days on sick-leave'
					handleInputChange={(e) => setSickLeaveDays(e)}
				/>
				<CheckboxInput
					name='tuber'
					label='I have tubercolosis'
					handleInputChange={(e) => setIsTuberColosis(e)}
					value={isTuberColosis}
				/>
				<Button label='Calculate' handleCalculations={handleCalculations} />
			</div>
			<div className='flex p-5 my-5 info border-y border-y-metal-light leading-3-5'>
				<Calculations
					isEmployer
					totalDays={compensatedDays}
					totalCompensation={totalCompensation}
				/>
				<Calculations
					totalDays={compensatedDays}
					totalCompensation={totalCompensation}
				/>
			</div>
			<TotalCalculations
				totalDays={compensatedDays}
				totalCompensation={totalCompensation}
			/>
		</div>
	);
};

export default Calculator;
