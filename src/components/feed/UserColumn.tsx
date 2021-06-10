import styled from "styled-components";

const UserColumn = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  & div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  & h2 {
    margin-left: ${(props) => props.theme.margin2};
    font-weight: ${(props) => props.theme.fontWeightHeavy};
  }
`;

export default UserColumn;
