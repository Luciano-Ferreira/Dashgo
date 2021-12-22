import Link from 'next/link';
import {
  Box,
  Flex,
  Heading,
  Divider,
  VStack,
  SimpleGrid,
  HStack,
  Button,
  useColorModeValue
} from '@chakra-ui/react';
import { Header } from '../../components/Header';
import { Sidebar } from '../../components/Sidebar';
import { Input } from '../../components/Form/Input';

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';

type CreateUserFormData = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

const createUserFormSchema = yup.object().shape({
  name: yup.string().required('Name is required *'),
  email: yup.string().required('E-mail is required *').email('E-mail must be a valid email'),
  password: yup.string().required('Password is required *').min(6, 'The password must be at least 6 characters'),
  password_confirmation: yup.string().oneOf([
    null, yup.ref('password')
  ], 'Passwords must match')
})

const handleCreateUser: SubmitHandler<CreateUserFormData> = async (values) => {
  await new Promise(resolve => setTimeout(resolve, 2000));

  console.log(values)
}

export default function CreateUser() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(createUserFormSchema)
  });

  const { errors } = formState;
  return (
    <Box>
      <Header />

      <Flex w='100%' my='6' maxW={1480} mx='auto' px='6'>
        <Sidebar />

        <Box
          as='form'
          flex='1'
          borderRadius={8}
          bg={useColorModeValue('gray.800', 'purple.150')}
          p={['6', '8']}
          onSubmit={handleSubmit(handleCreateUser)}
        >
          <Heading size='lg' fontWeight='normal'>Criar usuário</Heading>
          <Divider my='6' borderColor={useColorModeValue('gray.700','gray.50')} />
          <VStack spacing='8'>
            <SimpleGrid minChildWidth='240px' spacing={['6', '8']} w='100%'>
              <Input
                name='name'
                label='Name'
                error={errors.name}
                {...register('name')}
              />
              <Input
                name='email'
                type='email'
                label='E-mail'
                error={errors.email}
                {...register('email')}
              />
            </SimpleGrid>
            <SimpleGrid minChildWidth='240px' spacing={['6', '8']} w='100%'>
              <Input
                name='password'
                type='password'
                label='Password'
                error={errors.password}
                {...register('password')}
              />
              <Input
                name='password_confirmation'
                type='password'
                label='Confirm password'
                error={errors.password_confirmation}
                {...register('password_confirmation')}
              />
            </SimpleGrid>
          </VStack>
          <Flex mt='8' justify='flex-end'>
            <HStack spacing='4'>
              <Link passHref href='/users'>
                <Button
                  as='a'
                  colorScheme='whiteAlpha'
                >
                  Cancel
                </Button>
              </Link>
              <Button
                type='submit'
                colorScheme='pink'
                isLoading={formState.isSubmitting}
              >
                Save
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}