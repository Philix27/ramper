import React, { ReactNode } from "react";

import { BottomNav } from "./_comps";
import Navbar from "./_comps/navbar";

export default function PageLayout(props: { children: ReactNode }) {
  return (
    <div className={"bg-background"}>
      <Navbar />
      <div className="px-4 py-4">{props.children}</div>
      <BottomNav />
    </div>
  );
}
