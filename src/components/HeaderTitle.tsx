import styled from "styled-components";
import { Link } from "react-router-dom";

const Title = styled.h1`
  text-align: center;
  color: ${(props) => props.theme.color};
  font-size: ${(props) => props.theme.h0}; ;
`;

export default function HeaderTitle() {
  return (
    <Link to="/">
      <Title>AndEnd</Title>
    </Link>
  );
}
