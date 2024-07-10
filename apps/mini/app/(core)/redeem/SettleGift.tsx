"use client"
import { AppButton, AppTextInput, TextH, TextP } from "@repo/ui";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { IoClose } from "react-icons/io5";

type INetwork = "MTN" | "AIRTEL" | "GLO";
export default function SettleCard(props: { onClose: VoidFunction }) {
    const [sendTo, setSendTo] = useState<INetwork>("MTN");
  return (
    <div
      className={`bg-black/50 w-full 
      fixed left-0 z-10
      top-0 mt-[50px]
      h-screen
      flex flex-col items-center justify-center`}
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.5 }}
        className="bg-background w-[90%] rounded-t-lg px-4 py-2"
      >
        <div className="flex items-center justify-between mt-2 mb-4">
          <div />
          <div
            className="bg-secondary/60 rounded-lg p-[2px]"
            onClick={props.onClose}
          >
            <IoClose className="text-white" />
          </div>
        </div>
        <div className="px-4 py-2 rounded-md mb-2">
          <select
            className="w-full p-2 border-none outline-none"
            onChange={(e) => {
              setSendTo(e.target.value as INetwork);
            }}
          >
            <option value="MTN">MTN</option>
            <option value="AIRTEL">AIRTEL</option>
            <option value="GLO">GLO</option>
          </select>
          <AppTextInput
            control={undefined}
            name={"phone"}
            place="Enter recipient's phone number"
            className="mt-2"
            label="Phone"
          />
          <AppButton className="my-2">Send</AppButton>
        </div>
      </motion.div>
    </div>
  );
}
