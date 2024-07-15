"use client";

import React from "react";
import Navbar from "../_comps/navbar";
import { TextH, TextP } from "@repo/ui";
import { ApiClient } from "@/lib";
import { useQuery } from "@tanstack/react-query";

export default function AccountPage() {
  
  const query = useQuery({
    queryKey: ["profile"],
    queryFn: () => {
      ApiClient.beneficiary.$get({ json: { user_id: 2 } });
    },
  });

  return (
    <>
      <Navbar title={"Profile"} />
      <div className={"flex flex-col items-center px-4 py-4 mb-10"}>
        <TextH v="h5" >
          Personal
        </TextH>
        <div className="w-full my-4 bg-secondary px-4 rounded-md">
          <RowItem left={"Wallet"} right={"0x23433"} />
          <RowItem left={"Balance"} right={"#15,000"} />
          <RowItem left={"Email"} right={"myemail@gmail.com"} />
          <RowItem left={"Phone"} right={"2348108850572"} />
        </div>
        <TextH v="h5" >
          Beneficiary
        </TextH>
        <div className="w-full my-4 bg-secondary px-4 rounded-md">
          <RowItem left={"Phone"} right={"2348108850572"} />
          <RowItem left={"Phone"} right={"2348108850572"} />
          <RowItem left={"Phone"} right={"2348108850572"} />
          <RowItem left={"Phone"} right={"2348108850572"} />
          <RowItem left={"Phone"} right={"2348108850572"} />
          <RowItem left={"Phone"} right={"2348108850572"} />
        </div>
      </div>
    </>
  );
}

function RowItem(props: { left: string; right: string }) {
  return (
    <div className="flex justify-between items-center py-2 border-b border-accent">
      <TextP className={"text-card-foreground"}>{props.left} </TextP>
      <TextP>{props.right}</TextP>
    </div>
  );
}
