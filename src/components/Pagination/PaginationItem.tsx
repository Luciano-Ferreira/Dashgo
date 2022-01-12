import { Button, useColorModeValue } from '@chakra-ui/react';

interface ItemProps {
  number: number;
  isCurrent?: boolean;
  onPageChange: (page:number) => void;
}

export function PaginationItem({ 
  number, 
  isCurrent = false,
  onPageChange 
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
      bgColor={useColorModeValue('gray.700', 'gray.50')}
      _hover={useColorModeValue({
        bg: 'gray.500'
      }, {bg: 'gray.100'})}
      onClick={() => onPageChange(number)}
    >
      {number}
    </Button>
  )
}