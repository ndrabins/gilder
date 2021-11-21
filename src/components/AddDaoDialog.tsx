import React, { useState } from "react";
import {
  Button,
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { LoadingButton } from "@mui/lab";
import { useTheme } from "@mui/material/styles";
import { GildCreation } from "./GildCreation";
import { useAppDispatch } from "../store/hooks";
import { createDao } from "../slices/daoSlice";

interface AddDaoDialogProps {
  open: boolean;
  onClose(): void;
}

export const AddDaoDialog = (props: AddDaoDialogProps) => {
  const dispatch = useAppDispatch();
  const { open, onClose } = props;
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClose = () => {
    onClose();
  };

  const handleCreate = () => {
    dispatch(createDao("test"));
  };

  return (
    <Dialog
      fullScreen={fullScreen}
      open={open}
      onClose={handleClose}
      aria-labelledby="responsive-dialog-title"
      maxWidth="xl"
    >
      <DialogContent sx={{ bgcolor: theme.palette.grey[800] }}>
        <DialogContentText>
          <GildCreation />
        </DialogContentText>
      </DialogContent>
      <DialogActions sx={{ bgcolor: theme.palette.grey[800], p: 2 }}>
        <Button
          autoFocus
          onClick={handleClose}
          color="secondary"
          sx={{ mr: 2 }}
        >
          Close
        </Button>

        <Box>
          <LoadingButton
            variant="contained"
            color="secondary"
            onClick={handleCreate}
            // loading={mintStatus === "loading"}
            sx={{
              background: `linear-gradient(135deg, ${theme.palette.secondary.light},  ${theme.palette.secondary.dark})`,
            }}
          >
            Create DAO
          </LoadingButton>
        </Box>
      </DialogActions>
    </Dialog>
  );
};
