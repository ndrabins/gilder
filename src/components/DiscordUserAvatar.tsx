import React from "react";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

interface DiscordUser {
  username: string;
  avatar: string;
  id: string;
  discriminator: string;
}

interface DiscordAvatarUserProps {
  user: DiscordUser;
}

export const DiscordUserAvatar = ({ user }: DiscordAvatarUserProps) => {
  return (
    <Stack
      sx={{ justifyContent: "center", alignItems: "center" }}
      direction="row"
    >
      <Avatar
        alt={`${user.username}`}
        src={`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png?size=128%22`}
        sx={{ mr: 1 }}
      />

      <Typography>
        {user.username}#{user.discriminator}
      </Typography>
    </Stack>
  );
};
