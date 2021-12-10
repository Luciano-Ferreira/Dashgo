import { useColorModeValue, Box, Flex, Text, Heading, Button, Icon, Table, Thead, Tr, Th, Td, Tbody, Checkbox } from '@chakra-ui/react';
import { Pagination } from '../../components/Pagination';
import { RiAddLine, RiPencilLine } from 'react-icons/ri';
import { Header } from '../../components/Header';
import { Sidebar } from '../../components/Sidebar';

export default function UserList() {
  return (
    <Box>
      <Header />

      <Flex w='100%' my='6' maxW={1480} mx='auto' px='6'>
        <Sidebar />

        <Box
          flex='1'
          borderRadius={8}
          bg={useColorModeValue('gray.800','purple.150')}
          p='8'>
          <Flex mb='8' justify='space-between' align='center'>
            <Heading size='lg' fontWeight='normal'>Usuários</Heading>
            <Button as='a' size='sm' fontSize='sm' colorScheme='green' leftIcon={<Icon as={RiAddLine} fontSize='20'></Icon>}>
              Criar novo
            </Button>
          </Flex>
          <Table 
          
          >
            <Thead>
              <Tr>
                <Th px='6' color='gray.300' width='8'>
                  <Checkbox colorScheme='pink' />
                </Th>
                <Th>Usuário</Th>
                <Th>Data de cadastro</Th>
                <Th width='8'></Th>
              </Tr>
            </Thead>
            <Tbody borderColor='red'>
              <Tr>
                <Td px='6'>
                  <Checkbox></Checkbox>
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight='bold'>Luciano Silva</Text>
                    <Text fontSize='sm' color='gray.300'>luciano2023silva@gmail.com</Text>

                  </Box>
                </Td>
                <Td>
                  04 de Abril, 2021
                </Td>
                <Td>
                  <Button
                    as='a'
                    size='sm'
                    fontSize='sm'
                    color='whiteAlpha.900'
                    bgColor='purple.500'
                    leftIcon={<Icon as={RiPencilLine} fontSize='16'></Icon>}
                    _hover={{bgColor:'purple.600'}}
                    _active={{bgColor:'purple.700'}}
                  >
                    Editar
                  </Button>
                </Td>
              </Tr>
              <Tr>
                <Td px='6'>
                  <Checkbox></Checkbox>
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight='bold'>Luciano Silva</Text>
                    <Text fontSize='sm' color='gray.300'>luciano2023silva@gmail.com</Text>

                  </Box>
                </Td>
                <Td>
                  04 de Abril, 2021
                </Td>
                <Td>
                <Button
                    as='a'
                    size='sm'
                    fontSize='sm'
                    color='whiteAlpha.900'
                    bgColor='purple.500'
                    leftIcon={<Icon as={RiPencilLine} fontSize='16'></Icon>}
                    _hover={{bgColor:'purple.600'}}
                    _active={{bgColor:'purple.700'}}
                  >
                    Editar
                  </Button>
                </Td>
              </Tr>
              <Tr>
                <Td px='6'>
                  <Checkbox></Checkbox>
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight='bold'>Luciano Silva</Text>
                    <Text fontSize='sm' color='gray.300'>luciano2023silva@gmail.com</Text>

                  </Box>
                </Td>
                <Td>
                  04 de Abril, 2021
                </Td>
                <Td>
                <Button
                    as='a'
                    size='sm'
                    fontSize='sm'
                    color='whiteAlpha.900'
                    bgColor='purple.500'
                    leftIcon={<Icon as={RiPencilLine} fontSize='16'></Icon>}
                    _hover={{bgColor:'purple.600'}}
                    _active={{bgColor:'purple.700'}}
                  >
                    Editar
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>
          <Pagination />
        </Box>
      </Flex>
    </Box>
  )
}