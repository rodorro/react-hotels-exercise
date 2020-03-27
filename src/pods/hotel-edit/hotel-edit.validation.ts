import {
  createFormValidation,
  ValidationConstraints,
  Validators
} from "lc-form-validation";

import { distinctString } from "common/validators/distinct-string.validator";
import { selectCity } from "core";
import { isGreaterThan } from "common/validators/number-greater-than.validator";
import { isLengthBetween } from "common/validators/length-between.validator";

const hotelEditFormValidationConstraints: ValidationConstraints = {
  fields: {
    name: [{ validator: Validators.required }],
    picture: [{ validator: Validators.required }],
    description: [
      { 
        validator: Validators.required,
      },
      {
        validator: isLengthBetween,
        customParams: { minLength: 24, maxLength: 256 }
      }
    ],
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
