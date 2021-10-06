import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { RootState } from "../app/store";
import { useAppSelector } from "../app/hooks";
import { useAppDispatch } from "../app/hooks";
import { getGuildMembers } from "../slices/discordSlice";

export const DiscordGuildList = (props: any) => {
  const guilds = useAppSelector((state: RootState) => state.discord.guilds);
  const dispatch = useAppDispatch();

  const handleGuildSelect = (guildId: string) => {
    // currently doesn't authenticate.. pretty sure needs to be done from a Bot
    dispatch(getGuildMembers(guildId));
  };
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {guilds.map(
        (guild) =>
          guild.owner && (
            <ListItem onClick={() => handleGuildSelect(guild.id)}>
              <ListItemAvatar>
                <Avatar
                  src={`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png?size=128`}
                />
              </ListItemAvatar>
              <ListItemText sx={{ color: "white" }} primary={guild.name} />
            </ListItem>
          )
      )}
    </List>
  );
};
