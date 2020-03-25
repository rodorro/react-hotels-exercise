import { FieldValidationResult } from "lc-form-validation";

interface CustomParams {
  maxValue: number;
}

export const isGreaterThan = (
  value: any,
  vm: any,
  customParams: CustomParams
) => {
  const paramsOk = paramsInformed(customParams);
  const isValid = paramsOk && value > customParams.maxValue;
  const validationResult = new FieldValidationResult();

  validationResult.succeeded = isValid;
  validationResult.type = "IS_GREATER_THAN";
  validationResult.errorMessage = isValid
    ? ""
    : `Number must be greater than ${customParams.maxValue}`;
  return validationResult;
};

const paramsInformed = customParams => {
  let paramsInformed = customParams && customParams.maxValue;

  if (!paramsInformed) {
    console.error(`No params informed`);
  }

  return paramsInformed;
};
