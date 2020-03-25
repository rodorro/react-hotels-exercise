import * as React from 'react';
import { HotelEditComponent } from './hotel-edit.component';
import { HotelEntityVm, createDefaultHotelEditFormErrors, HotelEditFormErrors, createDefaultHotelEntity } from './hotel-edit.vm';
import { mapFromApiToVm } from './hotel-edit.mapper';
import { getHotelCollection } from 'pods/hotel-collection/hotel-collection.api';
import { useParams } from 'react-router-dom';
import { cities } from 'core';
import { hotelEditFormValidation } from './hotel-edit.validation';

const useHotelEdit = () => {
    const [hotelEdit, setHotelEdit] = React.useState<HotelEntityVm>(createDefaultHotelEntity());
  
    const loadHotel = (id: string) => {

        getHotelCollection().then(result => {
                const hotel = result.find(hotel => hotel.id === id);
                console.log(hotel);
                if(hotel) {
                    setHotelEdit(mapFromApiToVm(hotel));
                }
            }
        );
    };
  
    return { hotelEdit, setHotelEdit, loadHotel };
};

export const HotelEditContainer = () => {

    const { id } = useParams();
    const { hotelEdit, setHotelEdit, loadHotel } = useHotelEdit();
    const [hotelEditFormErrors, setHotelEditFormErrors] = React.useState<HotelEditFormErrors>(
        createDefaultHotelEditFormErrors()
    );
    const [citiesList] = React.useState(cities);

    React.useEffect(() => {
        loadHotel(id);
    }, []);

    const onChange = (id: keyof HotelEntityVm, value: any) => {
        setHotelEdit({
          ...hotelEdit,
          [id]: value
        });
    
        hotelEditFormValidation
          .validateField(hotelEdit, id, value)
          .then(fieldValidationResult => {
            if (fieldValidationResult) {
              setHotelEditFormErrors({
                ...hotelEditFormErrors,
                [id]: fieldValidationResult
              });
            }
          });
    };

    const handleSave = () => {
        hotelEditFormValidation.validateForm(hotelEdit).then(result => {
          if (result.succeeded) {
            alert("save data")
          } else {
            alert("You have to inform correctly all fields");
          }
        });
    };    

    return <HotelEditComponent hotel={hotelEdit} cities={citiesList} onChange={onChange} 
                formErrors={hotelEditFormErrors} onSave={handleSave}/>;
};