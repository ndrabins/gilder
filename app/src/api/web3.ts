import {
  Keypair,
  SystemProgram,
  Transaction,
  PublicKey,
  Connection,
} from "@solana/web3.js";
import { clusterApiUrl } from "@solana/web3.js";
import * as splToken from "@solana/spl-token";
import bs58 from "bs58";
import axios from "axios";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";

const TOKEN_URL =
  "https://cdn.jsdelivr.net/gh/solana-labs/token-list@main/src/tokens/solana.tokenlist.json";

export const getTokenListRequest = async () => {
  const response = await axios.get(TOKEN_URL);

  return response.data;
};

export const getTokensOfAccountRequest = async ({
  publicKey,
  network,
}: {
  publicKey: string;
  network: WalletAdapterNetwork;
}) => {
  const solanaApiUrl = clusterApiUrl(network);

  const data = {
    id: 1, //not sure what goes here
    jsonrpc: "2.0",
    method: "getTokenAccountsByOwner",
    // index 0: public key, index 1: filter object
    // filter object { before?: <transactionId, limit: <number of items to get>}
    params: [
      publicKey,
      { programId: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA" },
      { encoding: "jsonParsed", commitment: "processed" },
    ],
  };

  const response = await axios.post(`${solanaApiUrl}`, data);
  return response.data.result.value;
};
