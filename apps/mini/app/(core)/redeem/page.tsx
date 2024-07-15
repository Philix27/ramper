"use client";
import { cn, TextP } from "@repo/ui";
import React, { useState } from "react";
import { EmailGiftCards } from "./CardsEmail";
import { PhoneGiftCards } from "./CardsPhone";
import Navbar from "../_comps/navbar";
import { IoAdd } from "react-icons/io5";

export default function RedeemPage() {
  const [isEmail, setIsEmail] = useState(true);
  return (
    <>
      <Navbar title={"Redeem Gift Card"} icon={IoAdd} />
      <div className={"flex flex-col items-center px-8 py-4 mb-10"}>
        <div className="flex items-center bg-secondary w-fit rounded-lg p-[2px]">
          <div
            className={cn("px-4 py-1 rounded-sm ", isEmail && "bg-background")}
            onClick={() => setIsEmail(true)}
          >
            <TextP>Email</TextP>
          </div>
          <div
            className={cn("px-4 py-1 rounded-sm ", !isEmail && "bg-background")}
            onClick={() => setIsEmail(false)}
          >
            <TextP>Phone</TextP>
          </div>
        </div>

        {isEmail ? <EmailGiftCards /> : <PhoneGiftCards />}
      </div>
    </>
  );
}
