import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function weightValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const weight = control.value;
    if (weight >= 1 && weight <= 5) {
      return null; // Valid weight
    }
    return { invalidWeight: 'Вага повинна бути в діапазоні від 1 до 5' };
  };
}
