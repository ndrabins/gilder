import React, { FC, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
  Divider,
  Box,
  Stack,
  IconButton,
  Avatar,
  Tooltip,
  Tabs,
  Tab,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { selectDao } from "../slices/daoSlice";
import { useTheme } from "@mui/material/styles";
import { RootState } from "../store/store";
import { AddDaoDialog } from "./AddDaoDialog";

export const DaoSwitcher: FC = () => {
  const dispatch = useAppDispatch();
  const { daos, daoData } = useAppSelector((state: RootState) => state.dao);
  const [switcherValue, setSwitcherValue] = useState(0);
  const [dialogOpen, setDialogOpen] = useState(false);

  const theme = useTheme();

  const clickDao = (event: any, index: number) => {
    setSwitcherValue(index);
    const selectedDao = daos[index];
    // @ts-ignore
    dispatch(selectDao({ dao: selectedDao }));
  };

  const openModal = () => {
    setDialogOpen(true);
  };

  return (
    <Stack
      sx={{
        height: "100%",
        minWidth: 64,
        pt: 2,
        bgcolor: "grey.900",
        overflowY: "auto",
        overflowX: "hidden",
      }}
      alignItems="center"
    >
      <Tooltip title="Add DAO">
        <IconButton
          sx={{
            border: `1px dashed ${theme.palette.grey[500]}`,
            mb: 2,
            "&:hover": {
              transform: "scale(1.2)",
            },
            transition: ".2s ease-in-out",
          }}
          onClick={openModal}
        >
          <AddIcon sx={{ color: `${theme.palette.grey[400]}` }} />
        </IconButton>
      </Tooltip>
      <AddDaoDialog open={dialogOpen} onClose={() => setDialogOpen(false)} />
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
      {daos && daoData && (
        <Tabs
          orientation="vertical"
          variant="scrollable"
          onChange={clickDao}
          value={switcherValue}
          sx={{ pl: 1, pr: 1 }}
          TabIndicatorProps={{
            style: {
              backgroundColor: theme.palette.grey[200],
              borderRadius: "16px",
              height: "32px",
              zIndex: 0,
              marginTop: "16px",
              marginBottom: "8px",
              marginRight: "80px",
              width: "8px",
            },
          }}
        >
          {daos.slice(0, 5).map((dao: any, index: number) => (
            <Tooltip placement="right-end" title={dao.pubkey} key={dao.pubkey}>
              <Tab
                value={index}
                key={index}
                disableRipple
                icon={
                  <Avatar
                    sx={{
                      "&:hover": {
                        transform: "scale(1.2)",
                      },
                      transition: ".2s ease-in-out",
                    }}
                    src={`https://avatars.dicebear.com/api/jdenticon/${dao.pubkey}.svg`}
                  />
                }
                sx={{
                  borderRadius: "100px",
                }}
              />
            </Tooltip>
          ))}
        </Tabs>
      )}
    </Stack>
  );
};
