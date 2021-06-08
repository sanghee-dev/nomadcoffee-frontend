import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyles = createGlobalStyle`
  ${reset};
  * {
    box-sizing: border-box;
  }
  body {
    font-family: ${(props) => props.theme.fontFamily};
    background-color: ${(props) => props.theme.backgroundColor};
    overflow-y: scroll;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  button {
    border: none;
    outline: none;
    font-family: ${(props) => props.theme.fontFamily};
    cursor: pointer;
    background-color: transparent;
    border-radius: ${(props) => props.theme.borderRadius};
    text-align: center;
    &:active {
      opacity: ${(props) => props.theme.opacity};
    }
  }
  input {
    all: unset;
    height: 38px;
    border: ${(props) => props.theme.borderLight};
    border-radius: ${(props) => props.theme.borderRadius};
    background-color: white;
    margin: ${(props) => props.theme.margin} 0;
    padding: 0 ${(props) => props.theme.padding2};
    font-size: ${(props) => props.theme.h2};
    &::placeholder {
      color: rgb(160,160,160);
    }
    &:focus {
      border: ${(props) => props.theme.borderDark};
    }
  }
  h1 {
    font-size: ${(props) => props.theme.h1};
    font-family: "Abril Fatface", cursive;
  }
  h2 {
    font-size: ${(props) => props.theme.h2};
  }
  h3 {
    font-size: ${(props) => props.theme.h3};
  }
  h4 {
    font-size: ${(props) => props.theme.h4};
  }
  h1, h2, h3, h4 {
    line-height: ${(props) => props.theme.lineHeight};
  }
  p {
    line-height: ${(props) => props.theme.lineHeight};
    color:${(props) => props.theme.gray};
    text-align: center;
  }
`;
