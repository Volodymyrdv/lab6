import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { productType } from '../classes/class/ProductName';
import { nameValidator } from '../validators/name.validator';
import { weightValidator } from '../validators/weight.validator';

export function formConstructor(
  type: string,
  productForm: FormGroup,
  fb: FormBuilder
) {
  const controlsToRemove = ['itemCount', 'weight', 'material'];
  controlsToRemove.forEach((control) => {
    if (productForm.contains(control)) {
      productForm.removeControl(control);
    }
  });

  switch (type) {
    case productType[0]: // GiftSet
      productForm.addControl('itemCount', fb.control(0, Validators.min(1)));
      productForm.addControl('weight', fb.control(0, weightValidator()));
      break;
    case productType[1]: // Letter
      break;
    case productType[2]: // Souvenir
      productForm.addControl('material', fb.control('', nameValidator()));
      break;
    default:
      throw new Error('Invalid product type');
  }
}
