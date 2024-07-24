"use client";

import React, { useState } from "react";
import { AppButton, TextH } from "@repo/ui";
import { useBalance } from "wagmi";
import { TokenAddress, useMinipay } from "@/contract";
import { Navbar, shortenAddress, formatBalance, ModalWrapper } from "../_comps";
import { RowItem } from "./RowItem";
import List from "./List";
import { AddBeneficiaryModal } from "./AddBene";

export default function AirtimeBeneficiaryPage() {
  const [showModal, setShowModal] = useState(false);
  const { walletAddress } = useMinipay();
  const result = useBalance({
    address: walletAddress,
    token: TokenAddress.CUSD_TESTNET as `0x${string}`,
  });

  // if (!walletAddress) {
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
          <AppButton
            className="w-fit py-[1px]"
            onClick={() => setShowModal(true)}
          >
            Add
          </AppButton>
        </div>
        <div className="w-full my-4 bg-secondary px-4 rounded-md">
          <List />
        </div>
      </div>
      {showModal && (
        <ModalWrapper>
          <AddBeneficiaryModal onClose={() => setShowModal(false)} />
        </ModalWrapper>
      )}
    </>
  );
}
