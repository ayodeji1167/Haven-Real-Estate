import { Box, Flex, Input, Text } from '@chakra-ui/react';
import { ReactComponent as SearchIcon } from '@/assets/icons/search.svg';

export function LocationHeader({ isSearchable, name }: { isSearchable?: boolean; name?: string }) {
  return (
    <Box p={'1rem'}>
      <Flex mb={'2'} alignItems={'center'} justifyContent={'space-between'}>
        <Text textStyle={'p5'} color={'gray.600'} fontWeight={'600'}>
          {name}
        </Text>
        <Text fontSize={'12px'} color={'gray.400'} cursor={'pointer'}>
          Clear
        </Text>
      </Flex>
      {isSearchable && (
        <Flex pl={'3'} h={'2rem'} alignItems={'center'} rounded="4px" border="0.5px solid#E5E7EB">
          <SearchIcon width="12px" color="red" />
          <Input
            height={'auto'}
            fontSize={'10px'}
            ml={'-0.4rem'}
            mb={'-1'}
            boxShadow={'none'}
            outline={'none'}
            _focus={{ boxShadow: 'none' }}
            border={'none !important'}
            placeholder="Search..."
          />{' '}
        </Flex>
      )}
    </Box>
  );
}

export function LocationContent({ data = [] }: { data?: Array<string> }) {
  //   const isDesktop = useBreakpointValue({ base: false, lg: true });
  return (
    <Box
      h="10rem"
      overflowY={'scroll'}
      css={{
        '&::-webkit-scrollbar': {
          width: '6px',
        },
        '&::-webkit-scrollbar-track': {
          width: '6px',
        },
        '&::-webkit-scrollbar-thumb': {
          height: '10px !important',
          background: '#CACACA',
          borderRadius: '200px',
        },
      }}
    >
      <ul>
        {data?.map((item) => (
          <li
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0 0.7rem',
              height: '2rem',
            }}
          >
            <input id={item} type="checkbox" />
            <label style={{ fontSize: '12px', cursor: 'pointer' }} htmlFor={item}>
              {item}
            </label>
          </li>
        ))}
      </ul>
    </Box>
  );
}
