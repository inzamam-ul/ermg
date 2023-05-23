import React from 'react';
import { Flex, Box, FormControl, FormLabel } from '@chakra-ui/react';
import { allCountries } from 'country-telephone-data';

import { SelectInput, FormInput } from '.';

export const PhoneNumberInput = ({
  countryCodeName = 'country_code',
  phoneNumberName = 'phone_number',
  formLabel = 'Phone Number',
  isRequired = false,
}) => {
  const options = allCountries.map(country => ({
    label: `${country.name} +${country.dialCode}`,
    value: country.dialCode,
  }));

  return (
    <FormControl isRequired={isRequired} d="flex" flexDir="column">
      <FormLabel htmlFor={phoneNumberName}>{formLabel}</FormLabel>
      <Flex>
        <Box width={['35%', '25%']} mr={1}>
          <SelectInput
            name={countryCodeName}
            placeholder="Search country code"
            options={options}
          />
        </Box>
        <Box flex="1">
          <FormInput type="tel" name={phoneNumberName} />
        </Box>
      </Flex>
    </FormControl>
  );
};
