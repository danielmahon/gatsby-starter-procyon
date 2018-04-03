import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '16px',
  baseLineHeight: 1.5,
  scaleRatio: 2,
  googleFonts: [
    {
      name: 'Open Sans',
      styles: ['400', '400i', '700', '700i'],
    },
    {
      name: 'Merriweather',
      styles: ['300', '400', '400i', '700', '700i'],
    },
  ],
  headerFontFamily: ['Merriweather', 'Georgia', 'serif'],
  bodyFontFamily: ['Open Sans', 'Arial', 'sans-serif'],
  // See http://kyleamathews.github.io/typography.js for the full list of options.
});

overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
  // body: {
  //   color: '#212121',
  // },
});

export default typography;
