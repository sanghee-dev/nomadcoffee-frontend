import { DefaultTheme } from "styled-components";

const sharedProps = {
  blue: "rgb(0,149,246)",
  red: "rgb(240,73,86)",
  gray: "rgb(160,160,160)",
  grayLight: "rgb(220,220,220)",
  grayDark: "rgb(130,130,130)",
  facebookColor: "rgb(56,81,133)",

  maxWidth: "600px",

  border: "1px solid rgb(160,160,160)",
  borderLight: "1px solid rgb(220,220,220)",
  borderDark: "1px solid rgb(130,130,130)",
  borderRadius: "4px",

  margin: "6px",
  margin2: "12px",
  margin3: "18px",
  margin6: "36px",
  margin8: "48px",
  margin12: "72px",
  padding: "4px",
  padding2: "8px",
  padding8: "32px",

  opacity: "0.7",
  transition: "all 0.1s ease-in-out",

  h0: "40px",
  h1: "28px",
  h2: "14px",
  h3: "12px",
  fontWeight: "300",
  fontWeightHeavy: "600",
  lineHeight: "1.2",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
};

export const darkTheme: DefaultTheme = {
  ...sharedProps,
  backgroundColor: "black",
  color: "white",
};

export const lightTheme: DefaultTheme = {
  ...sharedProps,
  backgroundColor: "white",
  color: "black",
};
