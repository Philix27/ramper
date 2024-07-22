import { TextP } from "@repo/ui";
import React, { useState } from "react";
import { PurchaseAirtime } from "../redeem/PurchaseAirtime";
import { ModalWrapper } from "../_comps";
import { PurchaseData } from "../redeem/PurchaseData";
import { useRouter } from "next/navigation";
import { AppStores } from "@/lib";

export default function Dashboard() {
  const router = useRouter();
  const store = AppStores.useSettingsStore();
  const [showModal, setShowModal] = useState<
    "AIRTIME" | "DATA" | "SUB" | "NONE"
  >("NONE");
  const [nextForm, setNextForm] = useState<"BUY" | "SELL" | "NONE">("NONE");
  const dashboardList = [
    {
      title: "Airtime",
      onClick: () => {
        setShowModal("AIRTIME");
      },
    },
    {
      title: "Data",
      onClick: () => {
        setShowModal("DATA");
      },
    },
    {
      title: "Subscription",
      onClick: () => {
        setShowModal("SUB");
      },
    },
    {
      title: "Sell",
      onClick: () => {
        store.update({ homeContent: "SELL" });
      },
    },
    {
      title: "Buy",
      onClick: () => {
        store.update({ homeContent: "BUY" });
      },
    },
  ];

  return (
    <div
      className={`grid grid-cols-3 
        gap-x-2 gap-y-2`}
    >
      {dashboardList.map((val, i) => (
        <div
          key={i}
          onClick={val.onClick}
          className={`bg-secondary 
              px-2 rounded-sm py-2
              flex items-center justify-center`}
        >
          <TextP v="p6">{val.title}</TextP>
        </div>
      ))}
      {showModal == "AIRTIME" && (
        <ModalWrapper>
          <PurchaseAirtime onClose={() => setShowModal("NONE")} />
        </ModalWrapper>
      )}
      {showModal == "DATA" && (
        <ModalWrapper>
          <PurchaseData onClose={() => setShowModal("NONE")} />
        </ModalWrapper>
      )}
      {showModal == "SUB" && (
        <ModalWrapper>
          <PurchaseAirtime onClose={() => setShowModal("NONE")} />
        </ModalWrapper>
      )}
    </div>
  );
}
