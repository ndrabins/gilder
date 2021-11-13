import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../store/store";
import { fetchDaosRequest, fetchDaoTransactionsRequest } from "../api/dao";
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

export interface daoState {
  daos: any;
  daoData: any;
  daoStatus: "idle" | "loading" | "failed";
  transactions: any;
}

const initialState: daoState = {
  daos: [],
  daoData: null,
  transactions: [],
  daoStatus: "idle",
};

export const fetchDaos = createAsyncThunk(
  "dao/fetchDaos",
  async (_: any, { getState }) => {
    return fetchDaosRequest();
  }
);

export const fetchTransactions = createAsyncThunk(
  "dao/fetchTransactions",
  async (_: any, { getState }) => {
    const { dao } = getState() as RootState;

    return fetchDaoTransactionsRequest(dao.daoData.pubkey);
  }
);

export const daoSlice = createSlice({
  name: "dao",
  initialState,
  reducers: {
    selectDao: (state, action: PayloadAction<{ dao: any }>) => {
      // state.daoData = action.payload;
      console.log("action", action);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDaos.pending, (state) => {
        state.daoStatus = "loading";
      })
      .addCase(fetchDaos.rejected, (state) => {
        state.daoStatus = "failed";
      })
      .addCase(fetchDaos.fulfilled, (state, action: any) => {
        state.daoStatus = "idle";
        state.daos = action.payload;
        // select first dao in list for now
        if (state.daos) {
          state.daoData = state.daos[0];
        }
      })
      .addCase(fetchTransactions.fulfilled, (state, action: any) => {
        state.transactions = action.payload;
      });
  },
});

export const { selectDao } = daoSlice.actions;

export default daoSlice.reducer;
