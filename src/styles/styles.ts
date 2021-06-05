import { DefaultTheme } from "styled-components";

const sharedProps = {
  blue: "blue",
  facebookColor: "rgb(56,81,133)",
  errorColor: "rgb(240,73,86)",

  borderRadius: "4px",
  opacity: "0.7",
  transition: "all 0.1s ease-in-out",

  h1: "38px",
  h2: "14px",
  h3: "12px",
  h4: "10px",
  lineHeight: "1.2",
};

export const darkTheme: DefaultTheme = {
  ...sharedProps,
  backgroundColor: "black",
  border: "1px solid rblack",
};

export const lightTheme: DefaultTheme = {
  ...sharedProps,
  backgroundColor: "white",
  border: "1px solid white",
};
