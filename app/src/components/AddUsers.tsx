import React, { FC, useState, useEffect } from "react";
import { useAppSelector } from "../store/hooks";
import { RootState } from "../store/store";
import {
  TextField,
  Divider,
  Card,
  Stack,
  CardContent,
  Typography,
  IconButton,
  Chip,
  Tooltip,
  Box,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { DiscordUserAvatar } from "../components";

interface Member {
  id?: string;
  walletKey: string;
  avatar?: string;
  username?: string;
  tokenAmt?: number;
}

const DUMMY_DISCORD_DATA = [
  {
    id: "220001760939474954",
    walletKey: "EQQ3Zf6r2G9oHSBzYJiWppeHNzAUouYAvQeoKd74Za7q",
    avatar: "cb498c331b54804a50b86f757bfa067d",
    username: "Dawggydawg",
    tokenAmt: 1000,
  },
  {
    id: "220001760939474954",
    walletKey: "EQQ3Zf6r2G9oHSBzYJiWppeHNzAUouYAvQeoKd74Za7q",
    avatar: "cb498c331b54804a50b86f757bfa067d",
    username: "Dawggydawg",
    tokenAmt: 1000,
  },
  {
    id: "220001760939474954",
    walletKey: "EQQ3Zf6r2G9oHSBzYJiWppeHNzAUouYAvQeoKd74Za7q",
    avatar: "cb498c331b54804a50b86f757bfa067d",
    username: "Dawggydawg",
    tokenAmt: 1000,
  },
  {
    id: "220001760939474954",
    walletKey: "EQQ3Zf6r2G9oHSBzYJiWppeHNzAUouYAvQeoKd74Za7q",
    avatar: "cb498c331b54804a50b86f757bfa067d",
    username: "Dawggydawg",
    tokenAmt: 1000,
  },
  {
    id: "220001760939474954",
    walletKey: "EQQ3Zf6r2G9oHSBzYJiWppeHNzAUouYAvQeoKd74Za7q",
    avatar: "cb498c331b54804a50b86f757bfa067d",
    username: "Dawggydawg",
    tokenAmt: 1000,
  },
  {
    id: "220001760939474954",
    walletKey: "EQQ3Zf6r2G9oHSBzYJiWppeHNzAUouYAvQeoKd74Za7q",
    avatar: "cb498c331b54804a50b86f757bfa067d",
    username: "Dawggydawg",
    tokenAmt: 1000,
  },
  {
    id: "220001760939474954",
    walletKey: "EQQ3Zf6r2G9oHSBzYJiWppeHNzAUouYAvQeoKd74Za7q",
    avatar: "cb498c331b54804a50b86f757bfa067d",
    username: "Dawggydawg",
    tokenAmt: 1000,
  },
  {
    id: "220001760939474954",
    walletKey: "EQQ3Zf6r2G9oHSBzYJiWppeHNzAUouYAvQeoKd74Za7q",
    avatar: "cb498c331b54804a50b86f757bfa067d",
    username: "Dawggydawg",
    tokenAmt: 1000,
  },
  {
    id: "220001760939474954",
    walletKey: "EQQ3Zf6r2G9oHSBzYJiWppeHNzAUouYAvQeoKd74Za7q",
    avatar: "cb498c331b54804a50b86f757bfa067d",
    username: "Dawggydawg",
    tokenAmt: 1000,
  },
  {
    id: "220001760939474954",
    walletKey: "EQQ3Zf6r2G9oHSBzYJiWppeHNzAUouYAvQeoKd74Za7q",
    avatar: "cb498c331b54804a50b86f757bfa067d",
    username: "Dawggydawg",
    tokenAmt: 1000,
  },
  {
    id: "220001760939474954",
    walletKey: "EQQ3Zf6r2G9oHSBzYJiWppeHNzAUouYAvQeoKd74Za7q",
    avatar: "cb498c331b54804a50b86f757bfa067d",
    username: "Dawggydawg",
    tokenAmt: 1000,
  },
  {
    id: "220001760939474954",
    walletKey: "EQQ3Zf6r2G9oHSBzYJiWppeHNzAUouYAvQeoKd74Za7q",
    avatar: "cb498c331b54804a50b86f757bfa067d",
    username: "Dawggydawg",
    tokenAmt: 1000,
  },
];

export const AddUsers: FC = () => {
  const user = useAppSelector((state: RootState) => state.discord.user);
  const [membersAdded, setMemberAdded] = useState<Member[]>([]);
  const [discordMembers, setDiscordMembers] = useState<Member[]>([]);

  const onDeleteClick = (index: number) => {
    let updatedMembers = [...membersAdded];
    updatedMembers.splice(index, 1);
    setMemberAdded(updatedMembers);
  };

  const addMember = () => {
    setMemberAdded((members) => [
      ...members,
      {
        id: "",
        walletKey: "44Kv3SL1jKLhTKqg7ow6ktYZ85wsvNVr2ZwVvXeP3DTw",
        tokenAmt: 100,
        avatar: "",
        username: "",
      },
    ]);
  };

  // TODO add section for discord connection.

  return (
    <Stack sx={{ minWidth: 275, flex: 1 }} flexDirection="row">
      <Card sx={{ p: 1, mr: 2, flex: "2" }}>
        <CardContent>
          <Typography variant="h5" sx={{ fontWeight: "bold" }} gutterBottom>
            User Entry
          </Typography>
          <Divider sx={{ mb: 2, borderColor: "secondary.600" }} />
          <Stack direction="row" sx={{ mb: 2 }}>
            <TextField
              id="wallet-key"
              label="Wallet Key"
              variant="outlined"
              helperText="Public key of wallet."
              sx={{ flexGrow: 3, mr: 1 }}
              InputLabelProps={{
                shrink: true,
              }}
            />

            <TextField
              id="token-amount"
              label="Token Amount"
              variant="outlined"
              sx={{ flexGrow: 1, mr: 2 }}
              InputLabelProps={{
                shrink: true,
              }}
              helperText="# tokens sent."
              type="number"
            />

            <Stack justifyContent="center" alignItems="center">
              <IconButton aria-label="add member" onClick={addMember}>
                <AddIcon />
              </IconButton>
            </Stack>
          </Stack>

          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", color: "grey.400" }}
            gutterBottom
          >
            Members added
          </Typography>
          <Divider sx={{ mb: 2, borderColor: "grey.700" }} />

          {membersAdded.map((member, index) => (
            <Tooltip title={`Tokens: ${member.tokenAmt || "<base_amount>"} `}>
              <Chip
                label={`${member.walletKey.slice(
                  0,
                  4
                )}...${member.walletKey.slice(-4)}`}
                sx={{ mr: 1 }}
                onDelete={() => onDeleteClick(index)}
              />
            </Tooltip>
          ))}
        </CardContent>
      </Card>

      <Card
        sx={{ p: 1, flexGrow: 1, width: "100%", overflow: "auto", flex: 1 }}
      >
        <CardContent>
          <Typography variant="h5" sx={{ fontWeight: "bold" }} gutterBottom>
            Discord Users
          </Typography>
          <Divider sx={{ mb: 2, borderColor: "secondary.600" }} />

          <Stack direction="row" sx={{ mb: 2 }} flexWrap="wrap">
            {DUMMY_DISCORD_DATA.map((member, index) => (
              <Box key={index} sx={{ ml: -2 }}>
                <DiscordUserAvatar
                  id={member.id}
                  avatar={member.avatar}
                  username={member.username}
                  showName={false}
                />
              </Box>
            ))}
          </Stack>
        </CardContent>
      </Card>
    </Stack>
  );
};
