import React, { useCallback } from "react";
import { Box, Stack, Typography } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { AddUsers, DaoInfo } from "../components";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { RootState } from "../store/store";
import { WalletNotConnectedError } from "@solana/wallet-adapter-base";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { Keypair, SystemProgram, Transaction } from "@solana/web3.js";
import { mintToken } from "../slices/web3Slice";
import { useTheme } from "@mui/material/styles";

export const GildCreation = () => {
  const user = useAppSelector((state: RootState) => state.discord.user);
  const theme = useTheme();
  const mintStatus = useAppSelector(
    (state: RootState) => state.web3.mintStatus
  );
  const dispatch = useAppDispatch();
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();

  const onClick = useCallback(async () => {
    try {
      if (!publicKey) {
        console.log("no public key", publicKey);
        // throw new WalletNotConnectedError();
        return;
      }

      const transaction = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: publicKey,
          toPubkey: Keypair.generate().publicKey,
          lamports: 1,
        })
      );

      const signature = await sendTransaction(transaction, connection);

      await connection.confirmTransaction(signature, "processed");
    } catch (error) {
      console.log(error);
    }
  }, [publicKey, sendTransaction, connection]);

  const testMintToken = async () => {
    if (!publicKey) {
      console.log("no public key", publicKey);
      // throw new WalletNotConnectedError();
      return;
    }

    dispatch(mintToken({ publicKey, connection }));
  };

  return (
    <Box sx={{ flexGrow: 2, p: 6, bgcolor: "#18181B", overflowY: "auto" }}>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ mb: 2 }}
      >
        <Typography variant="h4" sx={{ color: "grey.100" }}></Typography>
        <Box>
          <LoadingButton
            variant="contained"
            // onClick={testMintToken}
            color="secondary"
            loading={mintStatus === "loading"}
            sx={{
              background: `linear-gradient(135deg, ${theme.palette.secondary.light},  ${theme.palette.secondary.dark})`,
            }}
          >
            Create DAO
          </LoadingButton>
        </Box>
      </Stack>
      <Stack direction="column">
        <DaoInfo />
        <AddUsers />
      </Stack>
    </Box>
  );
};
