import * as React from "react";
import { useTheme } from "@mui/material/styles";
import {
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Avatar,
  Box,
  IconButton,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import GroupIcon from "@mui/icons-material/Group";
import HowToVoteIcon from "@mui/icons-material/HowToVote";
import AddIcon from "@mui/icons-material/Add";
import TwitterIcon from "@mui/icons-material/Twitter";
import DiscordLogo from "../static/Discord-Logo-White.svg";
import styled from "styled-components";

export const Drawer = () => {
  const theme = useTheme();

  const [open, setOpen] = React.useState<boolean>(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const selectedNav = "Dashboard";

  return (
    <Stack
      sx={{ height: "100%", width: 300, bgcolor: "grey.800" }}
      flexDirection="row"
    >
      <Stack
        sx={{
          height: "100%",
          minWidth: 64,
          pt: 2,
          bgcolor: "grey.900",
        }}
        alignItems="center"
      >
        <Box sx={{ mb: 2 }}>
          <Avatar src="https://images.unsplash.com/photo-1636378163213-ded48bf09b05?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=928&q=80" />
        </Box>
        <IconButton sx={{ border: `1px dashed ${theme.palette.grey[500]}` }}>
          <AddIcon sx={{ color: `${theme.palette.grey[400]}` }} />
        </IconButton>
      </Stack>
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
          <ListItem sx={{ pt: 2, pb: 2, borderRadius: 2 }} button key={"Vault"}>
            <ListItemIcon>
              <AccountBalanceIcon />
            </ListItemIcon>
            <ListItemText primary={"Vault"} />
          </ListItem>
          <ListItem
            sx={{ pt: 2, pb: 2, borderRadius: 2 }}
            button
            key={"Members"}
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
          >
            <ListItemIcon>
              <HowToVoteIcon />
            </ListItemIcon>
            <ListItemText primary={"Proposals"} />
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
