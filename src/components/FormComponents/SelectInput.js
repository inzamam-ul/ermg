import React from 'react';
import { ErrorMessage } from 'formik';
import { FormLabel, FormErrorMessage, FormControl } from '@chakra-ui/react';

export const SelectInput = ({
  name,
  formLabel,
  isRequired = false,
  ...rest
}) => {
  return (
    <FormControl isRequired={isRequired} mb={4}>
      {formLabel && <FormLabel htmlFor={name}>{formLabel}</FormLabel>}

      <ErrorMessage name={name} component={FormErrorMessage} />
    </FormControl>
  );
};
