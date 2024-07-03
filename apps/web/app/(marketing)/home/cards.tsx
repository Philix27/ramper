"use client"

import React from "react"
import { AppImg } from "../../lib"

import { TextH, TextP } from "@repo/ui";

const cardItems = [
  {
    title: "Flexible Savings Options",
    img: AppImg.pay.pay1,
    subtitle: `
      We aim to provide clients with flexible ways to save,
      allowing them to contribute a fixed amount of their
      salary monthly with ease and convenience.
    `,
  },
  {
    title: "Low-Interest Loans",
    img: AppImg.pay.pay4,
    subtitle: `Through our platform, we strive to offer clients 
      low-interest rate loans, enabling
      them to access credit responsibly and affordably.`,
  },
  {
    title: "Utility Bill Payments",
    img: AppImg.pay.pay5,
    subtitle: `In addition to savings and loans, 
    we also offer the convenience of utility
    bill payments through our app,
    further enhancing the experience for our clients.`,
  },
  {
    title: "Global Socials",
    img: AppImg.pay.pay3,
    subtitle: `Global socials is a product of Paymais where 
    subscribers pay #500 every
    Sunday for 50 Sundays `,
  },
]
export default function CardsSection() {
  return (
    <div
      className={`
      grid md:grid-cols-3 grid-cols-1 
      items-start justify-center 
      w-full my-5 gap-4 mx-0
    `}
    >
      {cardItems.map((item, i) => (
        <div
          className={
            "border-r-ring md:mx-4 bg-primary rounded-md p-4 mb-5"
          }
          key={i}
        >
          <div className="p-2">
            <div className={"w-full flex items-center justify-center mb-2"}>
              <img src={item.img} className={"md:w-[300px] h-[350px] w-full"} />
            </div>

            <TextH v="h3" className="mb-4 text-primary-foreground">
              {item.title}
            </TextH>
            <TextP v="p5" className={"text-primary-foreground"}>
              {item.subtitle}
            </TextP>
          </div>
        </div>
      ))}
    </div>
  )
}
