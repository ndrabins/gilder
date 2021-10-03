import React from "react";
import logo from "./static/TransparentLogo.png";
import styled from "styled-components";
import { Wallet } from "./components/WalletButton";

function App() {
  return (
    <Container className="App">
      <header className="App-header">
        <Logo src={logo} className="App-logo" alt="logo" />
        <WalletRow>
          <Wallet />
        </WalletRow>
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

const WalletRow = styled.div`
  display: flex;
  justify-content: center;
`;

export default App;
