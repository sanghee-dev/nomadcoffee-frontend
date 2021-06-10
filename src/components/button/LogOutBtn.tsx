import styled from "styled-components";
import { useHistory } from "react-router";
import { logUserOut } from "apollo/apollo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const RADIUS = 18;
const INNERSPACE = 2;

const Container = styled.button`
  width: ${RADIUS + INNERSPACE * 2}px;
  height: ${RADIUS + INNERSPACE * 2}px;
  position: absolute;
  top: ${(props) => props.theme.margin3};
  right: ${(props) => props.theme.margin12};
  border: ${INNERSPACE}px solid ${(props) => props.theme.color};
  border-radius: ${RADIUS}px;
  background-color: white;
  overflow: hidden;
  display: flex;
  justify-content: center;
`;
const Image = styled.img`
  width: 100%;
  background-position: center;
  border-radius: ${RADIUS + INNERSPACE * 2}px;
`;

const LogOutBtn = () => {
  const history = useHistory();

  // bring loggedInUser avatarUrl
  let url = "";

  return (
    <Container onClick={() => logUserOut(history)}>
      {url !== "" ? (
        <Image src={url} />
      ) : (
        <FontAwesomeIcon icon={faUser} style={{ fontSize: 18, marginTop: 2 }} />
      )}
    </Container>
  );
};

export default LogOutBtn;
