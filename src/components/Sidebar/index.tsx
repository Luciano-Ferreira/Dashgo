import { Box, Stack } from '@chakra-ui/react';
import { RiContactsLine, RiGitMergeLine, RiDashboardLine, RiInputMethodLine } from 'react-icons/ri';
import { NavSection } from './NavSection';
import { NavLink } from './NavLink';

export function Sidebar(){
  return(
    <Box as='aside' w='64' mr='8'>
      <Stack spacing='12' align='flex-start'>
        <NavSection
          title='GENERAL'
        >
          <NavLink icon={RiDashboardLine}>
            Dashboard
          </NavLink>
          <NavLink icon={RiContactsLine}>
            Users
          </NavLink>
        </NavSection>
        <NavSection
          title='AUTOMATION'
        >
          <NavLink icon={RiInputMethodLine}>
            Forms
          </NavLink>
          <NavLink icon={RiGitMergeLine}>
            Automação
          </NavLink>
        </NavSection>
      </Stack>
    </Box>
  )
}7