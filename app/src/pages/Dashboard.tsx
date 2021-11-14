import { useEffect } from "react";
import { Box, Typography, Stack, Card, Divider } from "@mui/material";
import { Drawer } from "../components";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { RootState } from "../store/store";
import { fetchDaos, fetchTransactions } from "../slices/daoSlice";
import { getTokenList } from "../slices/web3Slice";
import { ActivityTimeline } from "../components";

export const Dashboard = (props: any) => {
  const { daoData } = useAppSelector((state: RootState) => state.dao);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchDaos(null));
    dispatch(getTokenList());
  }, []);

  useEffect(() => {
    if (daoData?.pubkey) {
      dispatch(fetchTransactions(null));
    }
  }, [daoData]);

  return (
    <Stack
      sx={{ minHeight: 0, maxHeight: "100%", height: "100%" }}
      flexDirection="row"
    >
      <Drawer />
      <Stack
        sx={{
          p: 2,
          width: "100%",
          overflowY: "auto",
          background: "transparent",
        }}
      >
        <Typography variant="h5" sx={{ color: "grey.100", mb: 2 }}>
          {daoData?.pubkey.slice(0, 5)}...{daoData?.pubkey.slice(-5)} Dashboard
        </Typography>
        <Stack flexDirection="row">
          <Card
            sx={{
              p: 2,
              flexGrow: 2,
              m: 1,
              bgcolor: "grey.900",
              overflowY: "auto",
            }}
          >
            <Typography gutterBottom variant="h5" sx={{ color: "grey.300" }}>
              Vault
            </Typography>
            <Divider />
          </Card>
          <Card
            sx={{
              p: 2,
              flexGrow: 1,
              m: 1,
              bgcolor: "grey.900",
              overflowY: "auto",
              maxWidth: "400px",
              maxHeight: "400px",
            }}
          >
            <Typography gutterBottom variant="h5" sx={{ color: "grey.300" }}>
              Activity
            </Typography>
            <Divider />
            <ActivityTimeline />
          </Card>
        </Stack>
      </Stack>
    </Stack>
  );
};
