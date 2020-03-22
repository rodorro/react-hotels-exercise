import Axios from 'axios';
import { baseApiUrl } from 'core';
import { HotelEntityApi } from 'pods/hotel-collection/hotel-collection.api';

const getHotelsUrl = `${baseApiUrl}/api/hotels`;

// TODO: Just only managing the "happy path", adding error handling here or upper level
// would be a good idea
export const getHotel = (): Promise<HotelEntityApi> =>
  Axios.get<HotelEntityApi>(getHotelsUrl).then(({ data }) => data);
