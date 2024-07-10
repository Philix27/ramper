import React from "react";
import Navbar from "../_comps/navbar";
import { AiFillEdit } from "react-icons/ai";

export default function AccountPage() {
  return (
    <>
      <Navbar title={"Profile"} icon={AiFillEdit} />
      <div className={"flex flex-col items-center px-8 py-4 mb-10"}>
        <div>AccountPage</div>
      </div>
    </>
  );
}
