import * as React from 'react';
import { HotelEditComponent } from './hotel-edit.component';
import { HotelEntityVm } from './hotel-edit.vm';
import { mapFromApiToVm } from './hotel-edit.mapper';
import { getHotelCollection } from 'pods/hotel-collection/hotel-collection.api';
import { useParams } from 'react-router-dom';

const useHotelEdit = () => {
    const [hotel, setHotel] = React.useState<HotelEntityVm>();
  
    const loadHotel = (id: string) => {

        getHotelCollection().then(result => {
                const hotel = result.find(hotel => hotel.id === id);
                console.log(hotel);
                if(hotel) {
                    setHotel(mapFromApiToVm(hotel));
                }
            }
        );
    };
  
    return { hotel, loadHotel };
  };

export const HotelEditContainer = () => {

    const { id } = useParams();
    const { hotel, loadHotel } = useHotelEdit();
    console.log(id);
    React.useEffect(() => {
        loadHotel(id);
    }, []);

    return <HotelEditComponent hotel={hotel}/>;
};