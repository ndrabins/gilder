import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../store/store";
import {
  getGuildsRequest,
  getAccessTokenRequest,
  getUserRequest,
  getGuildMembersRequest,
} from "../api/discord";

// TODO: fix ts errors in formdata on responess

export interface DiscordState {
  status: "idle" | "loading" | "failed";
  access_token: string;
  token_type: string;
  user: any;
  guilds: any[];
  membersStatus: string;
  guildMembers: any[];
}

const initialState: DiscordState = {
  access_token: "",
  guilds: [],
  user: null,
  status: "idle",
  token_type: "",
  membersStatus: "idle",
  guildMembers: [],
};

interface IgetGuildsRequest {
  access_token: string;
  token_type: string;
}

// typically used to make async requests.
export const authorizeDiscordUser = createAsyncThunk(
  "discord/authorizeDiscordUser",
  async (code: string) => {
    const response = await getAccessTokenRequest(code);
    //@ts-ignore
    const { access_token, token_type } = response.data;
    const guilds = await getGuildsRequest(access_token, token_type);
    const user = await getUserRequest(access_token, token_type);
    return { ...response.data, guilds, user };
  }
);

export const getGuilds = createAsyncThunk(
  "discord/getGuilds",
  async ({ access_token, token_type }: IgetGuildsRequest) => {
    const response = await getGuildsRequest(access_token, token_type);
    return response.data;
  }
);

export const getGuildMembers = createAsyncThunk(
  "discord/getGuildMembers",
  async (guildId: string, { getState }) => {
    const { discord } = getState() as RootState;

    const response = await getGuildMembersRequest(
      discord.access_token,
      discord.token_type,
      guildId
    );
    return response.data;
  }
);

export const discordSlice = createSlice({
  name: "discord",
  initialState,
  reducers: {},
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {
    builder
      .addCase(authorizeDiscordUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(authorizeDiscordUser.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(authorizeDiscordUser.fulfilled, (state, action: any) => {
        state.status = "idle";
        state.access_token = action.payload.access_token;
        state.token_type = action.payload.token_type;
        state.guilds = action.payload.guilds.data;
        state.user = action.payload.user.data;
      })
      .addCase(getGuildMembers.pending, (state) => {
        state.membersStatus = "loading";
      })
      .addCase(getGuildMembers.rejected, (state) => {
        state.membersStatus = "failed";
      })
      .addCase(getGuildMembers.fulfilled, (state, action: any) => {
        state.membersStatus = "idle";
        state.guildMembers = action.payload;
      });
  },
});

export const {} = discordSlice.actions;

export default discordSlice.reducer;