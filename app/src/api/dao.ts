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

// governance -> homeView.tsx has translation

// squads
// getAccountInfo
// getTokenAccountsByOwner
// get

export const fetchDaosRequest = async () => {
  const programId = "GovER5Lthms3bLBqWub97yVrMmEogzX7xNjdXpPPCVZw";
  const programPk = new PublicKey(programId);
  // TODO: replace this with what network wallet is on
  // const solanaApiUrl = "https://api.devnet.solana.com/";
  const solanaApiUrl = "https://api.mainnet-beta.solana.com";
  const filters = [] as Array<any>;
  // no idea what this is yet.
  const accountType = 1;

  let getProgramAccounts = await fetch(solanaApiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      jsonrpc: "2.0",
      id: 1, // 1 or 2 in governance repo?
      method: "getProgramAccounts",
      params: [
        programPk.toBase58(),
        {
          commitment: "recent",
          encoding: "base64",
          filters: [
            {
              memcmp: {
                offset: 0,
                bytes: bs58.encode([accountType]),
              },
            },
            ...filters.map((f) => ({
              memcmp: { offset: f.offset, bytes: bs58.encode(f.bytes) },
            })),
          ],
        },
      ],
    }),
  });

  const rawAccounts = (await getProgramAccounts.json())["result"];

  let accounts: { [pubKey: string]: any } = {};

  for (let rawAccount of rawAccounts) {
    try {
      const account = {
        pubkey: new PublicKey(rawAccount.pubkey),
        account: {
          ...rawAccount.account,
          data: [], // There is no need to keep the raw data around once we deserialize it into TAccount
        },
        // TODO: figure this out...
        // info: deserializeBorsh(
        //   borshSchema,
        //   accountFactory,
        //   Buffer.from(rawAccount.account.data[0], "base64")
        // ),
      };

      accounts[account.pubkey.toBase58()] = account;
    } catch (ex) {}
  }

  return rawAccounts;
};

// get details of account
export const getAccountInfo = async () => {
  return null;
};

export const fetchDaoTransactionsRequest = async (publicKey: string) => {
  // const solanaApiUrl = "https://api.devnet.solana.com/";
  const solanaApiUrl = "https://api.mainnet-beta.solana.com";
  // no idea what this is yet.
  const data = {
    id: 1, //not sure what goes here
    jsonrpc: "2.0",
    method: "getConfirmedSignaturesForAddress2",
    // index 0: public key, index 1: filter object
    // filter object { before?: <transactionId, limit: <number of items to get>}
    params: [publicKey, { limit: 25 }],
  };

  const response = await axios.post(`${solanaApiUrl}`, data);

  return response.data.result;
};
