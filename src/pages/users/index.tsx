import NextLink from 'next/link';
import { GetServerSideProps } from 'next';
import { useState } from 'react';

import { useColorModeValue, Box, Flex, Text, Heading, Button, Icon, Table, Thead, Tr, Th, Td, Tbody, Checkbox, useBreakpointValue, Spinner, Link } from '@chakra-ui/react';
import { RiAddLine, RiPencilLine } from 'react-icons/ri';

import { Pagination } from '../../components/Pagination';
import { Header } from '../../components/Header';
import { Sidebar } from '../../components/Sidebar';
import { queryClient } from '../../services/queryClient';


import { useUsers, getUsers } from '../../services/hooks/useUsers';
import { api } from '../../services/api';

export default function UserList() {
  const [ page, setPage ] = useState(1);


  const { data, isLoading, isFetching, error } = useUsers(page);

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  });

  async function handlePrefetchUser(userId: string) {
    await queryClient.prefetchQuery(['user', userId], async () => {
      const response = await api.get(`users/${userId}`)

      return response.data;
    }, {
      staleTime: 1000 * 60 * 10
    })
  }

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
            <NextLink passHref href='/users/create'>
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
            </NextLink>
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
                      data.users.map(user => (
                        <Tr key={user.id}>
                          <Td px='6'>
                            <Checkbox borderColor={useColorModeValue('whiteAlpha', 'gray.300')}></Checkbox>
                          </Td>
                          <Td>
                            <Box>
                              <Link color='purple.400' onMouseEnter={() => handlePrefetchUser(user.id)}>
                                <Text fontWeight='bold'>{user.name}</Text>
                              </Link>
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
                  totalNumberRegisters={data.totalCount}
                  currentPage={page}
                  onPageChange={setPage}
                />
              </>
            )
          }
        </Box>
      </Flex>
    </Box>
  )
}