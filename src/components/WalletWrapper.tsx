import React, { FC, useMemo, useCallback, useState } from "react";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import {
  getLedgerWallet,
  getPhantomWallet,
  getSlopeWallet,
  getSolflareWallet,
  getSolletExtensionWallet,
  getSolletWallet,
} from "@solana/wallet-adapter-wallets";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { clusterApiUrl } from "@solana/web3.js";
import { WalletAdapterNetwork, WalletError } from "@solana/wallet-adapter-base";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { useAppSelector } from "../store/hooks";
import { RootState } from "../store/store";

// Default styles that can be overridden by your app
require("@solana/wallet-adapter-react-ui/styles.css");

export const WalletWrapper: FC = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [error, setError] = useState("");
  const { network } = useAppSelector((state: RootState) => state.web3);

  // Can be set to 'devnet', 'testnet', or 'mainnet-beta'

  // You can also provide a custom RPC endpoint
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  // @solana/wallet-adapter-wallets includes all the adapters but supports tree shaking --
  // Only the wallets you configure here will be compiled into your application
  const wallets = useMemo(
    () => [
      getPhantomWallet(),
      getSlopeWallet(),
      getSolflareWallet(),
      getLedgerWallet(),
      getSolletWallet({ network: network }),
      getSolletExtensionWallet({ network: network }),
    ],
    [network]
  );

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const onError = (error: WalletError) => {
    setOpen(true);
    setError(error.message);
  };

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect onError={onError}>
        {/* @ts-ignore */}
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <MuiAlert
            onClose={handleClose}
            severity="error"
            sx={{ width: "100%" }}
          >
            {error}
          </MuiAlert>
        </Snackbar>
        <WalletModalProvider>{children}</WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};
