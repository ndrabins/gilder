import { Box, Typography, Stack, Card } from "@mui/material";
import { Drawer } from "../components";
import { useAppSelector } from "../store/hooks";
import { RootState } from "../store/store";

export const Dashboard = (props: any) => {
  const daos = useAppSelector((state: RootState) => state.dao.daos);

  console.log("props", daos);
  return (
    <Stack sx={{ flexGrow: 1 }} flexDirection="row">
      <Drawer />
      <Stack
        sx={{
          p: 2,
          width: "100%",
          overflowY: "auto",
          background: "transparent",
        }}
      >
        <Typography variant="h5" sx={{ color: "grey.100", mb: 2 }}>
          Dashboard
        </Typography>
      </Stack>
    </Stack>
  );
};
