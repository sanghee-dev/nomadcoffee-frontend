import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";

const WIDTH = 40;

interface IProps {
  url: string | undefined;
}

const Container = styled.button`
  width: ${WIDTH}px;
  height: ${WIDTH}px;
`;
const Image = styled.img`
  width: 100%;
  background-position: center;
  border-radius: ${WIDTH}px;
`;

function Avatar({ url = "" }: IProps) {
  return (
    <Container>
      {url !== "" ? <Image src={url} /> : <FontAwesomeIcon icon={faUser} />}
    </Container>
  );
}

export default Avatar;
