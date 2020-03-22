import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { HotelEntityVm } from './hotel-edit.vm';

const useStyles = makeStyles({
    listLayout: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    },
  });

  interface Props {
    hotel: HotelEntityVm;
  }

export const HotelEditComponent: React.FunctionComponent<Props> = props => {
  const { hotel } = props;
  const classes = useStyles(props);

  return (
    <div className={classes.listLayout}>
        <h2>ESTOY AQUI</h2>
    </div>
  );
};