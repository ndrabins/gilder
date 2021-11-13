import React, { FC, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
  Divider,
  Box,
  Stack,
  IconButton,
  Avatar,
  Tooltip,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { fetchDaos } from "../slices/daoSlice";
import { useTheme } from "@mui/material/styles";
import { RootState } from "../store/store";

export const DaoSwitcher: FC = () => {
  const dispatch = useAppDispatch();
  const daos = useAppSelector((state: RootState) => state.dao.daos);
  const theme = useTheme();

  const [myDaos, setMyDaos] = useState([]);

  useEffect(() => {
    dispatch(fetchDaos(null));
  }, []);

  const onClick = () => {};

  return (
    <Stack
      sx={{
        height: "100%",
        minWidth: 64,
        pt: 2,
        bgcolor: "grey.900",
        overflowY: "auto",
      }}
      alignItems="center"
    >
      <Tooltip title="Add DAO">
        <IconButton
          sx={{ border: `1px dashed ${theme.palette.grey[500]}`, mb: 2 }}
          onClick={onClick}
        >
          <AddIcon sx={{ color: `${theme.palette.grey[400]}` }} />
        </IconButton>
      </Tooltip>
      <Box sx={{ pl: 1, pr: 1, width: "100%" }}>
        <Divider
          sx={{
            mb: 2,
            borderColor: "grey.700",
            borderWidth: 1,
            width: "100%",
          }}
        />
      </Box>

      {/* Only show 5 for now */}
      {daos.slice(0, 5).map((dao: any) => (
        <Box sx={{ mb: 2 }} key={dao.pubkey}>
          <Avatar>{dao.pubkey.slice(0, 1)}</Avatar>
        </Box>
      ))}
    </Stack>
  );
};
