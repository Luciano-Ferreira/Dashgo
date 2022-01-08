import { Button, useColorModeValue } from '@chakra-ui/react';

interface ItemProps {
  number: number;
  isCurrent?: boolean;
}

export function Item({ 
  number, 
  isCurrent = false 
}: ItemProps) {
  if (isCurrent) {
    return (
      <Button
        size='sm'
        fontSize='xs'
        width='4'
        color='white'
        colorScheme='pink'
        disabled
        _disabled={{
          bgColor: 'pink.500',
          cursor: 'default',
        }}
      >
        {number}
      </Button>
    )
  }
  return (
    <Button
      size='sm'
      fontSize='xs'
      width='4'
      color={useColorModeValue('whiteAlpha','gray.300')}
      bgColor={useColorModeValue('gray.700', 'gray.100')}
      _hover={{
        bg: 'gray.500'
      }}
    >
      {number}
    </Button>
  )
}