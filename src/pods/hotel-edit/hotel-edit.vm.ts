import { FieldValidationResult } from "lc-form-validation";

export interface HotelEntityVm {
  id : string;
  name : string;
  picture : string;
  rating : number;
  city : string;
  description : string;
}

export const createDefaultHotelEntity = ()  : HotelEntityVm => ({
  id: '0',
  name: '',
  picture: '',
  rating: 5,
  city: '',
  description: '',
});

export interface HotelEditFormErrors {
  id: FieldValidationResult;
  name: FieldValidationResult;
  picture: FieldValidationResult;
  rating: FieldValidationResult;
  city: FieldValidationResult;
  description: FieldValidationResult;
}

export const createDefaultHotelEditFormErrors = (): HotelEditFormErrors => ({
  id: new FieldValidationResult(),
  name:  new FieldValidationResult(),
  picture:  new FieldValidationResult(),
  rating:  new FieldValidationResult(),
  city:  new FieldValidationResult(),
  description:  new FieldValidationResult(),
});