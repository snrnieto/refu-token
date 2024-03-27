"use client";
import { NextUIProvider } from "@nextui-org/react";
import React from "react";
import { Web3Modal } from "./Web3Provider";

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <Web3Modal>
      <NextUIProvider>{children}</NextUIProvider>
    </Web3Modal>
  );
};
