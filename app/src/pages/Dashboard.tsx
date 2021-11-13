import { Box, Typography, Stack } from "@mui/material";
import { Drawer } from "../components";

export const Dashboard = (props: any) => {
  console.log("props", props);
  return (
    <Stack sx={{ flexGrow: 1 }} flexDirection="row">
      <Drawer />
      <Stack sx={{ p: 2 }}>
        <Typography variant="h2" sx={{ color: "grey.100" }}>
          Dashboard
        </Typography>
      </Stack>
    </Stack>
  );
};
