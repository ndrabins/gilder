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
import { useTheme } from "@mui/material/styles";

const navItems = [
  {
    key: "Dashboard",
    isDisabled: false,
  },
  {
    key: "Vault",
    isDisabled: true,
  },
  {
    key: "Members",
    isDisabled: true,
  },
  {
    key: "Proposals",
    isDisabled: true,
  },
  {
    key: "Activity",
    isDisabled: true,
  },
];

export const Drawer = () => {
  const selectedNav = "Dashboard";
  const theme = useTheme();

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
          {navItems.map((item) => (
            <ListItem
              // @ts-ignore
              sx={{
                pt: 2,
                pb: 2,
                borderRadius: 2,
                background:
                  selectedNav === item.key &&
                  // @ts-ignore
                  `linear-gradient(${theme.palette.secondary[600]}, ${theme.palette.secondary[900]})`,
              }}
              // @ts-ignore
              button
              key={item.key}
              selected={selectedNav === item.key}
              disabled={item.isDisabled}
            >
              <ListItemIcon>
                {item.key === "Dashboard" && <HomeIcon />}
                {item.key === "Vault" && <AccountBalanceIcon />}
                {item.key === "Members" && <GroupIcon />}
                {item.key === "Proposals" && <HowToVoteIcon />}
                {item.key === "Activity" && <ActivityIcon />}
              </ListItemIcon>
              <ListItemText
                primaryTypographyProps={{
                  fontWeight: selectedNav === item.key ? "bold" : "medium",
                }}
                primary={item.key}
              />
            </ListItem>
          ))}
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
