import { useRef } from 'react';
import { Box, Center, Container, Flex, Image, Text } from '@chakra-ui/react';
import { GoArrowRight } from 'react-icons/go';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';
import { recommendedProperties } from '@/data/landing/home/recommended';
import { CiLocationOn } from 'react-icons/ci';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
export default function RecommendedProperties() {
  const prevButton = useRef(null);
  const nextButton = useRef(null);
  return (
    <Container maxW={'94%'}>
      <Flex mb={'4rem'} alignItems={'center'} justifyContent={'space-between'}>
        <Box>
          <Text mb={'0.5rem'} color={'gray.700'} textStyle={'h3'} as={'h1'}>
            Recommended properties{' '}
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
      <div className="flex justify-between items-center gap-2 overflow-x-scroll">
        <Swiper
          cssMode={true}
          // spaceBetween={30}
          slidesPerView={4}
          navigation={{
            prevEl: prevButton.current,
            nextEl: nextButton.current,
          }}
          onBeforeInit={(swiper: any) => {
            swiper!.params!.navigation!.prevEl! = prevButton.current;
            swiper!.params!.navigation!.nextEl = nextButton.current;
          }}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          mousewheel={true}
          keyboard={true}
          breakpoints={{
            100: {
              slidesPerView: 2,

              spaceBetween: 140,
            },
            400: {
              slidesPerView: 2,
              spaceBetween: 100,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 150,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            1440: {
              slidesPerView: 4,
              spaceBetween: 150,
            },
          }}
        >
          {recommendedProperties?.map((property) => (
            <SwiperSlide key={property.location}>
              <Box w={{ base: '14rem', md: '16rem', lg: '25rem' }}>
                <Box mb={'1.5rem'} h={'16rem'} overflow={'hidden'} rounded={'1rem'}>
                  <Image objectFit={'cover'} w={'100%'} h={'100%'} src={property.image} />
                </Box>
                <Center
                  rounded="200px"
                  border="1px solid #BF5E65"
                  bg="secondary.50"
                  backdropFilter="blur(8px)"
                  h={'1.5rem'}
                  w={'2.8rem'}
                  mb={'1rem'}
                >
                  <Text color={'#BF5E65'} fontSize={'14px'} textTransform={'capitalize'}>
                    {property.type?.toLowerCase()}
                  </Text>
                </Center>
                <Flex
                  fontWeight={'400'}
                  mb={'0.5rem'}
                  color={'gray.500'}
                  alignItems={'center'}
                  gap={'0.5rem'}
                >
                  <CiLocationOn />
                  <Text>{property.location}</Text>
                </Flex>
                <Text color={'gray.700'} mb={'1.5rem'} textStyle={'p3'}>
                  {property.description}
                </Text>
                <Text textStyle={'p3'} color={'primary.500'} fontWeight={'600'}>
                  {property.price}
                </Text>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <Flex gap={'3rem'} justifyContent={'flex-end'} mt="4rem">
        <div ref={prevButton}>
          <BsArrowLeft cursor={'pointer'} />
        </div>
        <div ref={nextButton}>
          <BsArrowRight cursor={'pointer'} />
        </div>
      </Flex>
    </Container>
  );
}
