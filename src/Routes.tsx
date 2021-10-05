import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { AppMenu, GildCreation } from "./components";
import Box from "@mui/material/Box";
import { alpha } from "@mui/material/styles";

export const Routes = () => {
  return (
    <Router>
      <AppMenu />

      <Box
        sx={{
          justifyContent: "center",
          display: "flex",
          bgcolor: (theme) => alpha(theme.palette.primaryDark[900], 1),
          flex: 1,
          height: "100%",
        }}
      >
        <Switch>
          <Route path="/">
            <GildCreation />
          </Route>
          <Route path="/creation">
            <GildCreation />
          </Route>
          <Route path="/dashboard">
            <div> dashboard </div>
          </Route>
        </Switch>
      </Box>
    </Router>
  );
};
