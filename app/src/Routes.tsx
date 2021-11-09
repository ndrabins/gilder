import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { AppMenu, WalletWrapper } from "./components";
import { GildCreation, Dashboard } from "./pages";
import Box from "@mui/material/Box";

// 1. Authentication (discord + wallet)
// Skip discord, can't select guild
// 2. Creation Flow (select guild and authorize bot);
// 3. Dashboard of users

export const NavRoutes = () => {
  return (
    <Router>
      <WalletWrapper>
        <Box
          sx={{
            bgcolor: "black",
            height: "100%",
            flexDirection: "column",
          }}
        >
          <AppMenu />
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/" element={<GildCreation />} />
          </Routes>
        </Box>
      </WalletWrapper>
    </Router>
  );
};
