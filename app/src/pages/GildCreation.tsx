import React, { useCallback } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { AddUsers, DaoInfo } from "../components";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { RootState } from "../store/store";
import { WalletNotConnectedError } from "@solana/wallet-adapter-base";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { Keypair, SystemProgram, Transaction } from "@solana/web3.js";
import * as web3 from "@solana/web3.js";
import * as splToken from "@solana/spl-token";

export const GildCreation = () => {
  const user = useAppSelector((state: RootState) => state.discord.user);
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

    // temp
    var fromWallet = web3.Keypair.generate();

    var fromAirdropSignature = await connection.requestAirdrop(
      fromWallet.publicKey,
      web3.LAMPORTS_PER_SOL
    );

    //wait for airdrop confirmation
    await connection.confirmTransaction(fromAirdropSignature);

    let mint = await splToken.Token.createMint(
      connection, // connection to solana network
      fromWallet, // wallet that pays the fee
      fromWallet.publicKey, // wallet that has authority to mint ttokens
      null, // wallet with authority to freeze tokens (optional)
      9, // amount of decimals
      splToken.TOKEN_PROGRAM_ID // program id of token - https://docs.solana.com/developing/programming-model/transactions#program-id
    );

    // fetches account associated with the public key. Tokens reside in account... wallet owns account
    let fromTokenAccount = await mint.getOrCreateAssociatedAccountInfo(
      fromWallet.publicKey
    );

    //get the token account of the toWallet Solana address, if it does not exist, create it
    var toTokenAccount = await mint.getOrCreateAssociatedAccountInfo(publicKey);

    await mint.mintTo(
      fromTokenAccount.address, //who it goes to
      fromWallet.publicKey, // minting authority
      [], // multisig
      1000000000 // how many
    );

    await mint.setAuthority(
      mint.publicKey,
      null,
      "MintTokens",
      fromWallet.publicKey,
      []
    );

    // Add token transfer instructions to transaction
    var transaction = new web3.Transaction().add(
      splToken.Token.createTransferInstruction(
        splToken.TOKEN_PROGRAM_ID,
        fromTokenAccount.address,
        toTokenAccount.address,
        fromWallet.publicKey,
        [],
        1
      )
    );

    // Sign transaction, broadcast, and confirm
    var signature = await web3.sendAndConfirmTransaction(
      connection,
      transaction,
      [fromWallet],
      { commitment: "confirmed" }
    );
    console.log("SIGNATURE", signature);
  };

  return (
    <Box sx={{ flexGrow: 2, p: 6, bgcolor: "black" }}>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ mb: 2 }}
      >
        <Typography variant="h4" sx={{ color: "grey.100" }}></Typography>
        <Box>
          <Button variant="contained" onClick={testMintToken} color="secondary">
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
