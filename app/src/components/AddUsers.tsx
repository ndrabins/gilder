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
} from "@mui/material";
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
  const [discordMembers, setDiscordMembers] = useState<Member[]>([]);

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
    <Stack sx={{ minWidth: 275, flex: 2 }} spacing={3}>
      <Card>
        <CardContent>
          <Typography variant="h5" color="text.secondary" gutterBottom>
            Manual User Entry
          </Typography>
          <Divider sx={{ mb: 2 }} />

          {membersAdded.map((member, index) => (
            <Stack direction="row" sx={{ mb: 2 }} key={index}>
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

      <Card>
        <CardContent>
          <Typography variant="h5" gutterBottom color="text.secondary">
            Discord Users
          </Typography>
          <Divider sx={{ mb: 2 }} />

          {discordMembers.map((member, index) => (
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
        </CardContent>
      </Card>
    </Stack>
  );
};
