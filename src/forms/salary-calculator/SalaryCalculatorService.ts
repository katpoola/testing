import {injectableHook} from '../../core/inject';

type SalaryCalculatorServiceData = {
  calculate: (salary: number) => number;
};

export const SalaryCalculatorService = (): SalaryCalculatorServiceData => {
  const calculate = (salary: number): number => {  
    if (isNaN(salary)) return 0;
	
    return Math.round(salary - (salary * 0.20) - (salary * 0.016) - (salary * 0.02));
  };
  
  return {calculate};
};

export const useSalaryCalculatorService = injectableHook(SalaryCalculatorService);