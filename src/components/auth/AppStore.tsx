import styled from "styled-components";
import AppStoreButton from "images/AppStoreButton.png";
import GooglePlayButton from "images/GooglePlayButton.png";

const Container = styled.div`
  margin-bottom: ${(props) => props.theme.margin6};
  & h2 {
    margin: 18px 0;
    text-align: center;
    color: ${(props) => props.theme.color};
  }
`;
const DownloadBox = styled.div`
  display: flex;
  justify-content: center;
`;
const Download = styled.div`
  cursor: pointer;
  &:not(:last-child) {
    margin-right: ${(props) => props.theme.margin};
  }
  :active {
    opacity: ${(props) => props.theme.opacity};
  }
`;

export default function AppStore() {
  return (
    <Container>
      <h2>Get the app.</h2>
      <DownloadBox>
        <Download>
          <img src={AppStoreButton} alt="AppStore" width="141" height="42" />
        </Download>
        <Download>
          <img
            src={GooglePlayButton}
            alt="GooglePlay"
            width="141"
            height="42"
          />
        </Download>
      </DownloadBox>
    </Container>
  );
}
