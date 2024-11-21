import { PixelRatio } from "react-native";
const Fontscale = PixelRatio.getFontScale();
export const SIZES = {
  small: 9 * Fontscale,
  medium: 14 * Fontscale,
  large: 18 * Fontscale,
  xLarge: 24 * Fontscale,
};
export const COLORS = {
  bg: "#111827",
  cardBg: "#1F2937",
  second: "#4F46E5",
  white: "#FFF",
  black: "#000",
  gray: "#ddd",
};
export const FONTS = {
  regular: "Responsible",
  medium: "RobotoCondensed",
  bold: "SourGummy",
};
