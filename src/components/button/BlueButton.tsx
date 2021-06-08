import styled from "styled-components";

const BlueButton = styled.input`
  text-align: center;
  color: white;
  border-radius: ${(props) => props.theme.borderRadius};
  border: none;
  font-size: ${(props) => props.theme.h2};
  font-weight: ${(props) => props.theme.fontWeightHeavy};
  background-color: ${(props) => props.theme.blue};
  cursor: pointer;
  &:active {
    opacity: ${(props) => props.theme.opacity};
  }
  &:focus {
    border: none;
  }
`;

export default BlueButton;
