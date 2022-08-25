import {
  Input,
  InputGroup,
  InputRightElement,
  InputLeftElement
} from '@chakra-ui/react';

export default function IconInput({
  type,
  placeholder,
  value,
  onChange,
  required,
  position,
  icon
}) {
  const PositionElement = position === 'left' ? InputLeftElement : InputRightElement;

  return (
    <InputGroup size='md'>
      <Input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
      />
      <PositionElement width='4.5rem'>
        {icon}
      </PositionElement>
    </InputGroup>
  )
}