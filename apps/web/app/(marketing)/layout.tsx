import React, { ReactNode } from "react";
import { MarketingNavItems, NavbarMarketing } from "./_comps/navbar";
import FooterSection from "./_comps/footer";

export default function MarketingLayout(props: { children: ReactNode }) {
  return (
    <div className="h-screen ">
      <NavbarMarketing title={"OffRamp"} items={MarketingNavItems} />
      <div className="min-h-screen">{props.children}</div>
      <FooterSection />
    </div>
  );
}
