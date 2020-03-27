import { basePicturesUrl } from 'core';
import * as apiModel from '../hotel-collection/hotel-collection.api';
import { HotelEntityVm } from './hotel-edit.vm';

export const mapFromApiToVm = (
  hotel: apiModel.HotelEntityApi
): HotelEntityVm => ({
  id: hotel.id,
  picture: `${basePicturesUrl}${hotel.thumbNailUrl}`,
  name: hotel.name,
  description: hotel.shortDescription,
  rating: hotel.hotelRating,
  city: hotel.city
});


export const mapFromVmToApi = (
  hotel: HotelEntityVm
): apiModel.HotelEntityApi => ({
  id: hotel.id,
  type: "",
  name: hotel.name,
  created: new Date(),
  modified: new Date(),
  address1: "",
  airportCode: "",
  amenityMask: 0,
  city: hotel.city,
  confidenceRating: 0,
  countryCode: "",
  deepLink: "",
  highRate: 0,
  hotelId: 0,
  hotelInDestination: false,
  hotelRating: hotel.rating,
  location: {
    latitude: 0,
    longitude: 0,
  },
  locationDescription: "",
  lowRate: 0,
  metadata: {
    path: "",
  },
  postalCode: 0,
  propertyCategory: 0,
  proximityDistance: 0,
  proximityUnit: "",
  rateCurrencyCode: "",
  shortDescription: hotel.description,
  stateProvinceCode: "",
  thumbNailUrl: hotel.picture,
  tripAdvisorRating: 0,
  tripAdvisorRatingUrl: "",
});
