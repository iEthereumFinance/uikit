import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#dc00ff",
  primaryBright: "#ffb948",
  primaryDark: "#dc00ff",
  secondary: "#ffb948",
  success: "#31D0AA",
  warning: "#FFB237",
  };
  
  export const brandColors = {
    binance: "#F0B90B",
  };
  
  export const lightColors: Colors = {
    ...baseColors,
    ...brandColors,
    primary: "#ff4e91",
    secondary: "#ff4e91",
    background: "#FAF9FA",
    backgroundDisabled: "#E9EAEB",
    contrast: "#191326",
    invertedContrast: "#FFFFFF",
    input: "#eeeaf4",
    // inputBorder: "#cccccc",
    inputSecondary: "#cccccc",
    tertiary: "#EFF4F5",
    text: "#b64c61",
    textDisabled: "#BDC2C4",
    textSubtle: "#ff0069",
    activeButton: "#397f49",
    borderColor: "#E9EAEB",
    card: "#FFFFFF",
    nav: "#FFFFFF",
    gradients: {
      bubblegum: "linear-gradient(139.73deg, #fde6eb 0%, #fff8fa 100%)",
    },
  };
  
  export const darkColors: Colors = {
    ...baseColors,
    ...brandColors,
    primary: "#FFC737",
    secondary: "#FFC737", //  
    background: "#2A2829", //
    backgroundDisabled: "#424037", //
    contrast: "#FFFFFF",
    invertedContrast: "#262513",
    input: "#483F5A",
    inputSecondary: "#8d8857",
    primaryDark: "#8f8104",
    tertiary: "#28444A", //
    text: "#fcfae2", //
    textDisabled: "#717161", //
    textSubtle: "#FFC737", //
    activeButton: "#397f49",
    borderColor: "#61634b",
    card: "#171813", //
    nav: "#171813", //
    gradients: {
      bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)", //
    },
  };