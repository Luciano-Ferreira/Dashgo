import { Flex, Input, Icon } from '@chakra-ui/react';
import { RiSearchLine } from 'react-icons/ri';
import { useColorModeValue } from '@chakra-ui/react';
import { useState } from 'react';

export function SearchBox() {
  const [ search , setSearch ] = useState('');

  return (
    <Flex
        as='label'
        flex='1'
        py='1'
        px='8'
        ml='6'
        maxW={400}
        alignSelf='center'
        color='gray.200'
        position='relative'
        bg={useColorModeValue('gray.800', 'purple.150')}
        borderRadius='full' >

        <Input 
          color={useColorModeValue('gray.50', 'gray.900')}
          variant='unstyled'
          px='4'
          mr='4'
          placeholder='Search in platform'
          _placeholder={{ color: 'gray.400'}}
          value={search}
          onChange={ e => setSearch(e.target.value)}
        />
        <Icon as={RiSearchLine} fontSize='20' />
      </Flex>
  );
}