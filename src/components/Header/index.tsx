import { Flex, Icon, useBreakpointValue, IconButton } from '@chakra-ui/react';

import { Profile } from './Profile';
import { NotificationNav } from './NotificationNav';
import { Logo } from './Logo';
import { SearchBox } from './SearchBox';
import { useSidebarDrawer } from '../../contexts/SidebarDrawer';
import { RiMenuLine } from 'react-icons/ri';

export function Header() {
const { onOpen } = useSidebarDrawer()

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  });
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
        {
          !isWideVersion && (
            <IconButton
              aria-label='Open navigation'
              icon={<Icon as={RiMenuLine}></Icon>}
              fontSize='24'
              variant='unstyled'
              onClick={onOpen}
              mr='2'
            ></IconButton>
          )
        }
        <Logo />
        { isWideVersion && <SearchBox /> }
        <Flex
          align='center'
          ml='auto'>
            <NotificationNav />
            <Profile showProfileData={isWideVersion} />
        </Flex>
    </Flex>
  )
}