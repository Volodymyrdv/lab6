import { FormControl } from '@angular/forms';
import { weightValidator } from './weight.validator';

describe('weightValidator', () => {
  const validator = weightValidator();

  it('should return null for minimum valid weight (1)', () => {
    const control = new FormControl(1);
    expect(validator(control)).toBeNull();
  });

  it('should return null for maximum valid weight (5)', () => {
    const control = new FormControl(5);
    expect(validator(control)).toBeNull();
  });

  it('should return null for a valid weight in range (3)', () => {
    const control = new FormControl(3);
    expect(validator(control)).toBeNull();
  });

  it('should return error for weight below range', () => {
    const control = new FormControl(0.9);
    expect(validator(control)).toEqual({
      invalidWeight: 'Вага повинна бути в діапазоні від 1 до 5',
    });
  });

  it('should return error for weight above range', () => {
    const control = new FormControl(5.1);
    expect(validator(control)).toEqual({
      invalidWeight: 'Вага повинна бути в діапазоні від 1 до 5',
    });
  });

  it('should return error for non-numeric input', () => {
    const control = new FormControl('abc');
    expect(validator(control)).toEqual({
      invalidWeight: 'Вага повинна бути в діапазоні від 1 до 5',
    });
  });

  it('should return error for empty value', () => {
    const control = new FormControl(null);
    expect(validator(control)).toEqual({
      invalidWeight: 'Вага повинна бути в діапазоні від 1 до 5',
    });
  });
});
