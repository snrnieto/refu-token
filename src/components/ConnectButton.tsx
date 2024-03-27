"use client";
import { Button } from "@nextui-org/react";
import { useWeb3Modal } from "@web3modal/ethers/react";

export default function ConnectButton() {
  const { open } = useWeb3Modal();

  return (
    <Button color="primary" onClick={() => open()}>
      Connect Wallet
    </Button>
  );
}
