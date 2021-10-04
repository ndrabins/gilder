import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import WorkIcon from "@mui/icons-material/Work";
import { useAppSelector } from "../app/hooks";
import { RootState } from "../app/store";

export const DiscordGuildList = (props: any) => {
  const guilds = useAppSelector((state: RootState) => state.discord.guilds);

  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {guilds.map((guild) => (
        <ListItem>
          <ListItemAvatar>
            <Avatar
              src={`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png?size=128`}
            />
          </ListItemAvatar>
          <ListItemText sx={{ color: "white" }} primary={guild.name} />
        </ListItem>
      ))}
    </List>
  );
};
