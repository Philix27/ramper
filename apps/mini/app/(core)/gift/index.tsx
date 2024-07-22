"use client";
import { TextH } from "@repo/ui";
import React from "react";
import {CreateGiftCard} from "./create";
import { Navbar } from "../_comps";
import { CardsCreationHistory } from "./history";
import { MdHistory } from "react-icons/md";
import Dashboard from "./dashboard";
import { FxCrypto } from "./Fx";

export default function GiftPage() {

  return (
    <>
      <Navbar title={"Home"} icon={MdHistory} />
      <div className="px-6 mb-10">
        <div className="my-4">
          <TextH v="h2" className={"text-sm"}>
            Balance:
          </TextH>
          <TextH v="h2" className={"text-primary font-bold"}>
            300 cUSD
          </TextH>
        </div>
        <Dashboard />
        <FxCrypto />
        {/* <CreateGiftCard /> */}
        <CardsCreationHistory />
      </div>
    </>
  );
}
