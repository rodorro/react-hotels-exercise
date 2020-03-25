import * as React from 'react';
import { HotelEditComponent } from './hotel-edit.component';
import { HotelEntityVm, createDefaultHotelEditFormErrors, HotelEditFormErrors, createDefaultHotelEntity } from './hotel-edit.vm';
import { mapFromApiToVm } from './hotel-edit.mapper';
import { getHotelCollection } from 'pods/hotel-collection/hotel-collection.api';
import { useParams } from 'react-router-dom';
import { cities } from 'core';

const useHotelEdit = () => {
    const [hotel, setHotel] = React.useState<HotelEntityVm>(createDefaultHotelEntity());
  
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

const onFieldChange = (id: keyof HotelEntityVm, value: any) => {
    // setHotel({
    //   ...hotel,
    //   [id]: value
    // });

    // hotelFormValidation
    //   .validateField(hotel, id, value)
    //   .then(fieldValidationResult => {
    //     if (fieldValidationResult) {
    //       setHotelFormErrors({
    //         ...hotelFormErrors,
    //         [id]: fieldValidationResult
    //       });
    //     }
    //   });
};

const handleSave = () => {
    // hotelEditFormValidation.validateForm(hotel).then(formValidationResult => {
    //   if (formValidationResult.succeeded) {
    //     console.log("Succeeded !!! entry point to implement real save");
    //   } else {
    //     console.log(
    //       "Validation field you have to reivew some fields, show a snack bar here"
    //     );
    //   }
    // });
};

export const HotelEditContainer = () => {

    const { id } = useParams();
    const { hotel, loadHotel } = useHotelEdit();
    const [hotelEditFormErrors, setHotelEditFormErrors] = React.useState<HotelEditFormErrors>(
        createDefaultHotelEditFormErrors()
    );
    const [citiesList] = React.useState(cities);

    React.useEffect(() => {
        loadHotel(id);
    }, []);

    return <HotelEditComponent hotel={hotel} cities={citiesList} onChange={onFieldChange} 
                formErrors={hotelEditFormErrors} onSave={handleSave}/>;
};