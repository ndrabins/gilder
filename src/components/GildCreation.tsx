import * as React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { DiscordGuildList } from ".";

export const GildCreation = () => {
  return (
    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Typography variant="h2" sx={{ color: "grey.100" }}>
        Create Gild (DAO)
      </Typography>
      <Typography variant="h6" sx={{ color: "grey.100" }}>
        Description
      </Typography>
      <Stack direction="row">
        <Card sx={{ minWidth: 275, flexGrow: 2, mr: 2, height: "100%" }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              DAO Data
              <DiscordGuildList />
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ minWidth: 275, flexGrow: 1 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Users
            </Typography>
          </CardContent>
        </Card>
      </Stack>
    </Box>
  );
};
