import { HStack, Icon } from '@chakra-ui/react';
import { BellIcon } from '@chakra-ui/icons';
import { RiUserAddLine, RiMoonClearLine, RiSunLine } from 'react-icons/ri';
import { useColorMode, IconButton } from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react';

export function NotificationNav() {
  const { colorMode, toggleColorMode } = useColorMode();

  const toast = useToast()
  function changeTheme() {
    toggleColorMode()
    toast({
      title: 'Theme Changed',
      description: "now theme is " + colorMode,
      status: 'success',
      duration: 9000,
      isClosable: true,
    })
  }

  return(
    <HStack 
      spacing='8'
      mx='8'
      pr='8'
      py='1'
      color='gray.300'
      borderRightWidth={1}
      borderColor='gray.700' >
      <BellIcon fontSize='20' />
      <Icon as={RiUserAddLine} fontSize='20' />
      <IconButton
        icon={colorMode=== 'light'? <RiSunLine fontSize='20' /> : <RiMoonClearLine fontSize='20' />}
        aria-label='Color mode Switcher'
        onClick={changeTheme}
        cursor='default'
        bg='transparent'
        _hover={{bg:'transparent'}}
        _active={{bg:'transparent'}}
        _focus={{outline: 'none'}}
      >
        Switch mode
      </IconButton>
    </HStack>
  )
}