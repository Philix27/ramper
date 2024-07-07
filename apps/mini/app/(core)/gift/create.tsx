"use client";
import { AppButton, AppTextInput, TextP } from "@repo/ui";
import React, { useState } from "react";

type ISendTo = "PHONE" | "EMAIL" | "WALLET";

export default function CreateGiftCard() {
  const [sendTo, setSendTo] = useState<ISendTo>("PHONE");

  return (
    <div className="w-full mt-4">
      <TextP className="mb-2">Send to:</TextP>
      <select
        className="w-full p-2 border-none outline-none"
        onChange={(e) => {
          setSendTo(e.target.value as ISendTo);
        }}
      >
        <option value="PHONE">Phone</option>
        <option value="EMAIL">Email</option>
        <option value="WALLET">Wallet Address</option>
      </select>
      <div>
        {sendTo === "EMAIL" && (
          <AppTextInput
            control={undefined}
            name={"email"}
            place="Enter email"
            className="mt-2"
            label="Email"
          />
        )}
        {sendTo === "PHONE" && (
          <AppTextInput
            control={undefined}
            name={"phone"}
            place="Enter phone number"
            className="mt-2"
            label="Phone"
          />
        )}
        {sendTo === "WALLET" && (
          <AppTextInput
            control={undefined}
            name={"walletAddress"}
            place="Enter wallet address"
            className="mt-2"
            label="Wallet Address"
          />
        )}
      </div>
      <div>
        <AppTextInput
          control={undefined}
          name={"purpose"}
          place="Purpose"
          className="mt-2"
          label="Purpose"
        />
      </div>
      <AppButton className="my-2">Create</AppButton>
    </div>
  );
}
