import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";

interface IProps {
  url: string | undefined;
}

const Image = styled.img`
  max-width: 100%;
  background-position: center;
  border-radius: ${(props) => props.theme.borderRadius};
`;

function Picture({ url = "" }: IProps) {
  return url !== "" ? <Image src={url} /> : <FontAwesomeIcon icon={faUser} />;
}

export default Picture;
