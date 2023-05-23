import React from 'react';
import { useField, ErrorMessage } from 'formik';
import DatePicker from 'react-datepicker';
import {
  Flex,
  FormLabel,
  Input,
  FormErrorMessage,
  FormHelperText,
  FormControl,
  Box,
} from '@chakra-ui/react';

import 'react-datepicker/dist/react-datepicker.css';

export const DatePickerInput = ({
  formLabel,
  helperText,
  isMandatory,
  locale = 'sv-se',
  placeholder,
  ...rest
}) => {
  const [{ value, onBlur, ...field }, , helpers] = useField(rest);

  return (
    <Flex direction="column" mb={6}>
      <FormControl isRequired={isMandatory}>
        {formLabel && <FormLabel htmlFor={field.name}>{formLabel}</FormLabel>}
        <Box
          sx={{
            '.react-datepicker-wrapper': {
              width: '100%',
            },
          }}
        >
          <DatePicker
            {...field}
            {...rest}
            customInput={
              <Input autoComplete="off" bg="white" placeholder={placeholder} />
            }
            selected={(value && value) || null}
            onChange={val => helpers.setValue(val)}
          />
        </Box>
        <ErrorMessage name={field.name} component={FormErrorMessage} />
        {helperText && <FormHelperText>{helperText}</FormHelperText>}
      </FormControl>
    </Flex>
  );
};
