import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${(props) => props.theme.gray};
  font-size: 20px;
  font-weight: ${(props) => props.theme.fontWeightHeavy};
  margin: ${(props) => props.theme.margin3} 0;
  & div {
    width: calc(50% - 20px);
    height: 1px;
    border-top: ${(props) => props.theme.border};
    border-color: ${(props) => props.theme.gray};
  }
`;

export default function Divider() {
  return (
    <Container>
      <div></div>
      <h2>or</h2>
      <div></div>
    </Container>
  );
}
