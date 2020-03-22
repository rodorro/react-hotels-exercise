import * as React from 'react';
import { HotelCollectionComponent } from './hotel-collection.component';
import { HotelEntityVm } from './hotel-collection.vm';
import { getHotelCollection } from './hotel-collection.api';
import { mapFromApiToVm } from './hotel-collection.mapper';
import { mapToCollection } from 'common/mappers';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { linkRoutes } from 'core';

const useHotelCollection = () => {
  const [hotelCollection, setHotelCollection] = React.useState<HotelEntityVm[]>(
    []
  );

  const loadHotelCollection = () => {
    getHotelCollection().then(result =>
      setHotelCollection(mapToCollection(result, mapFromApiToVm))
    );
  };

  return { hotelCollection, loadHotelCollection };
};

interface Props extends RouteComponentProps {}

const HotelCollectionContainerInner = (props : Props) => {

  const { hotelCollection, loadHotelCollection } = useHotelCollection();

  const handleEdit = (id: string) => {
    props.history.push(linkRoutes.hotelEdit(id));
  }

  React.useEffect(() => {
    loadHotelCollection();
  }, []);

  return <HotelCollectionComponent hotelCollection={hotelCollection} onEdit={handleEdit}/>;
};

export const HotelCollectionContainer = withRouter(HotelCollectionContainerInner);
