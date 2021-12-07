import { Stack, Box } from '@chakra-ui/react';
import { Item } from './Item';

export function Pagination() {
  return (
    <Stack
      direction='row'
      spacing='6'
      mt='8'
      justify='space-between'
      align='center'
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <Stack
        direction='row'
        spacing='2'
      >
        
        <Item isCurrent number={1}/>
        <Item number={2}/>
        <Item number={3}/>
        <Item number={4}/>
        <Item number={5}/>
        <Item number={6}/>

      </Stack>
    </Stack>
  )
}