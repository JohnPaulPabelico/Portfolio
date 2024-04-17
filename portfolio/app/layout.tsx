import type { Metadata } from "next";
import { Inter, Titillium_Web } from "next/font/google";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const roboto_init = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto",
});

const titilliumWeb_init = Titillium_Web({
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700", "900"],
  variable: "--font-titillium",
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "John Paul Pabelico | Web Developer",
  description: "A portfolio made with expertise.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto_init.variable} ${titilliumWeb_init.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
