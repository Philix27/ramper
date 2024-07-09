import { TextH, TextP } from "@repo/ui";
import React from "react";
import CreateGiftCard from "./create";
import Navbar from "../_comps/navbar";
import { CardsCreationHistory } from "./history";

export default function GiftPage() {
  return (
    <>
      <Navbar title={"  Create gift card"} />
      <div className="px-8 py-4">
        <TextP v={"p5"}>Send a gift card to your loved ones</TextP>
        <CreateGiftCard />
        <CardsCreationHistory />
      </div>
    </>
  );
}
