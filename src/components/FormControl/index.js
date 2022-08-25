import React from 'react';
import { FormControl as ChakraFormControl, FormLabel, FormErrorMessage } from '@chakra-ui/react';

import DefaultInput from './DefaultInput';
import IconInput from './IconInput';

export default function FormControl({
  isInvalid,
  label,
  validationMessage,
  type,
  value,
  onChange,
  icon,
  required = true,
  iconPosition = 'right',
  placeholder = '',
}) {
  const inputLocalProps = {
    type, placeholder, value, onChange, required
  };

  return (
    <ChakraFormControl
      mb={5}
      isInvalid={isInvalid}
    >
      <FormLabel>{label}</FormLabel>
      {
        icon
          ? <IconInput {...inputLocalProps} position={iconPosition} icon={icon} />
          : <DefaultInput {...inputLocalProps} />
      }
      {validationMessage
        && <FormErrorMessage textAlign='left'>{validationMessage}</FormErrorMessage>
      }
    </ChakraFormControl>
  )
}
