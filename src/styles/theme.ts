
import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools'

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
};

const styles = {
  global: (props) => ({
    body: {
      bg: mode('gray.900', 'gray.100')(props),
      color: mode('whiteAlpha.900', 'gray.800')(props)
    }
  })
}


export const theme = extendTheme({
  config,
  colors: {
    gray: {
      '900': '#181B23',
      '800': '#1F2029',
      '700': '#353646',
      '600': '#4B4D63',
      '500': '#616480',
      '400': '#797D9A',
      '300': '#9699B0',
      '200': '#B3B5C6',
      '100': '#D1D2DC',
      '50': '#EEEEF2',
    },

    purple: {
      '150': '#faf5fc',
    },

    brown: {
      '900': '#6B46C1',
      '500': '#805AD5',
      '200': '#9F7AEA'
    }
  },
  fonts: {
    heading: 'Roboto',
    body: 'Roboto'
  },
  styles
})