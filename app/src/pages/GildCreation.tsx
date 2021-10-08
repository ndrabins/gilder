import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { AddUsers, DaoInfo } from "../components";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { RootState } from "../store/store";

export const GildCreation = () => {
  const user = useAppSelector((state: RootState) => state.discord.user);
  const walletKey = useAppSelector((state: RootState) => state.web3.walletKey);
  const authenticated = user?.id && walletKey;

  const handleDAOCreation = () => {
    console.log("creating dao");
  };

  return (
    <Box sx={{ flexGrow: 2, p: 6, bgcolor: "black" }}>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ mb: 2 }}
      >
        <Typography variant="h4" sx={{ color: "grey.100" }}></Typography>
        <Box>
          <Button
            variant="contained"
            onClick={handleDAOCreation}
            disabled={!authenticated}
          >
            Create DAO
          </Button>
        </Box>
      </Stack>
      <Stack direction="row">
        <DaoInfo />
        <AddUsers />
      </Stack>
    </Box>
  );
};
