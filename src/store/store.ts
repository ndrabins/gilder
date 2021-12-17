import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import discordReducer from "../slices/discordSlice";
import web3Reducer from "../slices/web3Slice";
import daoReducer from "../slices/daoSlice";

// TODO: handle persisting daos to local storage
// https://github.com/rt2zz/redux-persist
// import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

// const persistConfig = {
//   key: 'root',
//   storage,
// }

export const store = configureStore({
  reducer: {
    discord: discordReducer,
    web3: web3Reducer,
    dao: daoReducer,
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
