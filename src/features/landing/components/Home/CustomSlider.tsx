import React, { useState } from 'react';

import {
  Box,
  Flex,
  Text,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
} from '@chakra-ui/react';
import { formattedValue } from '@/utils/format-number';

export function CustomSlider() {
  const [sliderValue, setSliderValue] = useState([1000, 500000]);
  function handleChange(e: any) {
    setSliderValue(e);
  }
  return (
    <Box px={'0.7rem'} h={'9rem'} pt={'2rem'}>
      <Flex mb={'2rem'} justifyContent={'space-between'}>
        <Text>{formattedValue(sliderValue[0])}</Text>
        <Text>{formattedValue(sliderValue[1])}</Text>
      </Flex>
      <RangeSlider
        aria-label={['min', 'max']}
        colorScheme="brand"
        value={sliderValue}
        min={1000}
        max={1000000}
        onChange={(e) => handleChange(e)}
      >
        {/* <RangeSliderMark className="slider-mark" value={sliderValue[0]}>
          <Text>
            {formattedValue(sliderValue[0])}
          </Text>
        </RangeSliderMark>
        <RangeSliderMark className="slider-mark" value={sliderValue[1]}>
          <Text>
          {formattedValue(sliderValue[1])}

          </Text>
        </RangeSliderMark> */}

        <RangeSliderTrack h={'0.4rem'} bg="#E5E7EB">
          <RangeSliderFilledTrack bg={'primary.500'} />
        </RangeSliderTrack>
        <RangeSliderThumb
          filter="drop-shadow(0px 2px 4px rgba(16, 24, 40, 0.06)) drop-shadow(0px 4px 8px rgba(16, 24, 40, 0.10))"
          _focus={{ boxShadow: 'none' }}
          boxSize={'20px'}
          index={0}
        />
        <RangeSliderThumb
          filter="drop-shadow(0px 2px 4px rgba(16, 24, 40, 0.06)) drop-shadow(0px 4px 8px rgba(16, 24, 40, 0.10))"
          _focus={{ boxShadow: 'none' }}
          boxSize={'20px'}
          index={1}
        />
      </RangeSlider>
    </Box>
  );
}
