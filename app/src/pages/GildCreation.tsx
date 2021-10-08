import * as React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { DiscordGuildList, AddUsers, DaoInfo } from "../components";
import { useAppSelector, useAppDispatch } from "../store/hooks";

export const GildCreation = () => {
  const handleDAOCreation = () => {
    console.log("creating dao");
  };

  return (
    <Box sx={{ flexGrow: 2, p: 3, bgcolor: "black" }}>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ mb: 2 }}
      >
        <Typography variant="h4" sx={{ color: "grey.100" }}>
          Create DAO
        </Typography>
        <Box>
          <Button variant="contained" onClick={handleDAOCreation}>
            Create DAO
          </Button>
        </Box>
      </Stack>
      <Stack direction="row">
        <DaoInfo />
        <AddUsers />
      </Stack>
    </Box>
  );
};
