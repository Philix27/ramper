"use client";
import { ApiClient, AppStores } from "@/app/lib";
import { AppButton, AppTextInput, cn, TextP } from "@repo/ui";
import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { AppContract, transferCusdTokens } from "@/contract/const";
import { useMinipay } from "@/contract";
import { useWriteContract } from "wagmi";

export const formSchema = z.object({
  purpose: z.string().max(30, { message: "Maximum of 25 characters" }),
  email: z.string().max(30, { message: "Maximum of 25 characters" }).optional(),
  card_owner: z.string().optional(),
  phone: z
    .string()
    .max(11, { message: "Maximum of 11 numbers" })
    .min(11, { message: "Minimum of 11 numbers" })
    .optional(),
});

export const defaultValues: z.infer<typeof formSchema> = {
  phone: "",
  purpose: "",
  card_owner: "",
};

export type IFormSchema = z.infer<typeof formSchema>;

type ISendTo = "PHONE" | "EMAIL";
type IAmount = 100 | 200 | 300 | 400 | 500 | 1000;

export function FxCrypto() {
  const [sendTo, setSendTo] = useState<ISendTo>("PHONE");
  const [amount, setAmount] = useState<IAmount>(100);
  const { writeContract } = useWriteContract();
  const { walletAddress } = useMinipay();
  const store = AppStores.useSettingsStore();

  const form = useForm<IFormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultValues,
  });

  async function onSubmit(value: IFormSchema) {
    console.log("Called mutate", parseInt(amount as unknown as string) / 1500);
    // const trxnHash = await transferCusdTokens({
    //   userAddress: walletAddress!,
    //   amount: parseInt(amount as unknown as string),
    // });
    // console.log("Hashed", trxnHash);
    // writeContract({
    //   abi: AppContract.abi,
    //   address: AppContract.address as `0x${string}`,
    //   functionName: "createCard",
    //   args: [value.phone, parseInt(amount as unknown as string)],
    // });
    // mutation.mutate({
    //   purpose: value.purpose,
    //   phone: value.phone,
    //   email: value.email,
    //   card_owner: value.card_owner,
    // });
  }

  return (
    <div className="w-full mt-4">
      {store.homeContent === "BUY" && (
        <TextP v="p3" className="mb-2 font-bold text-green-500">
          BUY
        </TextP>
      )}
      {store.homeContent === "SELL" && (
        <TextP v="p3" className="mb-2 font-bold  text-red-500">
          SELL
        </TextP>
      )}

      <div className="w-full flex flex-col items-center justify-center">
        <AppTextInput
          errorMessage={form.formState.errors.phone?.message}
          control={form.control.register("phone")}
          name="Amount"
          place={store.homeContent === "SELL" ? "cUSD" : "Naira"}
          className="mt-2"
          label={
            store.homeContent === "SELL" ? "Amount in cUSD" : "Amount in naira"
          }
          type="number"
        />

        <TextP className="mb-2">Amount:</TextP>

        <AppButton
          className={cn(
            "mt-5 mb-2 w-[80%]",
            store.homeContent === "BUY" && "bg-green-500"
          )}
          onClick={() => {
            // form.handleSubmit(onSubmit)();
          }}
        >
          {store.homeContent === "SELL" ? "SELL" : "BUY"}
        </AppButton>
      </div>
    </div>
  );
}
