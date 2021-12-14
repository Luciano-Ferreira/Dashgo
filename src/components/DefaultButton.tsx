
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
      leftIcon={leftIconName && <Icon as={leftIconName} fontSize='16'></Icon>}
      rightIcon={rightIconName && <Icon as={rightIconName} fontSize='16'></Icon>}
      bgColor={bkColor}
      _hover={{ bgColor: bkColor, opacity: 0.6 }}
      _active={{ bgColor: bkColor, opacity: 0.4 }}
    >
      {children}
    </Button>
  );
}