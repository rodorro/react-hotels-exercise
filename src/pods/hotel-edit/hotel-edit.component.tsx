import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    listLayout: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    },
  });

  interface Props {
    // hotelCollection: HotelEntityVm[];
    // onEdit: (id: string) => void;
  }

export const HotelEditComponent: React.FunctionComponent<Props> = props => {
//   const { hotelCollection, onEdit } = props;
  const classes = useStyles(props);
    console.log("LLEGO");
  return (
    <div className={classes.listLayout}>
        <h2>ESTOY AQUI</h2>
    </div>
  );
};