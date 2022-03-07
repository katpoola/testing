import React from 'react';
import {render, screen} from '@testing-library/react';
import {PaidVacationDaysService} from './PaidVacationDaysService';

test('renders learn react link', () => {
  const {calculate} = PaidVacationDaysService();

  expect(calculate(14, 0)).toBe(27);
  expect(calculate(46, 16)).toBe(24);
  expect(calculate(58, 27)).toBe(24);
  expect(calculate(18, 0)).toBe(22);
  expect(calculate(60, 30)).toBe(30);
  expect(calculate(45, 30)).toBe(29);
  expect(calculate(60, 2)).toBe(27);
  expect(calculate(18, 20)).toBe(24);
  expect(calculate(45, 15)).toBe(24);
  expect(calculate(60, 100)).toBe(30);
  expect(calculate(17, 1)).toBe(27);
  expect(calculate(70, 50)).toBe(30);
});
