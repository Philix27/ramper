import { TextP } from "@repo/ui";
import React from "react";

export default function Dashboard() {
  const dashboardList = [
    { title: "Airtime", onClick: () => {} },
    { title: "Data", onClick: () => {} },
    { title: "Subscription", onClick: () => {} },
    { title: "P2P", onClick: () => {} },
    { title: "Gift Card", onClick: () => {} },
    { title: "Beneficiary", onClick: () => {} },
  ];

  return (
    <div
      className={`grid grid-cols-3 
        gap-x-2 gap-y-2`}
    >
      {dashboardList.map((val, i) => (
        <div
          className={`bg-secondary 
              px-2 rounded-sm py-2
              flex items-center justify-center`}
        >
          <TextP v="p6">{val.title}</TextP>
        </div>
      ))}
    </div>
  );
}
