import styled from "styled-components";

const NameColumn = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  & h1:first-child {
    margin-right: ${(props) => props.theme.margin2};
  }
  /* category tags */
  & h1:not(:first-child) {
    color: ${(props) => props.theme.gray};
    margin-right: ${(props) => props.theme.margin};
  }
`;

export default NameColumn;
