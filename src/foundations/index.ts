import * as Color from "color";
import facepaint from "../utils/facepaint";
import {
  Animation,
  ColorArguments,
  Colors,
  GenerateThemeInput,
  Gradients,
  MappedKey,
  Opacities,
  Shadows,
  Theme,
  ThemeType,
  ZIndex,
} from "./foundation-types";

/**
 * Color utilities
 */

export const opacify = (hexColor, opaque = 1) =>
  Color(hexColor)
    .fade(1 - opaque)
    .string();

export const darken = (hexColor, ration = 1) =>
  Color(hexColor)
    .darken(ration)
    .rgb()
    .string();

export const tint = (hexColor, ration = 1) =>
  Color(hexColor)
    .lighten(1 - ration)
    .rgb()
    .string();

export const mix = mixColor => (baseColor, weight = 0.5) =>
  Color(baseColor)
    .mix(Color(mixColor), weight)
    .hex();

export const isDark = color => Color(color).isDark();

export const getContrastColor = color =>
  isDark(color) ? "lightest" : "darkest";

/**
 * Color
 */

export const opacities: MappedKey<Opacities, number> = {
  feedback: 0.1,
  highlight: 0.15,
  emptyBackground: 0.16,
  emptyIcon: 0.24,
  pill: 0.3,
  heroOverlayAccentNoImage: 0.3,
  heroOverlayAccent: 0.6,
  heroOverlayImage: 0.8,
  disabled: 0.5,
  modal: 0.7,
  none: 1,
};

const brandAccent = "#31B8DA";

const baseGreys = {
  grey0: "#ffffff",
  grey1: "#fcfcfc",
  grey2: "#f9f9f9",
  grey3: "#e9e9e9",
  grey4: "#d9d9d9",
  grey5: "#cdcdcd",
  grey6: "#9b9b9b",
  grey7: "#797979",
  grey8: "#383838",
  grey9: "#1d1d1d",
};

export const generateColors = ({
  accent = brandAccent,
  mode = "light",
}: ColorArguments = {}): Colors => {
  const accentMix = mix(accent);

  const accentGreys = {
    light: {
      contrast: accentMix(baseGreys.grey9, 0.05),
      default: accentMix(baseGreys.grey8, 0.15),
      subtle: accentMix(baseGreys.grey7, 0.2),
      muted: accentMix(baseGreys.grey5, 0.25),
      divide: accentMix(baseGreys.grey2, 0.07),
      faded: accentMix(baseGreys.grey3, 0.15),
      soft: accentMix(baseGreys.grey2, 0.07),
      faint: accentMix(baseGreys.grey1, 0.02),
      background: baseGreys.grey0,
      transparent: "transparent",
    },
    dark: {
      contrast: baseGreys.grey0,
      default: accentMix(baseGreys.grey4, 0.15),
      subtle: accentMix(baseGreys.grey6, 0.25),
      muted: accentMix(baseGreys.grey8, 0.35),
      divide: accentMix(baseGreys.grey9, 0.17),
      faded: accentMix(baseGreys.grey8, 0.14),
      soft: accentMix(baseGreys.grey9, 0.17),
      faint: accentMix(baseGreys.grey9, 0.11),
      background: accentMix(baseGreys.grey9, 0.05),
      transparent: "transparent",
    },
  };

  const themedGreys = accentGreys[mode];

  const statusColors = {
    highlight: opacify(accent, opacities.highlight),
    success: "#51C133",
    note: "#FFDE00",
    warning: "#F6941D",
    danger: "#DA3131",
  };

  const gradients: MappedKey<Gradients, string> = {
    warmOverlay:
      "linear-gradient(179.89deg, rgba(255, 255, 239, 0.05) -14.1%, rgba(255, 255, 191, 1e-05) 99.8%)",
    lightWarmOverlay:
      "linear-gradient(0deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)), linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 100%)",
    darkWarmOverlay:
      "linear-gradient(0deg, rgba(18, 31, 34, 0.05), rgba(18, 31, 34, 0.05)), linear-gradient(179.89deg, rgba(255, 255, 239, 0.05) -14.1%, rgba(255, 255, 191, 1e-05) 99.8%)",
  };

  return {
    accent,
    ...themedGreys,
    ...statusColors,
    gradients,
  };
};

export const colors: Colors = generateColors();

/**
 * z-index values
 */

export const zIndex: MappedKey<ZIndex, number> = {
  sticky: 1020,
  fixed: 1030,
  dropdown: 1051,
  modalBackdrop: 1040,
  modal: 1050,
  popover: 1060,
  tooltip: 1070,
};

/**
 * Shadows
 */

export const shadows: MappedKey<Shadows, string> = {
  crisp: `0px 1px 2px ${opacify(colors.contrast, 0.1)}, 1px 1px 35px ${opacify(
    colors.contrast,
    0.03
  )}`,
  soft: `0px 1px 3px ${opacify(colors.contrast, 0.06)}, 0px 4px 6px ${opacify(
    colors.contrast,
    0.08
  )}`,
  strong: `0px 3px 6px ${opacify(
    colors.contrast,
    0.08
  )}, 0px 7px 14px ${opacify(colors.contrast, 0.1)}`,
  distant: `1px 3px 9px ${opacify(
    colors.contrast,
    0.08
  )}, 2px 20px 38px ${opacify(colors.contrast, 0.1)}`,
  inner: `inset 1px 1px 5px ${opacify(colors.contrast, 0.1)}`,
  text: `1px 1px 1px ${opacify(colors.contrast, 0.07)}`,
  none: `none`,
};

/**
 * Type
 */

const defaultFontFamily: string =
  "-apple-system,BlinkMacSystemFont,helvetica,'helvetica neue',ubuntu,roboto,noto,'segoe ui',arial,sans-serif";
const sansSerif: string = "'Muli', " + defaultFontFamily;
const monospace: string = "'Source Code Pro', 'Menlo', monospace";

export const type: ThemeType = {
  scale: {
    sm: [0, 14, 16, 18, 21, 24, 28, 32, 37, 43, 49],
    md: [0, 13, 16, 19, 23, 28, 33, 40, 48, 57, 69],
    lg: [0, 13, 16, 20, 25, 31, 39, 49, 61, 76, 95],
  },
  family: {
    sansSerif,
    title: sansSerif,
    paragraph: sansSerif,
    ui: sansSerif,
    mono: monospace,
  },
  weight: {
    light: 300,
    normal: 400,
    semibold: 600,
    bold: 800,
  },
  leading: {
    display: 1.2,
    ui: 1.35,
    paragraph: 1.5,
  },
  tracking: {
    tightest: "-0.03em",
    tight: "-0.01em",
    normal: 0,
  },
  measure: {
    narrow: "600px",
    normal: "900px",
    wide: "1200px",
    full: "100%",
  },
};

/**
 * Spacing
 */

export const spacing = [0, 2, 4, 8, 16, 24, 32, 48, 64, 128, 256];

/**
 * Transitions
 */

const animation: MappedKey<Animation, number> = {
  subtle: 300,
  small: 300,
};

const transitions = {
  none: "all 0ms ease 0ms",
  quick: "all 150ms ease-in-out",
  subtle: `all ${animation.subtle}ms ease`,
  small: `all ${animation.small}ms ease`,
};

/**
 * * Hover Style for Slats and Cards
 */

const hoverStyle = {
  "&:hover, &:focus": {
    boxShadow: shadows.strong,
    cursor: "pointer",
    transform: "translateY(-1px)",
  },
  "&:active": {
    boxShadow: shadows.crisp,
    transform: "translateY(1px)",
  },
};

/**
 * Breakpoints
 */

export const breakpoints = {
  sm: "@media(max-width: 767px)",
  md: "@media(min-width: 768px)",
  lg: "@media(min-width: 1100px)",
};

export const generateTheme = ({
  accent = brandAccent,
  mode,
  theme,
  logo,
}: GenerateThemeInput = {}): Theme => ({
  colors: generateColors({ accent, mode }),
  type,
  spacing,
  shadows,
  hoverStyle,
  transitions,
  breakpoints,
  mq: facepaint(Object.keys(breakpoints).map(k => breakpoints[k])),
  opacities,
  animation,
  zIndex,
  mode,
  logo,
  ...theme,
});

const foundations: Theme = generateTheme();

export default foundations;
