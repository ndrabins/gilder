import {
  Keypair,
  SystemProgram,
  Transaction,
  PublicKey,
  Connection,
} from "@solana/web3.js";
import * as web3 from "@solana/web3.js";
import * as splToken from "@solana/spl-token";
import bs58 from "bs58";
import axios from "axios";

const TOKEN_URL =
  "https://cdn.jsdelivr.net/gh/solana-labs/token-list@main/src/tokens/solana.tokenlist.json";

export const getTokenListRequest = async () => {
  const response = await axios.get(TOKEN_URL);

  return response.data;
};
