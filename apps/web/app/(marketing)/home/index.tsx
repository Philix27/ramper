"use client"

import React from "react"
import CardsSection from "./cards"
import FooterSection from "./footer"
import HeroSection from "./hero"
import HeroCenter from "./heroC"
import JumbutronSection from "./jumbutron"
import { AppImg } from "../../lib"

export default function HomePage() {
  return (
    <div>
      <section className="container flex flex-col items-center gap-5 pb-8 pt-6 md:py-10 md:w-[80%] w-full">
        <HeroCenter
          title={"Cluster contribution and instant loans"}
          subtitle={`We drive to optimize 
          cluster contribution (Adashi) 
          digitally, in order to assist civil servants,
          business owners and private individuals with a
          seamless way of saving and access to instant loans.`}
        />
        <HeroSection
          img={AppImg.chain}
          title={"Our Mission"}
          subtitle={`Our mission is to provide our clients with a 
          transformative and user-friendly platform for savings 
          and financial empowerment. We are committed to 
          offering a seamless way for individuals to 
          save a fixed amount of their salary every month, 
          fostering a culture of disciplined saving
          and financial responsibility.`}
        />
        <JumbutronSection
          title={"Our core offerings"}
          subtitle="There are many variations of passages of 
          Lorem Ipsum available but the 
          majority have suffered alteration in some form."
        />

        <HeroSection
          imgFirst
          img={AppImg.invoice}
          title={"Our vision"}
          subtitle={`Our vision far extends beyond 
          traditional savings models, aiming to 
          eradicate the excuses commonly associated 
          with Adashi/Ajo and provide clients with 
          a seamless and flexible way to save. Through 
          this product, we envision a future where financial 
          stability is within reach for all, where individuals have the opportunity 
          to grow their savings and access low interest loans with ease.`}
        />
        <JumbutronSection
          title={"Access to Funds"}
          subtitle={`We are dedicated to ensuring that our 
          clients have access to their 
          funds as at when needed,
          providing them with financial
          flexibility and peace of mind`}
        />
        <CardsSection />
        <FooterSection />
      </section>
    </div>
  )
}
