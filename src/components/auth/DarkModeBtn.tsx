import styled from "styled-components";
import { UseIsDarkMode } from "context/contextFn";

const RADIUS = 18;
const INNERSPACE = 2;

const Container = styled.div`
  width: ${RADIUS * 2}px;
  height: ${RADIUS + INNERSPACE * 2}px;
  background-color: ${(props) => props.theme.color};
  border: ${INNERSPACE}px solid ${(props) => props.theme.color};
  border-radius: 100px;
  cursor: pointer;
  position: absolute;
  top: ${(props) => props.theme.margin3};
  right: ${(props) => props.theme.margin3};
`;
const Circle = styled.div`
  width: ${RADIUS}px;
  height: ${RADIUS}px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.backgroundColor};
  transition: ${(props) => props.theme.transition};
`;

const DarkModeBtn = () => {
  const { isDarkMode, setIsDarkMode } = UseIsDarkMode();

  return (
    <Container
      onClick={() => (isDarkMode ? setIsDarkMode(false) : setIsDarkMode(true))}
    >
      <Circle
        style={{
          marginLeft: isDarkMode ? RADIUS - INNERSPACE * 2 : 0,
        }}
      />
    </Container>
  );
};

export default DarkModeBtn;
