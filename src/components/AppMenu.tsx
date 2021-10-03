import React, { FC, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Wallet } from "./WalletButton";
import styled from "styled-components";
import logo from "../static/TransparentLogo.png";
import { DiscordSwitcher, DiscordAuthButton } from "../components";

export const AppMenu: FC = () => {
  useEffect(() => {
    console.log(window.location.href);
  }, []);

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
          <Stack
            spacing={2}
            direction="row"
            sx={{ flexGrow: 1, alignItems: "center" }}
          >
            <LogoImage src={logo} />
            <DiscordAuthButton />
            <DiscordSwitcher />
          </Stack>
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
