import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { AppMenu, WalletWrapper } from "./components";
import { GildCreation, Dashboard } from "./pages";
import { Stack } from "@mui/material";

// 1. Authentication (discord + wallet)
// Skip discord, can't select guild
// 2. Creation Flow (select guild and authorize bot);
// 3. Dashboard of users

const TestComponent = (props: any) => {
  return (
    <div style={{ height: "400px", width: "400px", background: "red" }}>
      {" "}
      {props.value}{" "}
    </div>
  );
};

export const NavRoutes = () => {
  return (
    <Router>
      <WalletWrapper>
        <Stack
          sx={{
            bgcolor: "#18181B",
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
