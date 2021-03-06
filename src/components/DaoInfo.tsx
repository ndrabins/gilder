import React, { FC, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { useAppDispatch } from "../store/hooks";
import { Divider, TextField } from "@mui/material";

export const DaoInfo: FC = () => {
  const dispatch = useAppDispatch();

  return (
    <Stack sx={{ minWidth: 275, flex: 3, mb: 2 }}>
      <Typography variant="h5" sx={{ fontWeight: "bold" }} gutterBottom>
        DAO Details
      </Typography>
      <Typography variant="subtitle1" sx={{ color: "grey.500" }} gutterBottom>
        This info will be used to determine your token and the specifics around
        how users interact with it as well as your DAO.
      </Typography>
      <Divider sx={{ mb: 2, borderColor: "secondary.600" }} />
      <Stack spacing={2}>
        <TextField
          id="wallet-key"
          label="DAO Name"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
          helperText="The name of your discord guild or organization."
        />
        <TextField
          id="token-amt"
          label="Token Amount"
          variant="outlined"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          helperText="The total supply of tokens."
        />
        <TextField
          id="token-symbol"
          label="Token Symbol"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
          helperText="Ticker symbol that will be used to represent your token. E.g. 'Doge'"
        />
        <TextField
          id="token-symbol"
          label="Decimals"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
          helperText="The amount of places down a token can be broken into."
        />
      </Stack>
    </Stack>
  );
};
