import { TextP } from "@repo/ui";
import React, { useState } from "react";
import { PurchaseAirtime } from "../redeem/PurchaseAirtime";
import { ModalWrapper } from "../_comps";
import { PurchaseData } from "../redeem/PurchaseData";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();
  const [showModal, setShowModal] = useState<
    "AIRTIME" | "DATA" | "SUB" | "NONE"
  >("NONE");
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
      title: "P2P",
      onClick: () => {
        router.push("/p2p");
      },
    },
    {
      title: "Gift Card",
      onClick: () => {
        router.push("/redeem");
      },
    },
    {
      title: "Beneficiary",
      onClick: () => {
        router.push("/account");
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
