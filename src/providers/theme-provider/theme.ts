import { type ThemeConfig, extendTheme } from '@chakra-ui/react';

import { colors, components, fontConfig } from './custom';

const config: ThemeConfig = {
  useSystemColorMode: false,
  cssVarPrefix: 'haven',
};

export const theme = extendTheme({
  config,
  colors,
  ...fontConfig,
  components,
  styles: {
    global: {
      'html, body': {
        WebkitTapHighlightColor: 'transparent',
      },
    },
  },
});
