import {
  createFormValidation,
  ValidationConstraints,
  Validators
} from "lc-form-validation";
import { isGreaterThan } from "common/validators/number-greater-than.validator";
import { distinctString } from "common/validators/distinct-string.validator";
import { selectCity } from "core";

const hotelEditFormValidationConstraints: ValidationConstraints = {
  fields: {
    name: [{ validator: Validators.required }],
    description: [{ validator: Validators.required }],
    rating: [
      {
        validator: isGreaterThan,
        customParams: { maxValue: 2 }
      }
    ],
    address: [{ validator: Validators.required }],
    city: [
      {
        validator: distinctString,
        customParams: { stringToCompare: selectCity }
      }
    ]
  }
};

export const hotelEditFormValidation = createFormValidation(
  hotelEditFormValidationConstraints
);
