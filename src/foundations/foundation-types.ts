/**
 * interfaces
 */
import { Emotion } from "create-emotion";

export type FontFamily = "sansSerif" | "title" | "paragraph" | "ui" | "mono";

export type FontWeight = "light" | "normal" | "semibold" | "bold";

export type Gradients = "warmOverlay" | "lightWarmOverlay" | "darkWarmOverlay";
export type Opacities =
  | "feedback"
  | "highlight"
  | "emptyBackground"
  | "IconEmpty"
  | "pill"
  | "heroOverlayAccentNoImage"
  | "heroOverlayAccent"
  | "heroOverlayImage"
  | "disabled"
  | "modal"
  | "none";

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

export type Transitions = "quick" | "subtle" | "small" | "none";

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
  mode?: string;
}

export interface Colors {
  accent: string;
  contrast?: string | number;
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
  transparent: string;
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
  transitions: MappedKey<Transitions, string>;
  breakpoints: MappedKey<Scale, string>;
  mq: any;
  hoverStyle: any;
  opacities: MappedKey<Opacities, number>;
  animation: MappedKey<Animation, number>;
  zIndex: MappedKey<ZIndex, number>;
  mode?: string;
  logo?: string;
  emotion: Emotion;
}

export interface GenerateThemeInput {
  accent?: string;
  mode?: string;
  theme?: Theme;
  logo?: string;
  emotion?: Emotion;
}
