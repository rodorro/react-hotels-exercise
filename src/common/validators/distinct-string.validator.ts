import { FieldValidationResult } from "lc-form-validation";

interface CustomParams {
  stringToCompare: string;
}

export const distinctString = (value, vm, customParams: CustomParams) => {
  const paramsOk = paramsInformed(customParams);
  const isValid = paramsOk && value !== customParams.stringToCompare;
  const validationResult = new FieldValidationResult();

  validationResult.succeeded = isValid;
  validationResult.type = "DISTINCT_STRING";
  validationResult.errorMessage = isValid
    ? ""
    : `Please enter one selection`;
  return validationResult;
};

const paramsInformed = customParams => {
  let paramsInformed = customParams && customParams.stringToCompare;

  if (!paramsInformed) {
    console.error(`No string informed`);
  }

  return paramsInformed;
};
