import { Flex, Text, Input, HStack, Box, Avatar } from '@chakra-ui/react';
import { Search2Icon, BellIcon, AtSignIcon } from '@chakra-ui/icons';

export function Header() {
  return(
    <Flex
      as='header'
      w='100%'
      maxWidth={1480}
      h='20'
      mx='auto'
      mt='4'
      px='6'
      align='center'>
        <Text
          fontSize='3xl'
          fontWeigth='bold'
          letterSpacing='tight'
          w='64'>
          dashgo
          <Text as='span' color='pink.500' ml='1'>.</Text>
        </Text>

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

        <Flex
          align='center'
          ml='auto'>
            <HStack 
              spacing='8'
              mx='8'
              pr='8'
              py='1'
              color='gray.300'
              borderRightWidth={1}
              borderColor='gray.700' >
              <BellIcon fontSize='20'></BellIcon>
              <AtSignIcon></AtSignIcon>
            </HStack>
            <Flex align='center'>
              <Box mr='4' textAlign='right'>
                <Text>Luciano Silva</Text>
                <Text color='gray.300' fontSize='small'>luciano2023silva@gmail.com</Text>
              </Box> 
              <Avatar size='md' name='Luciano Silva' src='https://github.com/luciano-ferreira.png'>

              </Avatar>
            </Flex>
        </Flex>
    </Flex>
  )
}