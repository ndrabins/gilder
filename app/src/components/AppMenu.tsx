import React, { FC, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import { Wallet } from "./WalletButton";
import styled from "styled-components";
import logo from "../static/GilderLogo.svg";
import { DiscordAuthButton } from "../components";
import { useAppDispatch } from "../store/hooks";
import { authorizeDiscordUser } from "../slices/discordSlice";
import Divider from "@mui/material/Divider";

export const AppMenu: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    // from query string URL after auth with discord
    const code = window.location.href.split("?code=")[1];
    if (code) {
      dispatch(authorizeDiscordUser(code as string));
    }
  }, []);

  return (
    <Box
      sx={{
        flexGrow: 1,
      }}
    >
      <AppBar position="static">
        <Toolbar>
          <Stack
            spacing={2}
            direction="row"
            sx={{ flexGrow: 1, alignItems: "center" }}
          >
            <LogoImage src={logo} />
            <Divider orientation="vertical" flexItem />
            <DiscordAuthButton />
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
