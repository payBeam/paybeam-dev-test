import React from "react"
import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "Invoice App",
  description: "frontend dev test",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      
      >
        {children}
      </body>
    </html>
  );
}
