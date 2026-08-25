import type { Metadata } from "next";
import { Geist, Inter } from "next/font/google";
import "./globals.css";

// Two families, both Autumn's own: Inter 500 for everything readable,
// Geist 400 for the letterspaced label tier. One weight each.
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  axes: ["opsz"],
  display: "swap",
  preload: true,
});

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://autumn-homepage.local"),
  title: "Autumn — We buy the ads. You pay when a guest books.",
  description:
    "Autumn runs Google Ads, Google Maps and Google Hotel Ads for independent inns. We cover the ad spend ourselves. You pay 13% of the bookings we drive — and nothing at all if we drive none.",
  openGraph: {
    title: "Autumn — We buy the ads. You pay when a guest books.",
    description:
      "Autumn runs Google Ads, Google Maps and Google Hotel Ads for independent inns. We cover the ad spend ourselves. You pay 13% of the bookings we drive — and nothing at all if we drive none.",
    images: ["/images/houses-water.jpg"],
    type: "website",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    /* data-scroll-behavior tells Next to suspend the smooth scrolling below
       during route transitions. Without it every navigation animates the whole
       page up from wherever the reader was, which reads as landing mid-page
       and being dragged to the top. Anchor links keep their smooth scroll. */
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${geist.variable}`}
    >
      <head>
        {/* The photo fade is opt-in on a data attribute the client sets. With
            JavaScript off that attribute never arrives, so force it here. */}
        <noscript>
          <style>{".au-photo img{opacity:1}"}</style>
        </noscript>

        {/* Speculation rules: the browser prerenders a route once the reader
            looks like they are going to ask for it. Ten routes, all static and
            small, so a prerender costs almost nothing and navigation lands
            already painted. Unsupported browsers ignore the script entirely
            and get exactly today's behaviour — which is why this is the one
            piece of ambition worth spending on a page read in ten seconds. */}
        <script
          type="speculationrules"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              prerender: [
                {
                  where: { href_matches: "/*" },
                  eagerness: "moderate",
                },
              ],
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
