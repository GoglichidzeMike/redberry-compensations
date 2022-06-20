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
	const [companyCompensation, setCompanyCompensation] = useState(0);
	const [companyCompensatedDays, setCompanyCompensatedDays] = useState(0);
	const [insuranceCompensation, setInsuranceCompensation] = useState(0);
	const [insuranceCompensatedDays, setInsuranceCompensatedDays] = useState(0);

	const handleCalculations = (e) => {
		// get calculations form utility function
		const result = compensatonCalculator(
			averageIncome,
			sickLeaveDays,
			isTuberColosis
		);
		console.log(result);

		// handle input errors here;
		if (result.errorMessage) {
			return window.alert(result.errorMessage);
		}

		setTotalCompensation(result.compensation);
		setCompensatedDays(result.compensatedDays);
		setCompanyCompensation(result.companyCompensation);
		setCompanyCompensatedDays(result.companyCompensatedDays);
		setInsuranceCompensatedDays(result.insuranceCompensatedDays);
		setInsuranceCompensation(result.insuranceCompensation);
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
					totalDays={companyCompensatedDays}
					totalCompensation={companyCompensation}
				/>
				<Calculations
					totalDays={insuranceCompensatedDays}
					totalCompensation={insuranceCompensation}
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
