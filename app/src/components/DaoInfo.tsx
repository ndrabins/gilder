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
    <Card sx={{ minWidth: 275, flex: 3, mr: 2 }}>
      <CardContent>
        <Typography variant="h5" color="text.secondary" gutterBottom>
          DAO Data
        </Typography>
        <Stack spacing={2}>
          <TextField id="wallet-key" label="DAO Name" variant="outlined" />
          <TextField id="token-amt" label="Token Amount" variant="outlined" />
          <TextField
            id="token-symbol"
            label="Token Symbol"
            variant="outlined"
          />
          <TextField id="token-symbol" label="Decimals" variant="outlined" />
        </Stack>
      </CardContent>
    </Card>
  );
};
