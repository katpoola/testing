import React from 'react';
import {render, screen} from '@testing-library/react';
import {CourseGradeService} from './CourseGradeService';

test('renders learn react link', () => {
  const {calculate} = CourseGradeService();

  // Add some tests (at least 2-3 tests per grade)
  expect(calculate(20, 30, 40)).toBe('failed');
  expect(calculate(30, 0, 50)).toBe('failed');
  expect(calculate(50, 24, 50)).toBe('failed');
  expect(calculate(40, 30, 25)).toBe('satisfactory');
  expect(calculate(26, 25, 25)).toBe('satisfactory');
  expect(calculate(31, 35, 35)).toBe('good');
  expect(calculate(50, 50, 25)).toBe('good');
  expect(calculate(42, 41, 42)).toBe('good');
  expect(calculate(50, 50, 50)).toBe('very good');
  expect(calculate(42, 42, 42)).toBe('very good');
});
