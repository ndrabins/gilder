import React, { FC } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useAppSelector } from "../app/hooks";
import { RootState } from "../app/store";
import { DiscordUserAvatar } from "../components";

// Gilder permission int: 1342180432

// TODO use env variable for discord auth url
const discordAuthUrl =
  "https://discord.com/api/oauth2/authorize?client_id=894327916727504946&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2F&response_type=code&scope=guilds%20identify";

export const DiscordAuthButton: FC = () => {
  const user = useAppSelector((state: RootState) => state.discord.user);

  console.log("user?", user);
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
