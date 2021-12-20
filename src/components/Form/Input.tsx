import { forwardRef, ForwardRefRenderFunction } from 'react'
import { FormLabel, FormControl, Input as ChakraInput, InputProps as ChakraInputProps, useColorModeValue, useColorMode } from '@chakra-ui/react';

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({name, label, ...rest}, ref) => {
  const { colorMode } = useColorMode();

  return (
    <FormControl>
      {!!label && <FormLabel id={label} htmlFor={name}>{label}</FormLabel>}
      <ChakraInput
        name={name}
        id={name}
        type='email' 
        focusBorderColor='pink.500'
        bgColor={useColorModeValue('gray.900', 'gray.100')}
        variant='filled'
        _hover={colorMode === 'dark' ? {  bgColor: 'gray.300' }: { bgColor: 'gray.900' }}
        _focus={colorMode === 'dark' ? {  bgColor: 'gray.300' }: { bgColor: 'gray.900' }}
        size='lg'
        ref={ref}
        {...rest}
      />
    </FormControl>
  );
}

export const Input = forwardRef(InputBase)