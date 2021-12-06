import { Flex, Box, Text, Avatar } from '@chakra-ui/react'

export function Profile() {
  return (
    <Flex align='center'>
      <Box mr='4' textAlign='right'>
        <Text>Luciano Silva</Text>
        <Text color='gray.300' fontSize='small'>luciano2023silva@gmail.com</Text>
      </Box> 
      <Avatar size='md' name='Luciano Silva' src='https://github.com/luciano-ferreira.png'>

      </Avatar>
    </Flex>
  )
}