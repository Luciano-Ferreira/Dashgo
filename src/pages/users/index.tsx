import Link from 'next/link';

import { useColorModeValue, Box, Flex, Text, Heading, Button, Icon, Table, Thead, Tr, Th, Td, Tbody, Checkbox, useBreakpointValue, Spinner } from '@chakra-ui/react';
import { Pagination } from '../../components/Pagination';
import { RiAddLine, RiPencilLine } from 'react-icons/ri';
import { Header } from '../../components/Header';
import { Sidebar } from '../../components/Sidebar';

import { useUsers } from '../../services/hooks/useUsers';

export default function UserList() {

  const { data, isLoading, isFetching, error } = useUsers();

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  });

  return (
    <Box>
      <Header />

      <Flex w='100%' my='6' maxW={1480} mx='auto' px='6'>
        <Sidebar />

        <Box
          flex='1'
          borderRadius={8}
          bg={useColorModeValue('gray.800', 'purple.150')}
          p='8'
        >
          <Flex mb='8' justify='space-between' align='center'>
            <Heading size='lg' fontWeight='normal'>
              Users
              { !isLoading && isFetching && <Spinner size='sm' color='gray.500' ml='4' /> }
            </Heading>
            <Link passHref href='/users/create'>
              <Button 
                as='a' 
                size='sm' 
                fontSize='sm' 
                color='whiteAlpha.900' 
                bgColor='green.600'
                leftIcon={<Icon as={RiAddLine} color='whiteAlpha.900' fontSize='20'></Icon>}
                _hover={{ bgColor: 'green.700' }}
                _active={{ bgColor: 'green.800' }}
              >
                New user
              </Button>
            </Link>
          </Flex>
          {
            isLoading ? (
              <Flex justify='center'>
                <Spinner />
              </Flex>
            ) : error ? (
              <Flex justify='center'>
                <Text>Failed in fetching data.</Text>
              </Flex>
            ) : (
              <>
                <Table
                  colorScheme={useColorModeValue('whiteAlpha', 'whiteAlpha')}
                >
                  <Thead>
                    <Tr>
                      <Th px='6' color='gray.300' width='8'>
                        <Checkbox borderColor={useColorModeValue('whiteAlpha', 'gray.300')} colorScheme='pink' />
                      </Th>
                      <Th>User</Th>
                      {isWideVersion && <Th>Date of register</Th>}
                      <Th width='8'></Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {
                      data.map(user => (
                        <Tr key={user.id}>
                          <Td px='6'>
                            <Checkbox borderColor={useColorModeValue('whiteAlpha', 'gray.300')}></Checkbox>
                          </Td>
                          <Td>
                            <Box>
                              <Text fontWeight='bold'>{user.name}</Text>
                              <Text fontSize='sm' color='gray.300'>{user.email}</Text>
                            </Box>
                          </Td>
                          {isWideVersion && 
                          <Td>
                              <Text fontSize='sm' color={useColorModeValue('white','gray.300')}>{user.createdAt}</Text>
                          </Td>}
                          <Td>
                            <Button
                              as='a'
                              size='sm'
                              fontSize='sm'
                              color='whiteAlpha.900'
                              bgColor='purple.500'
                              leftIcon={<Icon as={RiPencilLine} fontSize='16'></Icon>}
                              _hover={{ bgColor: 'purple.600' }}
                              _active={{ bgColor: 'purple.700' }}
                            >
                              Edit
                            </Button>
                          </Td>
                        </Tr>
                      ))
                    }
                  </Tbody>
                </Table>
                <Pagination
                  totalNumberRegisters={200}
                  currentPage={5}
                  onPageChange={() => {}}
                />
              </>
            )
          }
        </Box>
      </Flex>
    </Box>
  )
}