import { Hero } from "@/components/hero"
import { PriceBand } from "@/components/price-band"
import { GuestJourney } from "@/components/guest-journey"
import { HowItWorks } from "@/components/how-it-works"
import { ProofWall } from "@/components/proof-wall"
import { EverythingElse } from "@/components/everything-else"
import { Flagship } from "@/components/flagship"
import { Questions } from "@/components/questions"
import { SiteFooter } from "@/components/site-footer"
import { MobileReplyBar } from "@/components/mobile-reply-bar"

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <PriceBand />
        <GuestJourney />
        <HowItWorks />
        <ProofWall />
        <EverythingElse />
        <Flagship />
        <Questions />
      </main>
      <SiteFooter />
      <MobileReplyBar />
    </>
  )
}
