import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { AppMenu } from "./components";
import { GildCreation, Dashboard } from "./pages";
import Box from "@mui/material/Box";

// 1. Authentication (discord + wallet)
// Skip discord, can't select guild
// 2. Creation Flow (select guild and authorize bot);
// 3. Dashboard of users

export const Routes = () => {
  return (
    <Router>
      <Box
        sx={{
          bgcolor: "black",
          height: "100%",
          flexDirection: "column",
        }}
      >
        <AppMenu />
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
