import React from "react";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";

interface DiscordUser {
  username: string;
  avatar: string;
  id: string;
  discriminator: string;
}

interface DiscordAvatarUserProps {
  username?: string;
  avatar?: string;
  discriminator?: string;
  id: string;
  showName?: boolean;
}

export const DiscordUserAvatar = ({
  id,
  avatar,
  username,
  discriminator,
  showName = true,
}: DiscordAvatarUserProps) => {
  return (
    <Stack
      sx={{ justifyContent: "center", alignItems: "center" }}
      direction="row"
    >
      {avatar ? (
        <Tooltip title={`${username}` || ""}>
          <Avatar
            alt={`${username}`}
            src={`https://cdn.discordapp.com/avatars/${id}/${avatar}.png?size=128%22`}
            sx={{ mr: 1, border: "2px solid gray" }}
          />
        </Tooltip>
      ) : (
        <Avatar sx={{ mr: 1, border: "2px solid gray" }}>T</Avatar>
      )}

      {showName && (
        <Typography sx={{ fontWeight: "bold" }}>{username}</Typography>
      )}
    </Stack>
  );
};
