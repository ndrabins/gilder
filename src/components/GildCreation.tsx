import React, { useCallback } from "react";
import { Box, Stack, Typography } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { AddUsers, DaoInfo } from ".";
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
    <Box
      sx={{
        flexGrow: 2,
        bgcolor: theme.palette.grey[800],
        overflowY: "auto",
      }}
    >
      <Stack direction="column">
        <DaoInfo />

        {/* <AddUsers /> */}
      </Stack>
    </Box>
  );
};
