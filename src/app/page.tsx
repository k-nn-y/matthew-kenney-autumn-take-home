import { Hero } from "@/components/Hero";
import { ReplyBar } from "@/components/ReplyBar";
import { SiteHeader } from "@/components/SiteHeader";
import { PriceBand } from "@/components/sections/PriceBand";
import { GuestJourney } from "@/components/sections/GuestJourney";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Proof } from "@/components/sections/Proof";
import { EverythingElse } from "@/components/sections/EverythingElse";
import { Flagship } from "@/components/sections/Flagship";
import { Questions } from "@/components/sections/Questions";
import { SiteFooter } from "@/components/SiteFooter";

/**
 * One route, one scroll, in the order the board sets it out. The reader is an
 * owner-operator who arrived from a cold email and decides in about ten
 * seconds, so the price of a booking is the second thing on the page.
 */
export default function Home() {
  return (
    <>
      <SiteHeader variant="on-photo" switchAfter="chrome-switch" />
      <Hero />
      <main>
        <PriceBand />
        {/* The line where the bare chrome becomes the floating bar. */}
        <div id="chrome-switch" />
        {/* The hero's secondary CTA — "See what we'd actually do" — lands here. */}
        <div id="what-we-do">
          <GuestJourney />
        </div>
        <HowItWorks />
        <Proof />
        <EverythingElse />
        <Flagship />
        <Questions />
      </main>
      <SiteFooter />
      <ReplyBar />
    </>
  );
}
