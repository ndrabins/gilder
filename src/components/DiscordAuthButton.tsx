import React, { FC } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useAppSelector } from "../app/hooks";
import { RootState } from "../app/store";
import { DiscordUserAvatar } from "../components";

// TODO: make this based off env vars
const discordAuthUrl =
  "https://discord.com/api/oauth2/authorize?client_id=894327916727504946&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2F&response_type=code&scope=guilds%20identify";
const discordStagingUrl = `https://discord.com/api/oauth2/authorize?client_id=894327916727504946&redirect_uri=https%3A%2F%2Fgilder.vercel.app%2F&response_type=code&scope=identify%20guilds`;

const testURL = `https://discord.com/api/oauth2/authorize?client_id=894327916727504946&redirect_uri=${process.env.REACT_APP_GILDER_URL}2F&response_type=code&scope=guilds%20identify`;

console.log("testing env discord url", testURL);

export const DiscordAuthButton: FC = () => {
  const user = useAppSelector((state: RootState) => state.discord.user);

  return (
    <Box sx={{ justifyContent: "center" }}>
      {user ? (
        <DiscordUserAvatar user={user} />
      ) : (
        <Button
          variant="contained"
          href={
            process.env.NODE_ENV === "development"
              ? discordAuthUrl
              : discordStagingUrl
          }
        >
          Connect Discord
        </Button>
      )}
    </Box>
  );
};
