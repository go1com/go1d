/**
 * interfaces
 */
export type FontFamily = "sansSerif" | "title" | "paragraph" | "ui" | "mono";

export type FontWeight = "normal" | "semibold" | "bold";

export type Gradients = "warmOverlay" | "lightWarmOverlay" | "darkWarmOverlay";
export type Opacities =
  | "feedback"
  | "highlight"
  | "emptyBackground"
  | "emptyIcon"
  | "pill"
  | "heroOverlayAccentNoImage"
  | "heroOverlayAccent"
  | "heroOverlayImage"
  | "disabled"
  | "modal";

export type Leading = "display" | "ui" | "paragraph";

export type Scale = "sm" | "md" | "lg";

export type Shadows =
  | "crisp"
  | "soft"
  | "strong"
  | "distant"
  | "inner"
  | "text"
  | "none";

export type MenuTransition = "closedMenu" | "openedMenu";

export type Statuses = "green" | "yellow" | "orange" | "red";

export type Tracking = "tightest" | "tight" | "normal";

export type Measure = "narrow" | "normal" | "wide" | "full";

export type Animation = "subtle" | "small";

// This creates a map type where all keys are required.
// e.g. MappedKeys<Scale, string> is a mapping of all things in Scale to a string
export type MappedKey<K extends string, T> = { [P in K]: T };

export interface ColorArguments {
  accent?: string;
  darkMode?: boolean;
}

export interface Colors {
  accent: string;
  contrast?: string | number;
  darkMode?: boolean;
  gradients: MappedKey<Gradients, string>;
  muted: string;
  statuses?: object;
  highlight: string;
  note: string;
  warning: string;
  danger: string;
  black?: string;
  faded?: string;
  success: string;
  default: string;
  subtle: string;
  divide: string;
  soft: string;
  faint: string;
  background: string;
}

export type ZIndex =
  | "dropdown"
  | "sticky"
  | "fixed"
  | "modalBackdrop"
  | "modal"
  | "popover"
  | "tooltip";

export interface ThemeType {
  scale: MappedKey<Scale, number[]>;
  family: MappedKey<FontFamily, string>;
  weight: MappedKey<FontWeight, number>;
  leading: MappedKey<Leading, number>;
  tracking: MappedKey<Tracking, string | 0>;
  measure: MappedKey<Measure, string>;
}

export interface Theme {
  colors: Colors;
  type: ThemeType;
  spacing: number[];
  shadows: MappedKey<Shadows, string>;
  transitions: MappedKey<"subtle", string>;
  breakpoints: MappedKey<Scale, string>;
  opacities: MappedKey<Opacities, number>;
  animation: MappedKey<Animation, number>;
  zIndex: MappedKey<ZIndex, number>;
}

export interface GenerateThemeInput {
  accent?: string;
  darkMode?: boolean;
  theme?: Theme;
}
