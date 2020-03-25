import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { HotelEntityVm, HotelEditFormErrors } from './hotel-edit.vm';
import { TextField, Typography, MenuItem, Button } from '@material-ui/core';
import Rating from 'material-ui-rating';
import { CitiesEntity } from 'core';

const useStyles = makeStyles({
    container: {
      display: 'flex',
      flexDirection: "column",
      justifyContent: "center"
    },
    rating: {
      color: 'rgba(0, 0, 0, 0.54)',
      padding: 0,
      fontSize: '0.75rem',
      fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
    }
  });

interface Props {
  hotel: HotelEntityVm;
  cities: CitiesEntity[];
  onChange: (id: string, value: any) => void;
  formErrors: HotelEditFormErrors;
  onSave: () => void;
}

const onFieldChange = (field: string, onChange) => e => {
  onChange(field, e.target.value);
};

const onRatingFieldChange = (field: string, onChange: (field, value) => void) => value => {
  onChange(field, value);
};

export const HotelEditComponent = (props: Props) => {
  const { hotel, cities, onChange, formErrors, onSave } = props;
  const classes = useStyles(props);

  return (
    <div className={classes.container}>
        <TextField
          label="Name"
          margin="normal"
          value={hotel.name}
          onChange={onFieldChange("name", onChange)}
        />
        <Typography variant="caption" color="error" gutterBottom={true}>
          {formErrors.name.errorMessage}
        </Typography>

        <Typography className={classes.rating} component="legend">Rating</Typography>
        <Rating
          value={hotel.rating}
          max={5}
          onChange={onRatingFieldChange("rating", onChange)}
        />
        <Typography variant="caption" color="error" gutterBottom>
          {formErrors.rating.errorMessage}
        </Typography>

        <TextField
          label="city"
          margin="normal"
          value={hotel.city}
          select={true}
          onChange={onFieldChange("city", onChange)}
          disabled={false}
        >
          {cities.map(collection => (
            <MenuItem key={collection.id} value={collection.id}>
              {collection.value}
            </MenuItem>
          ))}
        </TextField>
        <Typography variant="caption" color="error" gutterBottom>
          {formErrors.city.errorMessage}
        </Typography>

        <TextField
          placeholder="Description"
          label="description"
          margin="normal"
          value={hotel.description}
          type="text"
          multiline={true}
          onChange={onFieldChange("description", onChange)}       
        />
        <Typography variant="caption" color="error" gutterBottom>
          {formErrors.description.errorMessage}
        </Typography>

        <Button variant="contained" color="primary" onClick={onSave}>
          Save
        </Button>            
    </div>
  );
};
