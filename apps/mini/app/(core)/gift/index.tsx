import { TextH } from "@repo/ui";
import React from "react";
import CreateGiftCard from "./create";

export default function GiftPage() {
  return (
    <div className="px-4">
      <TextH v={"h3"} className="text-white">
        Send a gift card to your loved ones
      </TextH>
      <CreateGiftCard />
    </div>
  );
}
