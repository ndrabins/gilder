import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../store/store";
import { fetchDaosRequest } from "../api/dao";
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
  daoStatus: "idle" | "loading" | "failed";
}

const initialState: daoState = {
  daos: [],
  daoStatus: "idle",
};

export const fetchDaos = createAsyncThunk(
  "dao/fetchDaos",
  async (_: any, { getState }) => {
    return fetchDaosRequest();
  }
);

export const daoSlice = createSlice({
  name: "dao",
  initialState,
  reducers: {},
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
      });
  },
});

export const {} = daoSlice.actions;

export default daoSlice.reducer;
