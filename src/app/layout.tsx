import type { Metadata } from "next";
import { Quicksand } from "next/font/google";

import "@/styles/globals.css"
import PreLoader from "@/components/layout/PreLoader";
import { Header } from "@/components/layout/Header";
import ScrollProgress from "@/components/layout/ScrollProgress";

const quicksand = Quicksand({ 
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "webdev:JOHN",
  description: "My Next app portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <PreLoader font={quicksand.className}>
        <ScrollProgress />
        <Header />
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          {children}
        </main>
      </PreLoader>
    </html>
  );
}
