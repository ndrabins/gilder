import {
  PublicKey,
  Transaction,
  TransactionInstruction,
} from "@solana/web3.js";

import * as splToken from "@solana/spl-token";
import bs58 from "bs58";
import axios from "axios";
import { clusterApiUrl } from "@solana/web3.js";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";

const GOVERNANCE_PROGRAM_ID = "GovER5Lthms3bLBqWub97yVrMmEogzX7xNjdXpPPCVZw";

export const fetchDaosRequest = async ({
  network,
}: {
  network: WalletAdapterNetwork;
}) => {
  const programPk = new PublicKey(GOVERNANCE_PROGRAM_ID);
  const solanaApiUrl = clusterApiUrl(network);

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

export const fetchDaoTransactionsRequest = async ({
  publicKey,
  network,
}: {
  publicKey: string;
  network: WalletAdapterNetwork;
}) => {
  const solanaApiUrl = clusterApiUrl(network);

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

export const fetchDao = async ({
  publicKey,
  network,
}: {
  publicKey: string;
  network: WalletAdapterNetwork;
}) => {
  const solanaApiUrl = clusterApiUrl(network);

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

// oyster/governances/registerRealm.ts
// https://github.com/blockworks-foundation/governance-ui/pull/62/files

//program_id: &Pubkey,
// realm_authority: &Pubkey,
// community_token_mint: &Pubkey,
// payer: &Pubkey,
// council_token_mint: Option<Pubkey>,
// name: String,
// min_community_tokens_to_create_governance: u64,
// community_mint_max_vote_weight_source: MintMaxVoteWeightSource

export const createDaoRequest = async () => {
  console.log("creating dao");
  // Args:
  // { connection, wallet, programId, programVersion?, walletPubkey }
  // name: string // of dao
  // communityMint: PublicKey,
  // councileMint?: PublicKey | unde
  // await createRealm
  // sendTransaction
};
