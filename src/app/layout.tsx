import type { Metadata } from "next";
import { Alata } from "next/font/google";
import "./globals.scss";

const alata = Alata({
  variable: "--font-alata",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Notes",
  description: "Notes app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${alata.className}`}>{children}</body>
    </html>
  );
}
