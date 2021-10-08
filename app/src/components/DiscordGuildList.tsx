import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { RootState } from "../store/store";
import { useAppSelector } from "../store/hooks";
import { useAppDispatch } from "../store/hooks";
import { getGuildMembers } from "../slices/discordSlice";
import Link from "@mui/material/Link";

const botLink =
  "https://discord.com/api/oauth2/authorize?client_id=894327916727504946&permissions=281680&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2F&scope=bot";

export const DiscordGuildList = (props: any) => {
  const guilds = useAppSelector((state: RootState) => state.discord.guilds);
  const dispatch = useAppDispatch();

  const handleGuildSelect = (guildId: string) => {
    // currently doesn't authenticate.. pretty sure needs to be done from a Bot
    // dispatch(getGuildMembers(guildId));
  };
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {guilds.map(
        (guild) =>
          guild.owner && (
            <Link
              href={`${botLink}&guild_id=${guild.id}&disable_guild_select=true`}
              target="_blank"
              underline="none"
            >
              <ListItem onClick={() => handleGuildSelect(guild.id)}>
                <ListItemAvatar>
                  <Avatar
                    src={`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png?size=128`}
                  />
                </ListItemAvatar>
                <ListItemText sx={{ color: "white" }} primary={guild.name} />
              </ListItem>
            </Link>
          )
      )}
    </List>
  );
};
