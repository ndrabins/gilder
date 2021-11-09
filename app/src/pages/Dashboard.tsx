import { Box, Typography } from "@mui/material";
import { Drawer } from "../components";

export const Dashboard = () => {
  return (
    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Typography variant="h2" sx={{ color: "grey.100" }}>
        Dashboard
      </Typography>
    </Box>
  );
};
