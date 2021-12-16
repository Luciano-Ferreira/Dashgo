import { Button, Icon, ButtonProps } from '@chakra-ui/react';
import { IconType } from 'react-icons';

interface DefaultButtonProps extends ButtonProps {
  leftIconName?: IconType;
  rightIconName?: IconType;
  bkColor: string;
  children: string;
}

export function DefaultButton({ bkColor, leftIconName, rightIconName, children, ...rest }: DefaultButtonProps) {
  return(
    <Button
      as='a'
      size='sm'
      fontSize='sm'
      color='whiteAlpha.900'
      leftIcon={leftIconName && <Icon as={leftIconName} fontSize='20'></Icon>}
      rightIcon={rightIconName && <Icon as={rightIconName} fontSize='20'></Icon>}
      bgColor={bkColor}
      _hover={{ bgColor: bkColor, opacity: 0.6 }}
      _active={{ bgColor: bkColor, opacity: 0.4 }}
      {...rest}
    >
      {children}
    </Button>
  );
}