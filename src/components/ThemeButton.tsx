import { RiMoonClearLine, RiSunLine, } from 'react-icons/ri';
import { IconButton, useColorMode } from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react';


export function ThemeButton() {
  const { colorMode, toggleColorMode } = useColorMode();

  const toast = useToast()
  function changeTheme() {
    toggleColorMode()
    toast({
      title: 'Theme Changed',
      description: "now theme is " + colorMode,
      status: 'success',
      duration: 3000,
      isClosable: true,
    })
  }

  return (
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
  )
}