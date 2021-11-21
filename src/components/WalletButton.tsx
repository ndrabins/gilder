import { FC, useState } from "react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { IconButton, Stack, Menu, MenuItem } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { RootState } from "../store/store";
import { selectNetwork } from "../slices/web3Slice";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";

// Default styles that can be overridden by your app
require("@solana/wallet-adapter-react-ui/styles.css");

export const Wallet: FC = () => {
  // Can be set to 'devnet', 'testnet', or 'mainnet-beta'
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const { network } = useAppSelector((state: RootState) => state.web3);
  const dispatch = useAppDispatch();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleNetworkSelect = (network: Networks) => {
    // @ts-ignore
    dispatch(selectNetwork(network));
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Stack flexDirection="row">
      <WalletMultiButton
        style={{
          background: "#1C1917",
          height: "40px",
          color: "#FDCC17",
        }}
      />
      <IconButton
        aria-label="add member"
        onClick={handleClick}
        sx={{ ml: 1, color: "grey.300" }}
      >
        <SettingsIcon />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem
          onClick={() => handleNetworkSelect(WalletAdapterNetwork.Mainnet)}
          selected={network === WalletAdapterNetwork.Mainnet}
        >
          Mainnet
        </MenuItem>
        <MenuItem
          onClick={() => handleNetworkSelect(WalletAdapterNetwork.Testnet)}
          selected={network === WalletAdapterNetwork.Testnet}
        >
          Testnet
        </MenuItem>
        <MenuItem
          onClick={() => handleNetworkSelect(WalletAdapterNetwork.Devnet)}
          selected={network === WalletAdapterNetwork.Devnet}
        >
          Devnet
        </MenuItem>
      </Menu>
    </Stack>
  );
};
