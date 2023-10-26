const fonts = {
  heading: `'Switzer',sans-serif`,
  body: `'Switzer',sans-serif`,
};

const fontSizes = {
  xs: '11px',
  sm: '13px',
  md: '15px',
  lg: '17px',
  xl: '22px',
  '2xl': '26px',
  '3xl': '30px',
  '4xl': '34px',
  '5xl': '38px',
  '6xl': '50px',
  '7xl': '70px',
};

const fontWeights = {
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
};

const textStyles = {
  h1: {
    fontSize: '64px',
    lineHeight: '72px',
    fontFamily: 'heading',
  },
  h2: {
    fontSize: '48px',
    fontFamily: 'heading',
    lineHeight: '56px',
  },
  h3: {
    fontSize: '40px',
    lineHeight: '48px',
    fontFamily: 'heading',
  },

  p1: {
    fontSize: '32px',
    lineHeight: '48px',
    fontFamily: 'body',
  },
  p2: {
    fontSize: '24px',
    fontFamily: 'heading',
    lineHeight: '32px',
  },
  p3: {
    fontSize: '20px',
    fontFamily: 'body',
    lineHeight: '28px',
  },
  p4: {
    fontSize: '16px',
    fontFamily: 'body',
    lineHeight: '24px',
  },
  p5: {
    fontSize: '14px',
    fontFamily: 'body',
    lineHeight: '18px',
  },
};

export const fontConfig = {
  fonts,
  fontSizes,
  fontWeights,
  textStyles,
};
