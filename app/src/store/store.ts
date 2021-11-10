import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import discordReducer from "../slices/discordSlice";
import web3Reducer from "../slices/web3Slice";

export const store = configureStore({
  reducer: {
    discord: discordReducer,
    web3: web3Reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
