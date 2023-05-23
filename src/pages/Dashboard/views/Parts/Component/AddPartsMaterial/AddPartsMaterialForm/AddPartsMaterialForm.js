import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  TextField,
  MenuItem,
  FormControl,
  Grid,
  Button,
  Input,
  InputLabel,
  InputAdornment,
} from '@mui/material';
import { useHistory } from 'react-router';
import Axios from 'axios';
import { ColorPicker, createColor } from 'material-ui-color';

import { useAuth } from '../../../../../../../lib/auth';

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

const AddPartsMaterialForm = ({ image, setPreloader }) => {
  // eslint-disable-next-line no-unused-vars
  const { user, setUser } = useAuth();
  const [color, setColor] = useState(createColor('#000'));
  const [colorData, setColorData] = useState('');
  const handleColorChange = value => {
    console.log('onChange=', value);
    setColor(value);
    setColorData('#' + value.hex);
  };

  const history = useHistory();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data, e) => {
    if (!image) alert('please upload a image');

    if (image) {
      setPreloader(true);
      const materialData = {
        user: user._id,
        materialImg: image,
        materialName: data.materialName,
        materialType: materialType,
        materialColor: colorData,
        composition: data.composition,
        weight: data.weight,
        description: data.description,
      };
      console.log(materialData);
      const url = `https://calm-sea-09227.herokuapp.com/addMaterial`;

      Axios.post(url, materialData).then(res => {
        if (res) {
          history.push('/admin/parts');
          setPreloader(false);
        }
      });

      reset();
    }
  };

  const [materialType, setMaterialType] = React.useState('');

  const handleMaterialTypeChange = event => {
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
          onChange={handleMaterialTypeChange}
          required
        >
          {materialTypeData.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.value}
            </MenuItem>
          ))}
        </TextField>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <TextField
            style={{ marginBottom: '20px', padding: '15px 0', width: '100%' }}
            defaultValue={colorData ? '#' + colorData : ''}
            value={colorData}
            label="Material Color"
            required
          ></TextField>
          <ColorPicker
            hideTextfield
            value={color}
            onChange={handleColorChange}
          />
        </div>

        <TextField
          style={{ marginBottom: '20px', padding: '15px 0' }}
          {...register('composition')}
          label="Composition"
          required
        />
        <TextField
          type="number"
          placeholder="gsm"
          {...register('weight')}
          style={{ marginBottom: '40px', padding: '15px 0' }}
          label="Weight"
          required
        />

        {/* <FormControl variant="standard">
          <InputLabel htmlFor="standard-adornment-weight">Weight</InputLabel>
          <Input
            id="standard-adornment-weight"
            type="number"
            {...register('weight')}
            style={{ marginBottom: '20px', padding: '15px 0' }}
            required
            endAdornment={<InputAdornment position="end">gsm</InputAdornment>}
          />
        </FormControl> */}
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

export default AddPartsMaterialForm;
