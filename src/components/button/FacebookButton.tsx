import styled from "styled-components";

const FacebookButton = styled.button`
  height: 38px;
  border-radius: ${(props) => props.theme.borderRadius};
  border: none;
  cursor: pointer;
  margin-top: ${(props) => props.theme.margin2};
  padding: 0 ${(props) => props.theme.padding2};
  background-color: ${(props) => props.theme.blue};
  font-size: ${(props) => props.theme.h2};
  font-weight: ${(props) => props.theme.fontWeightHeavy};
  text-align: center;
  color: white;
  &:active {
    opacity: ${(props) => props.theme.opacity};
  }
  &:focus {
    border: none;
  }
  & h2 {
    display: inline;
    margin-left: ${(props) => props.theme.margin};
    cursor: pointer;
  }
`;

export default FacebookButton;
