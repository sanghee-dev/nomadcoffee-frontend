import styled from "styled-components";

const TextButton = styled.input`
  text-align: center;
  color: ${(props) => props.theme.color};
  border-radius: ${(props) => props.theme.borderRadius};
  border: none;
  font-size: ${(props) => props.theme.h2};
  font-weight: ${(props) => props.theme.fontWeightHeavy};
  cursor: pointer;
  &:active {
    opacity: ${(props) => props.theme.opacity};
  }
  &:focus {
    border: none;
  }
`;

export default TextButton;
