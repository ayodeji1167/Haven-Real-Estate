import { trendingPropertiesData } from '@/data/landing/home/trendingProperties';
import { Box, Center, Container, Flex, GridItem, Image, SimpleGrid, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { GoArrowRight } from 'react-icons/go';

export default function TrendingProperties() {
  const [hoverStates, setHoverStates] = useState(
    new Array(trendingPropertiesData.length).fill(false)
  );

  const handleMouseEnter = (index) => {
    const updatedStates = [...new Array(trendingPropertiesData.length).fill(false)];
    updatedStates[index] = true;
    setHoverStates(updatedStates);
  };

  const handleMouseLeave = (index) => {
    const updatedStates = [...new Array(trendingPropertiesData.length).fill(false)];
    updatedStates[index] = false;
    setHoverStates(updatedStates);
  };
  return (
    <Container maxW={'94%'} mb={'10rem'}>
      <Flex mb={'4rem'} alignItems={'center'} justifyContent={'space-between'}>
        <Box>
          <Text mb={'0.5rem'} color={'gray.700'} textStyle={'h3'} as={'h1'}>
            Trending property types
          </Text>
          <Text color={'gray.500'} textStyle={'p3'}>
            Browse the website’s database to choose a property that best fit your taste{' '}
          </Text>
        </Box>

        <Flex cursor={'pointer'} alignItems={'center'} gap={'0.5rem'}>
          <Text> See more</Text>
          <GoArrowRight />
        </Flex>
      </Flex>

      <SimpleGrid templateRows="repeat(2, 18rem)" gap={'1.5rem'} row={2} columns={4}>
        {trendingPropertiesData.map((item, index) => (
          <GridItem
            borderRadius={'1.5rem'}
            bg={'red'}
            overflow={'hidden'}
            key={item.name}
            colSpan={index === 0 ? 2 : 1}
            rowSpan={index === 0 ? 2 : 1}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
            position={'relative'}
          >
            <Box h={'100%'}>
              <Image objectFit={'cover'} w={'100%'} h={'100%'} src={item.image} />
              {!hoverStates[index] && (
                <Text
                  textStyle={index === 0 ? 'p2' : 'p4'}
                  position={'absolute'}
                  bottom={'1rem'}
                  left={'1rem'}
                  color={'white'}
                  zIndex={6}
                >
                  {item.name}
                </Text>
              )}
            </Box>
            {hoverStates[index] && (
              <Center
                flexDirection={'column'}
                top={0}
                left={0}
                zIndex={3}
                position={'absolute'}
                h={'100%'}
                w={'100%'}
                color={'white'}
                sx={{
                  '&::before': {
                    content: "''",
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background:
                      'linear-gradient(0deg, rgba(46, 125, 215, 0.60) 0%, rgba(46, 125, 215, 0.60) 100%), url(<path-to-image>)',
                    backgroundSize: 'cover',
                    opacity: 0.5,
                  },
                }}
              >
                <Text
                  position={'relative'}
                  zIndex={'5'}
                  opacity={1}
                  textStyle={'p3'}
                  fontWeight={'600'}
                  mb={'0.5rem'}
                >
                  {item.name}
                </Text>
                <Text cursor={'pointer'}>View more</Text>
              </Center>
            )}
          </GridItem>
        ))}
      </SimpleGrid>
    </Container>
  );
}
