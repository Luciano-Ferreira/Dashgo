import { Box, Drawer, useBreakpointValue, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerBody, DrawerHeader, useColorModeValue } from '@chakra-ui/react';
import { useSidebarDrawer } from '../../contexts/SidebarDrawer';
import { SideBarNav } from './SideBarNav';

export function Sidebar(){
  const { isOpen, onClose } = useSidebarDrawer();
  

  const isDrawerSidebar =  useBreakpointValue({
    base: true,
    lg: false
  });

  if (isDrawerSidebar) {
    return (
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
      >
        <DrawerOverlay>
          <DrawerContent
            bg={useColorModeValue('gray.800', 'purple.150')}
            p='4'
          >
            <DrawerCloseButton mt='6' />
            <DrawerHeader>
              Navigation
            </DrawerHeader>
            <DrawerBody>
              <SideBarNav />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    )
  }

  return(
    <Box as='aside' w='64' mr='8'>
      <SideBarNav />
    </Box>
  )
}7