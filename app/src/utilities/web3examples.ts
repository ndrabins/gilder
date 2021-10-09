// FROM https://github.com/solana-labs/solana-program-library/blob/master/token/js/examples/create_mint_and_transfer_tokens.js

const web3 = require("@solana/web3.js");
const splToken = require("@solana/spl-token");

export const getConnection = async () => {
  // Connect to cluster
  const connection = new web3.Connection(
    web3.clusterApiUrl("devnet"),
    "confirmed"
  );

  return connection;
};

// mint and send
const examples = async () => {
  const connection = new web3.Connection(
    web3.clusterApiUrl("devnet"),
    "confirmed"
  );

  // Generate a new wallet keypair and airdrop SOL
  var fromWallet = web3.Keypair.generate();
  var fromAirdropSignature = await connection.requestAirdrop(
    fromWallet.publicKey,
    web3.LAMPORTS_PER_SOL
  );
  // Wait for airdrop confirmation
  await connection.confirmTransaction(fromAirdropSignature);

  // Generate a new wallet to receive newly minted token
  const toWallet = web3.Keypair.generate();

  // Create new token mint
  const mint = await splToken.Token.createMint(
    connection,
    fromWallet,
    fromWallet.publicKey,
    null,
    9,
    splToken.TOKEN_PROGRAM_ID
  );

  // Get the token account of the fromWallet Solana address, if it does not exist, create it
  const fromTokenAccount = await mint.getOrCreateAssociatedAccountInfo(
    fromWallet.publicKey
  );

  //get the token account of the toWallet Solana address, if it does not exist, create it
  const toTokenAccount = await mint.getOrCreateAssociatedAccountInfo(
    toWallet.publicKey
  );

  // Minting 1 new token to the "fromTokenAccount" account we just returned/created
  await mint.mintTo(
    fromTokenAccount.address,
    fromWallet.publicKey,
    [],
    1000000000
  );

  // Add token transfer instructions to transaction
  const transaction = new web3.Transaction().add(
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
  const signature = await web3.sendAndConfirmTransaction(
    connection,
    transaction,
    [fromWallet],
    { commitment: "confirmed" }
  );
};

// From sol minter

// import {
//   AccountLayout,
//   AuthorityType,
//   MintInfo,
//   MintLayout,
//   Token,
//   u64,
// } from "@solana/spl-token";
// import { WalletContextState } from "@solana/wallet-adapter-react";
// import {
//   Account,
//   Commitment,
//   Connection,
//   PublicKey,
//   Signer,
//   SystemProgram,
//   Transaction,
//   TransactionInstruction,
// } from "@solana/web3.js";

// Allocate memory for the account

//  const balanceNeeded = await Token.getMinBalanceRentForExemptMint(
//   this.connection
// );

// const transaction = new Transaction();
// transaction.add(
//   SystemProgram.createAccount({
//     fromPubkey: mintAuthority,
//     newAccountPubkey: mintAccount.publicKey,
//     lamports: balanceNeeded,
//     space: MintLayout.span,
//     programId,
//   })
// );

// transaction.add(
//   Token.createInitMintInstruction(
//     programId,
//     mintAccount.publicKey,
//     decimal,
//     mintAuthority,
//     freezeAuthority
//   )
// );

// const balanceAccountNeeded = await Token.getMinBalanceRentForExemptAccount(
//   this.connection
// );
// const tokenAccount = new Account();
// transaction.add(
//   SystemProgram.createAccount({
//     fromPubkey: mintAuthority,
//     newAccountPubkey: tokenAccount.publicKey,
//     lamports: balanceAccountNeeded,
//     space: AccountLayout.span,
//     programId: programId,
//   })
// );

// transaction.add(
//   Token.createInitAccountInstruction(
//     programId,
//     mintAccount.publicKey,
//     tokenAccount.publicKey,
//     mintAuthority
//   )
// );

// // Send the two instructions
// const txID = await sendTxUsingExternalSignature(
//   transaction,
//   this.connection,
//   null,
//   [mintAccount, tokenAccount],
//   wallet
// );

// return {
//   txID,
//   mintAccount: mintAccount.publicKey.toString(),
//   tokenAccount: tokenAccount.publicKey.toString(),
// };
