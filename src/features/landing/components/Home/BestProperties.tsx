import { bestPropeties } from '@/data/landing/home/bestProperties';
import { Box, Container, Flex, GridItem, Image, SimpleGrid, Text } from '@chakra-ui/react';
import { GoArrowRight } from 'react-icons/go';

export default function BestProperties() {
  return (
    <Container maxW={'94%'} pt={'4rem'}>
      <Box mb={'4rem'}>
        <Text mb={'0.5rem'} color={'gray.700'} textStyle={'h3'} as={'h1'}>
          Best properties for sale
        </Text>
        <Text color={'gray.500'} textStyle={'p3'}>
          Browse the website’s database to choose a property that best fit your taste{' '}
        </Text>
      </Box>
      <SimpleGrid columns={3} columnGap={'3.5rem'}>
        {bestPropeties.map((item) => (
          <GridItem key={item.title}>
            <Box mb={'1.5rem'}>
              <Image w={'100%'} h={'100%'} objectFit={'contain'} src={item.image} />
            </Box>
            <Box mb={'1.5rem'}>
              <Text mb={'0.5rem'} color={'gray.700'} textStyle={'p2'}>
                {item.title}
              </Text>
              <Text color={'gray.500'}>{item.description}</Text>
            </Box>
            <Flex cursor={'pointer'} gap={'1rem'} alignItems={'center'}>
              <Text textStyle={'p3'} color={item.color}>
                {item.linkLabel}
              </Text>
              <GoArrowRight color={item.color} />
            </Flex>
          </GridItem>
        ))}
      </SimpleGrid>
    </Container>
  );
}
