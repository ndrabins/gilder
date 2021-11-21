import { Stack, Avatar, Typography, Tooltip } from "@mui/material";
import { useTheme } from "@mui/material/styles";

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
  const theme = useTheme();

  console.log("avatar", id, avatar);

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
            sx={{
              mr: 1,
              border: `2px solid ${theme.palette.background.paper}`,
            }}
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
