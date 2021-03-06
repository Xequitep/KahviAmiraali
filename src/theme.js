const pixels = {
  xs: '4px',
  s: '8px',
  m: '16px',
  l: '24px',
  xl: '32px',
}

export const maxWidth = '64em'

export const breakpoints = {
  desktop: maxWidth,
  laptop: '48em',
  tablet: '32em',
}

export default {
  color: {
    black: '#303030', //Blackish
    netural30: '#4d4d4d',
    neutral55: '#8c8c8c',
    neutral75: '#bfbfbf',
    neutral90: '#e6e6e6',
    white: 'white', //White
    background: '#ffffff',
    primary: '#71685e', //Brown
    link: '#0645AD',
    link_dark: '#0B0080',
    primary_dark: '#4e4a4a', //Dark brown
    secondary: '#c5e0e0', //Light blue
    success: '#b0cfb3', // Green
    danger: '#dab4b4', // Red
  },
  size: {
    xxs: '0.512em',
    xs: '0.64em',
    s: '0.8em',
    m: '1em',
    l: '1.25em',
    xl: '1.563em',
  },
  pixels,
  space: {
    xs: pixels.xs,
    s: pixels.s,
    m: pixels.m,
    l: pixels.l,
    xl: pixels.xl,
    stack: {
      xs: `${pixels.xs} 0`,
      s: `${pixels.s} 0`,
      m: `${pixels.m} 0`,
      l: `${pixels.l} 0`,
      xl: `${pixels.xl} 0`,
    },
    squish: {
      s: `${pixels.m} ${pixels.s}`,
      m: `${pixels.l} ${pixels.m}`,
      l: `${pixels.xl} ${pixels.l}`,
    },
    stretch: {
      s: `${pixels.s} ${pixels.m}`,
      m: `${pixels.m} ${pixels.l}`,
      l: `${pixels.l} ${pixels.xl}`,
    },
    inline: {
      xs: `0 ${pixels.xs}`,
      s: `0 ${pixels.s}`,
      m: `0 ${pixels.m}`,
      l: `0 ${pixels.l}`,
      xl: `0 ${pixels.xl}`,
    },
  },
}
