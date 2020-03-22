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
