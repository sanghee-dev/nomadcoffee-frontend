import styled from "styled-components";

const LabelButton = styled.button`
  text-align: center;
  color: ${(props) => props.theme.color};
  border-radius: ${(props) => props.theme.borderRadius};
  border: none;
  font-size: ${(props) => props.theme.h2};
  & label {
    margin-right: ${(props) => props.theme.margin};
  }
  & span {
    font-weight: ${(props) => props.theme.fontWeightHeavy};
    color: ${(props) => props.theme.blue};
    cursor: pointer;
  }
`;

export default LabelButton;
