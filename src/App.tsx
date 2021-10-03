import React from "react";
import logo from "./static/TransparentLogo.png";
import styled from "styled-components";

function App() {
  return (
    <Container className="App">
      <header className="App-header">
        <Logo src={logo} className="App-logo" alt="logo" />
      </header>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: black;
`;

const Logo = styled.img`
  height: 200px;
`;

export default App;
