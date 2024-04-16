import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import "@/styles/globals.css"
import PreLoader from "@/components/layout/PreLoader";

const poppins = Poppins({ 
  weight: ["300", "400", "500", "600", "700", "900"],
  style: ["normal", "italic"],
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
      <PreLoader font={poppins.className}>
        <main className="flex min-h-screen flex-col items-center justify-between p-24">{children}</main>
      </PreLoader>
    </html>
  );
}
