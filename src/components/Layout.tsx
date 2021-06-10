import styled from "styled-components";
import HeaderTitle from "components/HeaderTitle";
import DarkModeBtn from "components/button/DarkModeBtn";
import LogOutBtn from "components/button/LogOutBtn";
import CreateBtn from "components/button/CreateBtn";

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
      <LogOutBtn />
      <DarkModeBtn />
      <CreateBtn /> {/* CreateBtn when logged in */}
      <Content>{children}</Content>
    </Container>
  );
}
