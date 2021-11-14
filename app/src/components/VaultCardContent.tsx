import { useAppSelector } from "../store/hooks";
import { RootState } from "../store/store";
import { Link, Chip, Stack, Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { TokenListItem } from "./TokenListItem";

export const VaultCardContent = (props: any) => {
  const { daoTokens } = useAppSelector((state: RootState) => state.dao);
  const { tokenList } = useAppSelector((state: RootState) => state.web3);

  const theme = useTheme();

  const getTokenInfo = (token: any, tokenList: any) => {
    const mintAddress = token.account.data.parsed.info.mint;
    const { tokens } = tokenList;
    const foundToken = tokens.find(
      (token: any) => token.address === mintAddress
    );

    // if found in solana token list
    if (foundToken) {
      return foundToken;
    }

    return {
      logoURI: mintAddress.slice(0, 1),
      name: mintAddress.slice(0, 3) + "..." + mintAddress.slice(-3),
    };
  };

  if (tokenList.length < 1) {
    return <div />;
  }

  return (
    <Stack>
      {daoTokens.map((token) => (
        // @ts-ignore
        <Box key={token.pubkey}>
          <TokenListItem
            token={getTokenInfo(token, tokenList)}
            // @ts-ignore
            amount={token.account.data.parsed.info.tokenAmount.uiAmountString}
          />
        </Box>
      ))}
    </Stack>
  );
};
