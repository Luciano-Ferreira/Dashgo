import { Stack, Box, Text, HStack } from '@chakra-ui/react';
import { PaginationItem } from './PaginationItem';

interface PaginationProps {
  totalNumberRegisters: number;
  registersPerPage?: number;
  currentPage?: number;
  onPageChange: (page: number) => void;
}

const siblingsCount = 1;

function generatePagesArray(from: number, to: number) {
  return [...new Array(to - from)].map((_, index) => {
    return from + index + 1;
  })
    .filter(page => page > 0)
}

export function Pagination({
  totalNumberRegisters,
  registersPerPage= 10,
  currentPage = 1,
  onPageChange
}: PaginationProps) {

  const lastPage = Math.ceil(totalNumberRegisters / registersPerPage);

  const previousPages = currentPage > 1
    ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
    : []

  const nextPages = currentPage < lastPage
    ? generatePagesArray(currentPage, Math.min(currentPage + siblingsCount, lastPage))
    : []

  return (
    <Stack
      direction='row'
      spacing='6'
      mt='8'
      justify='space-between'
      align='center'
    >
      <HStack
        spacing='1'
      >
        <strong>
          {currentPage * registersPerPage - registersPerPage + 1}
        </strong>
          <Text>-</Text>
        <strong>
          {currentPage === lastPage ? totalNumberRegisters : registersPerPage * currentPage}
        </strong>
         <Text>de</Text>
        <strong>
          {totalNumberRegisters}
        </strong>
      </HStack>
      <Stack
        direction='row'
        spacing='2'
      >
        {currentPage > (1 + siblingsCount) && (
          <>
            <PaginationItem onPageChange={onPageChange} number={1} />
            { currentPage > (2 + siblingsCount) && 
            <Text color='gray.300' width='8' textAlign='center'>...</Text>
             }
          </>
        )}

        {previousPages.length > 0 && previousPages.map(page => {
          return <PaginationItem onPageChange={onPageChange} key={page} number={page} />
        })}
        <PaginationItem onPageChange={onPageChange} number={currentPage} isCurrent />

        {nextPages.length > 0 && nextPages.map(page => {
          return <PaginationItem onPageChange={onPageChange} key={page} number={page} />
        })}

        {(currentPage + siblingsCount) < lastPage && (
          <>
            {(currentPage + 1 + siblingsCount) < lastPage && 
            <Text color='gray.300' width='8' textAlign='center'>...</Text>
            }
            <PaginationItem onPageChange={onPageChange} number={lastPage} />
          </>
        )}
      </Stack>
    </Stack>
  )
}