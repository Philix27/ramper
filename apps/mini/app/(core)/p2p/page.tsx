import React from "react";
import { Navbar } from "../_comps";
import P2pOffers from "./Offers";
import { TextP } from "@repo/ui";

export default function P2Ppage() {
  return (
    <>
      <Navbar title={"P2P Exchange"} />
      <div className={"w-full px-6"}>
        <div className="w-full py-2">
          <TextP>You need to verify your account first</TextP>
        </div>
        <P2pOffers />
      </div>
    </>
  );
}
