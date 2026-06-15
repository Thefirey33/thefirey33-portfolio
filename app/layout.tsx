import type { Metadata } from "next";
import localFont from 'next/font/local';
import "./globals.css";
import { NavBar } from "./assets/components/nav-bar";
import { MobileProvider } from "./mobile-context";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import NextTopLoader from "nextjs-toploader";
import React from "react";

const websiteFont = localFont({
  src: "./assets/font/Terminus (TTF) 500.ttf",
  variable: "--font-terminus"
})


export const metadata: Metadata = {
  title: "Thefirey33's Portfolio",
  description: "A portfolio for Thefirey33's Projects and other silly things :3",
  openGraph: {
    title: "Thefirey33's Portfolio",
    description: "A portfolio for Thefirey33's Projects and other silly things :3",
    url: 'https://thefirey33.vercel.app',
    siteName: "Thefirey33's Portfolio",
    images: [{ url: 'https://thefirey33.vercel.app/content/siteBannerImage.png' }]
  },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html
      lang="en"
      className={`${websiteFont.className} h-full antialiased`}
    >

      <body className="min-h-full flex flex-col vc-init bg-black">

        {/** Vercel's Analytics and Speed Insight Components. Used because I need insights on this website. */}

        <Analytics />
        <SpeedInsights />

        <NextTopLoader showSpinner={false} color="var(--border-color)" />
        <MobileProvider>
          <NavBar />

          {children}
        </MobileProvider>

      </body>
    </html >
  );
}

