"use client";

import React from "react";
import { AppButton, TextH, TextP } from "@repo/ui";
import { useBalance } from "wagmi";
import { TokenAddress, useMinipay } from "@/contract";
import { Navbar, shortenAddress, formatBalance, Spinner } from "../_comps";
import { AirtimeBeneficiaryRpc } from "@repo/rpc";
import { RowItem } from "./RowItem";
import List from "./List";

export default function AirtimeBeneficiaryPage() {
  const rpc = new AirtimeBeneficiaryRpc();

  const { walletAddress } = useMinipay();
  const result = useBalance({
    address: walletAddress,
    token: TokenAddress.CUSD_TESTNET as `0x${string}`,
  });

  // if (!walletAddress) {
  //   return <Spinner />;
  // }
  // if (result.isLoading) {
  //   return <Spinner />;
  // }

  return (
    <>
      <Navbar title={"Profile"} />
      <div className={"flex flex-col items-center px-4 py-6 mb-10"}>
        <TextH v="h5">Personal</TextH>
        <div className="w-full my-4 bg-secondary px-4 rounded-md">
          {walletAddress && (
            <RowItem left={"Wallet"} right={shortenAddress(walletAddress)} />
          )}
          {result.data && (
            <RowItem
              left={"Balance"}
              right={`${result.data?.symbol}- ${formatBalance(
                result.data?.value!
              ).slice(0, -15)}`}
            />
          )}

          <RowItem left={"Email"} right={"myemail@gmail.com"} />
          <RowItem left={"Phone"} right={"2348108850572"} />
        </div>
        <div className="flex items-center justify-between w-full px-4">
          <TextH v="h5">Beneficiary</TextH>
          <AppButton className="w-fit py-[1px]">Add</AppButton>
        </div>
        <div className="w-full my-4 bg-secondary px-4 rounded-md">
          <List />
        </div>
      </div>
    </>
  );
}
