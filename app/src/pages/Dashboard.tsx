import { useEffect } from "react";
import { Box, Typography, Stack, Card, Divider } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { RootState } from "../store/store";
import { fetchDaos, fetchTransactions, getDaoTokens } from "../slices/daoSlice";
import { getTokenList } from "../slices/web3Slice";
import { Drawer, ActivityTimeline, VaultCardContent } from "../components";

export const Dashboard = (props: any) => {
  const { daoData } = useAppSelector((state: RootState) => state.dao);
  const { network } = useAppSelector((state: RootState) => state.web3);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchDaos(null));
    dispatch(getTokenList());
  }, [network]);

  useEffect(() => {
    if (daoData?.pubkey) {
      dispatch(fetchTransactions(null));
      dispatch(getDaoTokens(daoData.pubkey));
      // dispatch(getDaoTokens("5rWb6R9bC5LZ6RuGQXLdLhxWW6F2418nrSMUnSduUHPr"));
    }
  }, [daoData, network]);

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
            <VaultCardContent />
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
