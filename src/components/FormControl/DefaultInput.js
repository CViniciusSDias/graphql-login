import { Input } from '@chakra-ui/react';

export default function DefaultInput({
  type,
  value,
  onChange,
  required,
  placeholder,
}) {
  return (
    <Input
      type={type}
      value={value}
      onChange={onChange}
      required={required}
      placeholder={placeholder}
    />
  )
}