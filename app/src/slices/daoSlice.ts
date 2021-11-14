import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store/store";
import {
  fetchDaosRequest,
  fetchDaoTransactionsRequest,
  createDaoRequest,
} from "../api/dao";
import { getTokensOfAccountRequest } from "../api/web3";

export interface daoState {
  daos: any;
  daoData: any;
  daoStatus: "idle" | "loading" | "failed";
  transactions: any;
  daoTokens: [];
}

const initialState: daoState = {
  daos: [],
  daoData: null,
  transactions: [],
  daoStatus: "idle",
  daoTokens: [],
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

export const getDaoTokens = createAsyncThunk(
  "dao/getDaoTokens",
  async (publicKey: string) => {
    return getTokensOfAccountRequest(publicKey);
  }
);

//
export const createDao = createAsyncThunk(
  "dao/createDao",
  async (publicKey: string) => {
    return createDaoRequest();
  }
);

export const daoSlice = createSlice({
  name: "dao",
  initialState,
  reducers: {
    selectDao: (state, action: PayloadAction<{ dao: any }>) => {
      state.daoData = action.payload.dao;
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
      .addCase(getDaoTokens.fulfilled, (state, action: any) => {
        state.daoTokens = action.payload;
      })
      .addCase(fetchTransactions.fulfilled, (state, action: any) => {
        state.transactions = action.payload;
      });
  },
});

export const { selectDao } = daoSlice.actions;

export default daoSlice.reducer;
