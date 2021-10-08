import React, { FC } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useAppSelector } from "../store/hooks";
import { RootState } from "../store/store";
import { DiscordUserAvatar } from "../components";
import SvgIcon from "@mui/material/SvgIcon";
import DiscordLogo from "../static/Discord-Logo-White.svg";
import styled from "styled-components";

const discordAuthUrl = `https://discord.com/api/oauth2/authorize?client_id=894327916727504946&redirect_uri=${process.env.REACT_APP_GILDER_URL}&response_type=code&scope=guilds%20identify`;

export const DiscordAuthButton: FC = () => {
  const user = useAppSelector((state: RootState) => state.discord.user);

  return (
    <Box sx={{ justifyContent: "center" }}>
      {user ? (
        <DiscordUserAvatar user={user} />
      ) : (
        <Button variant="text" href={discordAuthUrl} color="secondary">
          <StyledIcon src={DiscordLogo} alt="discord icon" />
          Connect Discord
        </Button>
      )}
    </Box>
  );
};

const StyledIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 8px;
`;
