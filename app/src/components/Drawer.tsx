import * as React from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Box,
  IconButton,
} from "@mui/material";
import { DaoSwitcher } from "./DaoSwitcher";
import HomeIcon from "@mui/icons-material/HomeRounded";
import AccountBalanceIcon from "@mui/icons-material/AccountBalanceRounded";
import GroupIcon from "@mui/icons-material/GroupRounded";
import HowToVoteIcon from "@mui/icons-material/HowToVoteRounded";
import ActivityIcon from "@mui/icons-material/FormatListBulletedRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import DiscordLogo from "../static/Discord-Logo-White.svg";
import styled from "styled-components";

export const Drawer = () => {
  const selectedNav = "Dashboard";

  return (
    <Stack
      sx={{
        width: 300,
        bgcolor: "grey.800",
        minWidth: "300px",
        overflowY: "auto",
        height: "100%",
        minHeight: 0,
      }}
      flexDirection="row"
    >
      <DaoSwitcher />
      <Stack
        sx={{ width: "100%", color: "grey.100", p: 1 }}
        justifyContent="space-between"
      >
        <List sx={{ pt: 0 }}>
          <ListItem
            sx={{ pt: 2, pb: 2, borderRadius: 2 }}
            button
            key={"Dashboard"}
            selected={selectedNav === "Dashboard"}
          >
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary={"Dashboard"} />
          </ListItem>
          <ListItem
            sx={{ pt: 2, pb: 2, borderRadius: 2 }}
            button
            key={"Vault"}
            disabled
          >
            <ListItemIcon>
              <AccountBalanceIcon />
            </ListItemIcon>
            <ListItemText primary={"Vault"} />
          </ListItem>
          <ListItem
            sx={{ pt: 2, pb: 2, borderRadius: 2 }}
            button
            key={"Members"}
            disabled
          >
            <ListItemIcon>
              <GroupIcon />
            </ListItemIcon>
            <ListItemText primary={"Members"} />
          </ListItem>
          <ListItem
            sx={{ pt: 2, pb: 2, borderRadius: 2 }}
            button
            key={"Proposals"}
            disabled
          >
            <ListItemIcon>
              <HowToVoteIcon />
            </ListItemIcon>
            <ListItemText primary={"Proposals"} />
          </ListItem>
          <ListItem
            sx={{ pt: 2, pb: 2, borderRadius: 2 }}
            button
            key={"Activity"}
            disabled
          >
            <ListItemIcon>
              <ActivityIcon />
            </ListItemIcon>
            <ListItemText primary={"Activity"} />
          </ListItem>
        </List>
        <Stack
          alignItems="center"
          justifyContent="center"
          sx={{ p: 2 }}
          flexDirection="row"
        >
          <Box sx={{ mr: 1, ml: 1 }}>
            <IconButton>
              <StyledIcon src={DiscordLogo} alt="discord icon" />
            </IconButton>
          </Box>
          <Box sx={{ mr: 1, ml: 1 }}>
            <IconButton>
              <TwitterIcon />
            </IconButton>
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
};

const StyledIcon = styled.img`
  width: 24px;
  height: 24px;
`;
