import { Flex, Button, Stack, useColorModeValue, } from '@chakra-ui/react';
import { Input } from '../components/Form/Input';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ThemeButton } from '../components/ThemeButton';

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

type SignInFormData = {
  email: string;
  password: string;
}

const signInFormSchema = yup.object().shape({
  email: yup.string().required('E-mail is required *').email('E-mail must be a valid email'),
  password: yup.string().required('Password is required *'),
})

export default function SignIn() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema)
  })

  const { errors } = formState;
  
  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log(values)
  }

  return (
    <Flex
      w='100vw'
      h='100vh'
      align='center'
      justify='center'
    >
      <Flex
        position='absolute'
        top='30'
        right='30'
      >
        <ThemeButton />
      </Flex>
      <Flex
        as='form'
        width='100%'
        maxWidth={360}
        bg={useColorModeValue('gray.800', 'purple.150')}
        p='8'
        borderRadius={8}
        flexDir='column'
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing='4'>
          <Input
            name='email'
            type='email'
            error={errors.email}
            label='E-mail'
            {...register('email')}
          />
          <Input
            name='password'
            type='password'
            error={errors.password}
            label='Password'
            {...register('password')}
          />
        </Stack>
        <Button
            type='submit'
            mt='6'
            colorScheme='pink'
            size='lg'
            isLoading={formState.isSubmitting}
          >
            Entrar
          </Button>
      </Flex>
    </Flex>
  );
}
