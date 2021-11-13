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
import { fetchDaos, selectDao } from "../slices/daoSlice";
import { useTheme } from "@mui/material/styles";
import { RootState } from "../store/store";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

export const DaoSwitcher: FC = () => {
  const dispatch = useAppDispatch();
  const { daos, daoData } = useAppSelector((state: RootState) => state.dao);
  const [switcherValue, setSwitcherValue] = useState(0);

  const theme = useTheme();

  const selectDao = (event: any, index: number) => {
    // this causes infinite loop for some reason.. fix..
    setSwitcherValue(index);
    // @ts-ignore
    // dispatch(selectDao(daos[index]));
    console.log(index);
    console.log("selecting", daos[index]);
  };

  const addDao = () => {};

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
          sx={{ border: `1px dashed ${theme.palette.grey[500]}`, mb: 2 }}
          onClick={addDao}
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
      {daos && daoData && (
        <Tabs
          orientation="vertical"
          variant="scrollable"
          onChange={selectDao}
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
                      color:
                        daoData.pubkey === dao.pubkey
                          ? "secondary.200"
                          : "grey.300",
                      bgcolor:
                        daoData.pubkey === dao.pubkey
                          ? "secondary.900"
                          : "grey.800",
                    }}
                  >
                    {" "}
                    {dao.pubkey.slice(0, 1)}
                  </Avatar>
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
