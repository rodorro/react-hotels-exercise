import {
  createFormValidation,
  ValidationConstraints,
  Validators
} from "lc-form-validation";

// import {
//   numberValueIsGreaterThan,
//   // stringNotEqualValue
// } from "common/validators";
// import { noCitySelectedLiteral } from "core";

const hotelEditFormValidationConstraints: ValidationConstraints = {
  fields: {
    name: [{ validator: Validators.required }],
    description: [{ validator: Validators.required }],
    rating: [
      // {
      //   validator: numberValueIsGreaterThan,
      //   customParams: { maxValue: 3 }
      // }
    ],
    address: [{ validator: Validators.required }],
    city: [
      // {
      //   validator: stringNotEqualValue,
      //   customParams: { stringToCompare: noCitySelectedLiteral }
      // }
    ]
  }
};

export const hotelEditFormValidation = createFormValidation(
  hotelEditFormValidationConstraints
);
