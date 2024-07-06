import { AppTextInput, TextP } from "@repo/ui";
import React from "react";

export default function CreateGiftCard() {
  return (
    <div className="w-full mt-4">
      <TextP className="mb-2">Send to:</TextP>
      <select className="w-full p-2 border-none outline-none">
        <option>Phone</option>
        <option>Email</option>
        <option>Wallet Address</option>
      </select>
      <div>
        <AppTextInput control={undefined} name={"email"} place="Email" className="mt-2" />
      </div>
    </div>
  );
}
