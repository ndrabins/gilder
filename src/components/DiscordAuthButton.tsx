import React, { FC } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useAppSelector } from "../app/hooks";
import { RootState } from "../app/store";
import { DiscordUserAvatar } from "../components";

const discordAuthUrl = `https://discord.com/api/oauth2/authorize?client_id=894327916727504946&redirect_uri=${process.env.REACT_APP_GILDER_URL}&response_type=code&scope=guilds%20identify`;

console.log("testing env discord url", discordAuthUrl);

export const DiscordAuthButton: FC = () => {
  const user = useAppSelector((state: RootState) => state.discord.user);

  return (
    <Box sx={{ justifyContent: "center" }}>
      {user ? (
        <DiscordUserAvatar user={user} />
      ) : (
        <Button variant="contained" href={discordAuthUrl}>
          Connect Discord
        </Button>
      )}
    </Box>
  );
};
