"use client";

import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  User,
} from "@nextui-org/react";
import { useDisconnect, useWeb3ModalAccount } from "@web3modal/ethers/react";

export function DropDown() {
  const { disconnect } = useDisconnect();
  const { address, chainId } = useWeb3ModalAccount();

  return (
    <div className="flex items-center gap-4">
      <Dropdown placement="bottom-start" className="text-black">
        <DropdownTrigger>
          <User
            as="button"
            className="transition-transform"
            description={`Chain ID: ${chainId}`}
            name={`${address?.slice(0, 6)}...${address?.slice(-4)}`}
          />
        </DropdownTrigger>
        <DropdownMenu aria-label="User Actions" variant="flat">
          <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
          <DropdownItem
            key="logout"
            color="danger"
            className="text-red-500"
            onClick={() => disconnect()}
          >
            Log Out
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
