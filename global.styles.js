// const variablesStyles = '@use "./src/scss/common/_vars.scss"';
const breakpointsStyles = '@use  "./src/scss/common/_breakpoints.scss"';
const mixinsStyles = '@use "./src/scss/common/_mixins.scss"';
const resetStyles = '@use "./src/scss/common/_reset.scss"';

const styles = [
  // variablesStyles,
  breakpointsStyles,
  //   colorsStyles,
  mixinsStyles,
  //   baseStyles,
  resetStyles,
];

export const globalStylesOptions = styles.reduce((acc, i) => acc + i + ';', '');
