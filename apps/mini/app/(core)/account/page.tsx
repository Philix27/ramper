import React from "react";
import Navbar from "../_comps/navbar";
import { AiFillEdit } from "react-icons/ai";
import { TextH, TextP } from "@repo/ui";

export default function AccountPage() {
  return (
    <>
      <Navbar title={"Profile"} icon={AiFillEdit} />
      <div className={"flex flex-col items-center px-8 py-4 mb-10"}>
        <div className="w-full my-4">
          <TextH v="h5" className="text-white">
            Personal
          </TextH>
          <RowItem left={"Email"} right={"myemail@gmail.com"} />
          <RowItem left={"Phone"} right={"2348108850572"} />
        </div>
        <div className="w-full mb-4">
          <TextH v="h5" className="text-white">
            Beneficiary
          </TextH>
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
      <TextP className="text-white">{props.left} </TextP>
      <TextP>{props.right}</TextP>
    </div>
  );
}
