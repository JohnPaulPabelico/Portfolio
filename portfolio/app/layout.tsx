import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto_init = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto",
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
      <body className={roboto_init.variable}>{children}</body>
    </html>
  );
}
