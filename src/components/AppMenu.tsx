import React, { FC } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Wallet } from "./WalletButton";
import styled from "styled-components";
import logo from "../static/TransparentLogo.png";

export const AppMenu: FC = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ flexGrow: 1 }}>
            <LogoImage src={logo} />
          </Box>
          <Wallet />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

const LogoImage = styled.img`
  height: 48px;
  pointer-events: none;
  display: flex;
`;
