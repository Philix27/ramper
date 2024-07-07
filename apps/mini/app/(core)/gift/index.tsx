import { TextH, TextP } from "@repo/ui";
import React from "react";
import CreateGiftCard from "./create";

export default function GiftPage() {
  return (
    <div className="px-4">
      <TextH v={"h3"} className="text-white">
        Create gift card
      </TextH>
      <TextP v={"p5"}>Send a gift card to your loved ones</TextP>
      <CreateGiftCard />
    </div>
  );
}
