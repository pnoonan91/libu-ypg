import { em, rem } from "polished";

//
// --- Media Queries ---

// Breakpoints
const bpSizes = {
  small: 640,
  medium: 864,
  large: 1024,
  xlarge: 1280
};

export const breakpoints = [
  em(bpSizes.small),
  em(bpSizes.medium),
  em(bpSizes.large),
  em(bpSizes.xlarge)
];

export const breakpointsEnd = [
  em(bpSizes.small - 1),
  em(bpSizes.medium - 1),
  em(bpSizes.large - 1),
  em(bpSizes.xlarge - 1)
];

export const breakpointMappings = {
  xs: `@media screen and (max-width: ${breakpointsEnd[0]})`,
  sm_up: `@media screen and (min-width: ${breakpoints[0]})`,
  sm: `@media screen and (min-width: ${breakpoints[0]}) and (max-width: ${
    breakpointsEnd[1]
  })`,
  sm_down: `@media screen and (max-width: ${breakpointsEnd[1]})`,
  md_up: `@media screen and (min-width: ${breakpoints[1]})`,
  md: `@media screen and (min-width: ${breakpoints[1]}) and (max-width: ${
    breakpointsEnd[2]
  })`,
  md_down: `@media screen and (max-width: ${breakpointsEnd[2]})`,
  lg: `@media screen and (min-width: ${breakpoints[2]})`,
  xlg: `@media screen and (min-width: ${breakpoints[3]})`,
  print: `@media print`,

  /**
   * This is a **hack** for targeting IE10+. This is not a substitute for writing cross-browser
   * CSS but often times there are bugs (namely Flexbox ones) that are easier to address in
   * isolation
   * See https://stackoverflow.com/questions/28417056/how-to-target-only-ie-any-version-within-a-stylesheet/35486073
   */
  ieOnlyHack: `@media all and (-ms-high-contrast: none), (-ms-high-contrast:active)`
};

// Typographic Scale (numbers are converted to px values)
export const fontSizes = [12, 14, 16, 18, 22, 26, 30, 36, 44];

// Spacing Scale (used for margin and padding)
export const space = [0, 4, 8, 12, 16, 24, 32, 48, 64, 128, 256, 512];

// Element Sizes
export const elementSizes = {
  siteWrap: rem("1280px"),
  contentWrap: rem("850px")
};
