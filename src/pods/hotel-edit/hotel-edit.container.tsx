import * as React from 'react';
import { HotelEditComponent } from './hotel-edit.component';
import { 
  HotelEntityVm, 
  createDefaultHotelEditFormErrors, 
  HotelEditFormErrors, 
  createDefaultHotelEntity
 } from './hotel-edit.vm';
import { mapFromApiToVm, mapFromVmToApi } from './hotel-edit.mapper';
import { getHotelCollection } from 'pods/hotel-collection/hotel-collection.api';
import { useParams, RouteComponentProps, withRouter } from 'react-router-dom';
import { cities, linkRoutes } from 'core';
import { hotelEditFormValidation } from './hotel-edit.validation';

const useHotelEdit = () => {
    const [hotelEdit, setHotelEdit] = React.useState<HotelEntityVm>(createDefaultHotelEntity());
  
    const loadHotel = (id: string) => {

        getHotelCollection().then(result => {
            const hotel = result.find(hotel => hotel.id === id);
            if(hotel) {
                setHotelEdit(mapFromApiToVm(hotel));
            }
        });
    };
  
    return { hotelEdit, setHotelEdit, loadHotel };
};

interface Props extends RouteComponentProps {}

const HotelEditContainerInner = (props : Props) => {

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
            console.log(mapFromVmToApi(hotelEdit));
            props.history.push(linkRoutes.hotelCollection);
          } else {
            alert("You have to inform correctly all fields");
          }
        });
    };    

    return <HotelEditComponent hotel={hotelEdit} cities={citiesList} onChange={onChange} 
                formErrors={hotelEditFormErrors} onSave={handleSave}/>;
};

export const HotelEditContainer = withRouter(HotelEditContainerInner);