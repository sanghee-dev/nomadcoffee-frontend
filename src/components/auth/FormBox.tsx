import styled from "styled-components";

const FormBox = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: white;
  margin: ${(props) => props.theme.margin6} 0;
  border: ${(props) => props.theme.borderLight};
  border-radius: ${(props) => props.theme.borderRadius};
  padding: ${(props) => props.theme.padding8};
  & label {
    color: black;
  }
`;

export default FormBox;
