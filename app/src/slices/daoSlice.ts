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
  daoData: any;
  daoStatus: "idle" | "loading" | "failed";
}

const initialState: daoState = {
  daos: [],
  daoData: null,
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
      });
  },
});

export const { selectDao } = daoSlice.actions;

export default daoSlice.reducer;
