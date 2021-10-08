import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { AppMenu } from "./components";
import { GildCreation, Dashboard } from "./pages";
import Box from "@mui/material/Box";
import { alpha } from "@mui/material/styles";

// 1. Authentication (discord + wallet)
// Skip discord, can't select guild
// 2. Creation Flow (select guild and authorize bot);
// 3. Dashboard of users

export const Routes = () => {
  return (
    <Router>
      <AppMenu />

      <Box
        sx={{
          justifyContent: "center",
          display: "flex",
          bgcolor: (theme) => alpha(theme.palette.grey[800], 1),
          flex: 1,
          height: "100%",
        }}
      >
        <Switch>
          <Route exact path="/dashboard/:id">
            <Dashboard />
          </Route>
          <Route path="/">
            <GildCreation />
          </Route>
        </Switch>
      </Box>
    </Router>
  );
};
