import React, { FC } from "react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

// Default styles that can be overridden by your app
require("@solana/wallet-adapter-react-ui/styles.css");

export const Wallet: FC = () => {
  // Can be set to 'devnet', 'testnet', or 'mainnet-beta'
  return (
    <WalletMultiButton
      style={{
        background: "#1C1917",
        height: "40px",
        color: "#FDCC17",
      }}
    />
  );
};
