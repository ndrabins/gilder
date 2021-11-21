import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { AppMenu, WalletWrapper } from "./components";
import { Dashboard } from "./pages";
import { Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";

// 1. Authentication (discord + wallet)
// Skip discord, can't select guild
// 2. Creation Flow (select guild and authorize bot);
// 3. Dashboard of users

export const NavRoutes = () => {
  const theme = useTheme();

  const gradient = ` linear-gradient(90deg, ${theme.palette.grey[700]}, ${theme.palette.grey[800]})`;

  return (
    <Router>
      <WalletWrapper>
        <Stack
          sx={{
            background: gradient,
            height: "100%",
            flexDirection: "column",
            maxHeight: "100vh",
          }}
        >
          <AppMenu />
          <Routes>
            <Route path="/" element={<Dashboard />}></Route>
          </Routes>
        </Stack>
      </WalletWrapper>
    </Router>
  );
};
