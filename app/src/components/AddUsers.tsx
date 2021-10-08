import React, { FC, useState, useEffect } from "react";
import { useAppSelector } from "../store/hooks";
import { RootState } from "../store/store";
import styled from "styled-components";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";

import { DiscordUserAvatar } from "../components";

interface Member {
  id: string;
  walletKey: string;
  avatar: string;
  username: string;
}

export const AddUsers: FC = () => {
  const user = useAppSelector((state: RootState) => state.discord.user);
  const [membersAdded, setMemberAdded] = useState<Member[]>([]);

  useEffect(() => {
    if (user?.id) {
      setMemberAdded((members) => [
        ...members,
        {
          id: user.id,
          walletKey: "12345",
          avatar: user.avatar,
          username: user.username,
        },
      ]);
    }
  }, [user]);

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
        walletKey: "",
        avatar: "",
        username: "",
      },
    ]);
  };

  // TODO add section for discord connection.

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography
          variant="h4"
          sx={{ mb: 2 }}
          color="text.secondary"
          gutterBottom
        >
          Users
        </Typography>

        {membersAdded.map((member, index) => (
          <Stack direction="row" sx={{ mb: 2 }} key={index}>
            {member && (
              <DiscordUserAvatar
                id={member.id}
                avatar={member.avatar}
                username={member.username}
                showName={false}
              />
            )}

            <TextField
              id="wallet-key"
              label="Wallet Key"
              variant="outlined"
              sx={{ flexGrow: 3, mr: 1, ml: 1 }}
            />

            <TextField
              id="token-amount"
              label="Token Amount"
              variant="outlined"
              sx={{ flexGrow: 1, mr: 2, ml: 1 }}
            />

            <Stack justifyContent="center" alignItems="center">
              <IconButton
                aria-label="delete"
                onClick={() => onDeleteClick(index)}
              >
                <DeleteIcon />
              </IconButton>
            </Stack>
          </Stack>
        ))}
        <Stack justifyContent="center" alignItems="center">
          <IconButton aria-label="add member" onClick={addMember}>
            <AddIcon />
          </IconButton>
        </Stack>
      </CardContent>
    </Card>
  );
};
