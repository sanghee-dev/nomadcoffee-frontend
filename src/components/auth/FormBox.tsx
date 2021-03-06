import styled from "styled-components";

const FormBox = styled.form`
  width: 100%;
  max-width: ${(props) => props.theme.maxWidth};
  margin-left: auto;
  margin-right: auto;
  margin-bottom: ${(props) => props.theme.margin6};
  padding: ${(props) => props.theme.padding8};
  display: flex;
  flex-direction: column;
  background-color: white;
  border: ${(props) => props.theme.borderLight};
  border-radius: ${(props) => props.theme.borderRadius};
  & label {
    color: black;
  }
`;

export default FormBox;
