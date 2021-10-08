import React, { FC, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { useAppDispatch } from "../store/hooks";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";

export const DaoInfo: FC = () => {
  const dispatch = useAppDispatch();

  return (
    <Card sx={{ minWidth: 275, flexGrow: 2, mr: 2, height: "100%" }}>
      <CardContent>
        <Typography variant="h4" color="text.secondary" gutterBottom>
          DAO Data
        </Typography>
      </CardContent>
    </Card>
  );
};
