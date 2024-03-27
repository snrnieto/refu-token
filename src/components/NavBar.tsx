"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { DropDown } from "./DropDown";
import ConnectButton from "./ConnectButton";
import { useWeb3ModalAccount } from "@web3modal/ethers/react";

export const NavBar = () => {
  const { address } = useWeb3ModalAccount();

  return (
    <section className="flex w-full  items-center  bg-blue-900 px-6 py-4">
      <Image
        src="/assets/logo.png"
        alt="Logo"
        priority
        width={200}
        height={100}
        className="object-contain relative"
      />

      <div className="flex justify-between items-center w-full">
        <div className="flex items-center gap-4">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
        </div>
        <div>{address ? <DropDown /> : <ConnectButton />}</div>
      </div>
    </section>
  );
};
