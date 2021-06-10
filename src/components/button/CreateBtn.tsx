import styled from "styled-components";
import { Link } from "react-router-dom";
import routes from "router/routes";

const Container = styled.div`
  background-color: ${(props) => props.theme.backgroundColor};
  border-radius: 20px;
  padding: ${(props) => props.theme.padding};
  position: fixed;
  bottom: ${(props) => props.theme.margin2};
  right: ${(props) => props.theme.margin2};
  h1 {
    color: ${(props) => props.theme.color};
    font-size: 20px;
  }
`;

const CreateBtn = () => {
  return (
    <Link to={routes.add}>
      <Container>
        <h1>Create!</h1>
      </Container>
    </Link>
  );
};

export default CreateBtn;
