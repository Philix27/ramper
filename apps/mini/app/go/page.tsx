"use client";
import { AppContract, ContractFn } from "@/contract";
import React from "react";
import { useReadContract, useWriteContract } from "wagmi";

export default function Page() {
  const { writeContract } = useWriteContract();

  const result = useReadContract({
    abi: AppContract.abi,
    address: AppContract.address as `0x${string}`,
    functionName: "getAllCards",
  });

  if (result.data) {
    console.log("result", result.data);
  }

  return (
    <div className="flex flex-col gap-y-4 items-center">
      <button
        className="bg-primary my-4 px-5 py-2 rounded-md text-white"
        onClick={() => {
          //   ContractFn.getAllCards({
          //     userAddress: "0x20F50b8832f87104853df3FdDA47Dd464f885a49",
          //   });
        }}
      >
        getAllCards
      </button>
      <button
        className="bg-primary my-4 px-5 py-2 rounded-md text-white"
        onClick={() => {
          ContractFn.getCardsCreatedBy({
            userAddress: "0x20F50b8832f87104853df3FdDA47Dd464f885a49",
          });
        }}
      >
        getCardsCreatedBy
      </button>
      <button
        className="bg-primary my-4 px-5 py-2 rounded-md text-white"
        onClick={() => {
          ContractFn.getCardsCreatedFor({
            userAddress: "0x20F50b8832f87104853df3FdDA47Dd464f885a49",
            identifier: "08108850572",
          });
        }}
      >
        getCardsCreatedFor
      </button>
      <button
        className="bg-primary my-4 px-5 py-2 rounded-md text-white"
        onClick={() => {
          //   ContractFn.createCard({
          //     userAddress: "0x20F50b8832f87104853df3FdDA47Dd464f885a49",
          //     createdFor: "08108850572",
          //     amount: 23,
          //   });
          writeContract({
            abi: AppContract.abi,
            address: AppContract.address as `0x${string}`,
            functionName: "transferFrom",
            args: [
              "0xd2135CfB216b74109775236E36d4b433F1DF507B",
              "0xA0Cf798816D4b9b9866b5330EEa46a18382f251e",
              123n,
            ],
          });
        }}
      >
        createCard
      </button>
      <button
        className="bg-primary my-4 px-5 py-2 rounded-md text-white"
        onClick={() => {
          ContractFn.updateCard({
            userAddress: "0x20F50b8832f87104853df3FdDA47Dd464f885a49",
            id: 2,
          });
        }}
      >
        updateCard
      </button>
    </div>
  );
}
