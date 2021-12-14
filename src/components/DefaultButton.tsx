import { Button, Icon } from '@chakra-ui/react';
import { IconType } from 'react-icons';

interface DefaultButtonProps {
  leftIconName?: IconType;
  rightIconName?: IconType;
  bkColor: string;
  children: string;
}

export function DefaultButton({ bkColor, leftIconName, rightIconName, children }: DefaultButtonProps) {
  return(
    <Button
      as='a'
      size='sm'
      fontSize='sm'
      color='whiteAlpha.900'
      leftIcon={leftIconName && <Icon as={leftIconName} fontSize='20'></Icon>}
      rightIcon={rightIconName && <Icon as={rightIconName} fontSize='20'></Icon>}
      bgColor={bkColor}
      
    >
      {children}
    </Button>
  );
}