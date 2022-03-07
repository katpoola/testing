import React from 'react';
import {render, screen} from '@testing-library/react';
import {SalaryCalculatorService} from './SalaryCalculatorService';

test('renders learn react link', () => {
  const {calculate} = SalaryCalculatorService();

  expect(calculate(1000)).toBe(764);
  expect(calculate(100)).toBe(76);
  expect(calculate(2500)).toBe(1910);
  expect(calculate(10)).toBe(8);
  expect(calculate(1)).toBe(1);
  expect(calculate(600)).toBe(458);
  expect(calculate(840)).toBe(642);
  expect(calculate(0)).toBe(0);
});
