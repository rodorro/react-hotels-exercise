import { FieldValidationResult } from "lc-form-validation";

interface Params {
  maxValue: number;
}

export const isGreaterThan = (
  value: any,
  vm: any,
  params: Params
) => {
  const paramsOk = paramsInformed(params);
  const isValid = paramsOk && value > params.maxValue;
  const validationResult = new FieldValidationResult();

  validationResult.succeeded = isValid;
  validationResult.type = "IS_GREATER_THAN";
  validationResult.errorMessage = isValid
    ? ""
    : `Number must be greater than ${params.maxValue}`;
  return validationResult;
};

const paramsInformed = params => {
  let paramsInformed = params && params.maxValue;

  if (!paramsInformed) {
    console.error(`No params informed`);
  }

  return paramsInformed;
};
