import { Box, Button, Center, chakra, Flex, Image, Input, Text } from '@chakra-ui/react';
import hero from '@/assets/images/landing/home/hero/heroImage.png';
import Header from '../../Layout/Header';
import { ReactComponent as SearchIcon } from '@/assets/icons/search.svg';
import { DropDown } from './DropDown';
import { LocationContent, LocationHeader } from './LocationSearch';
import { locations } from '@/data/landing/home/location';
import { propertyType } from '@/data/landing/home/propertyType';
import { CustomSlider } from './CustomSlider';

export default function Hero() {
  return (
    <Box
      position={'relative'}
      background="linear-gradient(180deg, #EAF2FB 0%, #97BEEB 100%)"
      h={'130vh'}
      overflow={'hidden'}
    >
      <Box position={'relative'} zIndex={3}>
        <Header />
      </Box>
      <Box bottom={'0'} position={'absolute'} w={'100%'} left={0} zIndex={1}>
        <Image alt="hero-image" src={hero} />
      </Box>
      <Box mt={'4.25rem'} zIndex={3} position={'relative'} bottom={0}>
        <Text
          fontFamily={'Reckless Bold'}
          fontWeight={'bold'}
          textStyle={'h1'}
          textAlign={'center'}
          mb={'1.5rem'}
        >
          Find Your Home, Your Safe <chakra.span color={'primary.500'}>Haven.</chakra.span>
        </Text>
        <Text mx={'auto'} maxW={'60%'} textAlign={'center'} textStyle={'p2'} color={'gray.500'}>
          Haven is Nigeria's leading online real estate platform which eases the stress of finding
          properties online
        </Text>

        <Center mt={'3rem'}>
          <Box
            h={'12rem'}
            w={'48rem'}
            shadow={'64px 0px 86px 0px rgba(109, 164, 227, 0.22)'}
            bg={'white'}
            rounded={'20px'}
            border={' 1px solid var(--gray-100, #F3F4F6)'}
            p="2rem"
          >
            <Flex mb={'2.5rem'} alignItems={'center'}>
              <SearchIcon />
              <Input
                boxShadow={'none'}
                outline={'none'}
                _focus={{ boxShadow: 'none' }}
                border={'none !important'}
                placeholder="Search..."
              />
            </Flex>
            <Flex justifyContent={'space-between'}>
              <DropDown
                name="Location"
                header={<LocationHeader name="Location" isSearchable />}
                content={<LocationContent data={locations} />}
              />
              <DropDown
                name="Property type"
                header={<LocationHeader name="Property type" isSearchable={false} />}
                content={<LocationContent data={propertyType} />}
              />
              <DropDown
                name="Price range"
                header={<LocationHeader name="Price range" />}
                content={<CustomSlider />}
              />

              <Button rounded={'12px'}>Search</Button>
            </Flex>
          </Box>
        </Center>
      </Box>
    </Box>
  );
}
