import { Flex, Input } from '@chakra-ui/react';
import { Search2Icon } from '@chakra-ui/icons';

export function SearchBox() {
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
        bg='gray.800'
        borderRadius='full' >

        <Input 
          color='gray.50'
          variant='unstyled'
          px='4'
          mr='4'
          placeholder='Buscar na plataforma'
          _placeholder={{ color: 'gray.400'}}
        />
        <Search2Icon />
      </Flex>
  );
}