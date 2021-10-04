import axios from "axios";

const DISCORD_ENDPOINT = `${process.env.REACT_APP_DISCORD_API_URL}`;
const CLIENT_ID = `${process.env.REACT_APP_DISCORD_CLIENT_ID}`;
const CLIENT_SECRET = `${process.env.REACT_APP_DISCORD_CLIENT_SECRET}`;
const TOKEN_ENDPOINT = `${DISCORD_ENDPOINT}/oauth2/token`;
const GILDER_URL = `${process.env.REACT_APP_GILDER_URL}`;

export const getAccessTokenRequest = async (code: string) => {
  const formData = new FormData();
  formData.append("grant_type", "authorization_code");
  formData.append("code", code);
  formData.append("client_id", CLIENT_ID as string);
  formData.append("client_secret", CLIENT_SECRET as string);
  formData.append("redirect_uri", GILDER_URL as string);

  const headers = {
    "Content-Type": "application/x-www-form-urlencoded",
  };

  const response = await axios.post(TOKEN_ENDPOINT, formData, { headers });
  return response;
};

export const getGuildsRequest = async (
  access_token: string,
  token_type: string
) => {
  const guilds = await axios.get(`${DISCORD_ENDPOINT}/users/@me/guilds`, {
    headers: {
      Authorization: `${token_type} ${access_token}`,
    },
  });

  return guilds;
};

export const getUserRequest = async (
  access_token: string,
  token_type: string
) => {
  const user = await axios.get(`${DISCORD_ENDPOINT}/users/@me`, {
    headers: {
      Authorization: `${token_type} ${access_token}`,
    },
  });

  return user;
};
