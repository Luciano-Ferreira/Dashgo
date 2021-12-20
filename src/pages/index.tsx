import { Flex, Button, Stack, useColorModeValue, } from '@chakra-ui/react';
import { Input } from '../components/Form/Input';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ThemeButton } from '../components/ThemeButton';

type SignInFormData = {
  email: string;
  password: string;
}

export default function SignIn() {
  const { register, handleSubmit, formState } = useForm({
    // resolver: yupResolver()
  })

  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 2000));

    console.log(values)
  }

  const { errors } = formState

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
            label='E-mail'
            {...register('email')}
          />
          <Input
            name='password'
            type='password'
            label='Password'
            {...register('password')}
          />
          <Button
            type='submit'
            mt='6'
            colorScheme='pink'
            size='lg'
            isLoading={formState.isSubmitting}
          >Entrar</Button>
        </Stack>
      </Flex>
    </Flex>
  );
}
