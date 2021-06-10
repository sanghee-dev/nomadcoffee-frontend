import styled from "styled-components";

const RedButton = styled.input`
  text-align: center;
  color: white;
  border-radius: ${(props) => props.theme.borderRadius};
  border: none;
  font-size: ${(props) => props.theme.h2};
  font-weight: ${(props) => props.theme.fontWeightHeavy};
  background-color: ${(props) => props.theme.red};
  cursor: pointer;
  &:active {
    opacity: ${(props) => props.theme.opacity};
  }
  &:focus {
    border: none;
  }
`;

export default RedButton;
