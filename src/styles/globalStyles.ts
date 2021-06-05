import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyles = createGlobalStyle`
  ${reset};
  * {
    box-sizing: border-box;
  }
  body{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.blue};
    overflow-y: scroll;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  button {
    border: none;
    outline: none;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    cursor: pointer;
    background-color: transparent;
    border-radius: 4px;
    text-align: center;
    &:active {
      opacity: ${(props) => props.theme.opacity};
    }
  }
  input {
    all:unset;
    border: ${(props) => props.theme.border};
    background-color: ${(props) => props.theme.backgroundColor};
    border-radius: 2px;
    height: 38px;
    &::placeholder{
      color: rgb(160,160,160);
    }
    &:focus {
      border: ${(props) => props.theme.border};
    }
  }
  h1 {
    font-size: ${(props) => props.theme.h1};
    font-weight: 300;
    line-height: ${(props) => props.theme.lineHeight};
  }
  h2 {
    font-size: ${(props) => props.theme.h2};
    line-height: ${(props) => props.theme.lineHeight};
  }
  h3 {
    font-size: ${(props) => props.theme.h3};
    line-height: ${(props) => props.theme.lineHeight};
  }
  h4 {
    font-size: ${(props) => props.theme.h4};
    line-height: ${(props) => props.theme.lineHeight};
  }
`;
