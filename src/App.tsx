import React from "react";
import logo from "./static/TransparentLogo.png";
import styled from "styled-components";
import { AppMenu } from "./components";

function App() {
  return (
    <Container className="App">
      <AppMenu />
      <ContentContainer>
        <Logo src={logo} className="App-logo" alt="logo" />
      </ContentContainer>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  display: flex;
  background: black;
  flex-direction: column;
`;

const ContentContainer = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  height: 100%;
  flex-direction: column;
`;

const Logo = styled.img`
  height: 160px;
`;

export default App;
