import type { Metadata, Viewport } from "next"
import { Inter, Geist } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  weight: "500",
  display: "swap",
  variable: "--font-inter",
  preload: true,
})

const geist = Geist({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-geist",
  preload: true,
})

export const metadata: Metadata = {
  title: "Autumn — We buy the ads. You pay when a guest books.",
  description:
    "Autumn runs Google Ads, Google Maps and Google Hotel Ads for independent inns. We cover the ad spend ourselves. You pay 13% of the bookings we drive — and nothing at all if we drive none.",
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title: "Autumn — We buy the ads. You pay when a guest books.",
    description:
      "Autumn runs Google Ads, Google Maps and Google Hotel Ads for independent inns. We cover the ad spend ourselves. You pay 13% of the bookings we drive — and nothing at all if we drive none.",
    images: [{ url: "/images/houses-water.png" }],
  },
}

export const viewport: Viewport = {
  themeColor: "#111112",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`bg-background ${inter.variable} ${geist.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
