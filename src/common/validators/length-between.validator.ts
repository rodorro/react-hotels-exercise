import { FieldValidationResult } from "lc-form-validation";

interface Params {
  minLength: number;
  maxLength: number;
}

export const isLengthBetween = (
  value: any,
  vm: any,
  params: Params
) => {
  const paramsOk = paramsInformed(params);
  const isValid = paramsOk && value.length >= params.minLength && value.length <= params.maxLength;
  const validationResult = new FieldValidationResult();

  validationResult.succeeded = isValid;
  validationResult.type = "IS_BETWEEN";
  validationResult.errorMessage = isValid
    ? ""
    : `Length must be into ${params.minLength} and ${params.maxLength}`;
  return validationResult;
};

const paramsInformed = params => {
  let paramsInformed = params && params.minLength && params.maxLength;

  if (!paramsInformed) {
    console.error(`No params informed`);
  }

  return paramsInformed;
};
