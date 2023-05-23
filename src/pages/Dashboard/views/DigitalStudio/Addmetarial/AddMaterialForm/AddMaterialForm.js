import {
  TextField,
  MenuItem,
  Grid,
  Button,
  Input,
  InputAdornment,
} from '@mui/material';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';

import { useHistory } from 'react-router';
import { MaterialContext } from '../../../../routes';

const materialTypeData = [
  {
    value: 'Cotton',
  },
  {
    value: 'Cotton Blend',
  },
  {
    value: 'Recycled Polyester Blend',
  },
  {
    value: 'Organic Cotton',
  },
];

const AddMaterialForm = ({ image }) => {
  const [material, setMaterial] = useContext(MaterialContext);
  const history = useHistory();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data, e) => {
    if (!image) alert('please upload a image');

    if (image) {
      const materialData = {
        materialImg: image,
        materialName: data.materialName,
        materialType: materialType,
        composition: data.composition,
        weight: data.weight,
        description: data.description,
      };
      setMaterialType('');
      const newMaterial = [...material];
      newMaterial.push(materialData);
      setMaterial(newMaterial);
      history.push('/');

      reset();
    }
  };
  const [materialType, setMaterialType] = React.useState('');

  const handleChange = event => {
    setMaterialType(event.target.value);
  };
  return (
    <div>
      <form
        style={{ display: 'flex', flexDirection: 'column' }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextField
          required
          style={{ marginBottom: '20px', padding: '15px 0' }}
          {...register('materialName')}
          label="Material Name"
        />
        <TextField
          style={{ marginBottom: '20px', padding: '15px 0' }}
          id="standard-select-currency"
          select
          label="Material Type"
          value={materialType}
          onChange={handleChange}
          required
        >
          {materialTypeData.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.value}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          style={{ marginBottom: '20px', padding: '15px 0' }}
          {...register('composition')}
          label="Composition"
        />
        <Input
          {...register('weight')}
          style={{ marginBottom: '20px', padding: '15px 0' }}
          id="standard-adornment-weight"
          placeholder="weight"
          endAdornment={<InputAdornment position="end">gsm</InputAdornment>}
          aria-describedby="standard-weight-helper-text"
        />
        <TextField
          {...register('description')}
          style={{ marginBottom: '40px', padding: '15px 0' }}
          {...register('description')}
          label="Description"
        />
        <Grid item xs={3}>
          <Button
            type="submit"
            variant="contained"
            style={{ backgroundColor: '#388e3c' }}
            color="primary"
          >
            save
          </Button>
        </Grid>
      </form>
    </div>
  );
};

export default AddMaterialForm;
