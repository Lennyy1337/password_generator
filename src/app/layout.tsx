import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Password Generator",
  description: "The coolest password generator ever!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   
      <html lang="en">
   
        <body className={inter.className}><NextUIProvider>{children}</NextUIProvider></body>
       
      </html>
  
  );
}
