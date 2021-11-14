import { useAppSelector } from "../store/hooks";
import { RootState } from "../store/store";
import {
  Link,
  Chip,
  Stack,
  Box,
  Typography,
  Divider,
  Avatar,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

interface TokenListItemProps {
  token: any;
  amount: any;
}

export const TokenListItem = (props: TokenListItemProps) => {
  const { token, amount } = props;

  return (
    <Stack flexDirection="row" alignItems="center" sx={{ p: 2 }}>
      <Stack flexDirection="row" alignItems="center" sx={{ width: "100%" }}>
        <Avatar src={token.logoURI} sx={{ mr: 1 }}>
          {token.logoURI}
        </Avatar>
        <Typography> {token.name} </Typography>
      </Stack>
      <Stack>
        <Typography> {amount} </Typography>
      </Stack>
    </Stack>
  );
};
