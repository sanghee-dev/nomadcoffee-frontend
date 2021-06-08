import styled from "styled-components";
import HeaderTitle from "components/HeaderTitle";

interface IProps {
  children: React.ReactNode;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
`;
const Content = styled.div`
  width: 100%;
  margin-top: 40px;
`;

export default function Layout({ children }: IProps) {
  return (
    <Container>
      <HeaderTitle />
      <Content>{children}</Content>
    </Container>
  );
}
